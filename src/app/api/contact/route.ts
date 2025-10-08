import { Resend } from "resend";
import { z } from "zod";
import type { NextRequest } from "next/server";

const schema = z.object({
  name: z.string().min(1).max(80),
  email: z.string().email().max(120),
  message: z.string().min(1).max(5000),
});
const resend = new Resend(process.env.RESEND_API_KEY);

// naive in-memory limiter (per instance)
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000; // 1 min
const MAX_HITS = 5;

function limited(key: string): boolean {
  const now = Date.now();
  const rec = hits.get(key);
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(key, { count: 1, ts: now });
    return false;
  }
  if (rec.count >= MAX_HITS) return true;
  rec.count += 1;
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "0.0.0.0";
  if (limited(ip)) {
    return Response.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    console.log("Validation error:", parsed.error.flatten());
    return Response.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { name, email, message } = parsed.data;

  if (!process.env.CONTACT_TO_EMAIL || !process.env.RESEND_API_KEY) {
    return Response.json({ error: "Email not configured" }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
    });
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: "Email send failed" }, { status: 502 });
  }
}