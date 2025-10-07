import type { NextRequest } from "next/server";

export function GET(_req: NextRequest) {
  const host = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${host}/sitemap.xml`,
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}