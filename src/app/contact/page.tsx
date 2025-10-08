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
        <label htmlFor="name" className="block text-sm">Name</label>
        <input id="name" name="name" required className="w-full border p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" />

        <label htmlFor="email" className="block text-sm">Email</label>
        <input id="email" name="email" type="email" required className="w-full border p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" />

        <label htmlFor="message" className="block text-sm">Message</label>
        <textarea id="message" name="message" required rows={6} className="w-full border p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" />

        <button className="rounded bg-black text-white px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" disabled={state==="sending"}>
          {state==="sending" ? "Sending..." : "Send"}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {state==="ok" && <span className="text-green-600">Sent.</span>}
          {state==="err" && <span className="text-red-600">Failed. Try later.</span>}
        </p>
      </form>
    </main>
  );
}

