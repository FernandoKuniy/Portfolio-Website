"use client";
import { useState } from "react";

export default function Contact() {
  const [state, set] = useState<"idle"|"sending"|"ok"|"err">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    set("sending");
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        message: fd.get("message"),
      }),
    });
    set(res.ok ? "ok" : "err");
  }
  return (
    <main className="mx-auto max-w-lg p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input name="name" required placeholder="Name" className="w-full border p-2 rounded" />
        <input name="email" type="email" required placeholder="Email" className="w-full border p-2 rounded" />
        <textarea name="message" required rows={6} placeholder="Message" className="w-full border p-2 rounded" />
        <button className="rounded bg-black text-white px-4 py-2" disabled={state==="sending"}>
          {state==="sending" ? "Sending..." : "Send"}
        </button>
        {state==="ok" && <p className="text-green-600">Sent.</p>}
        {state==="err" && <p className="text-red-600">Failed. Try later.</p>}
      </form>
    </main>
  );
}
