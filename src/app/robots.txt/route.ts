
export function GET() {
  const host = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${host}/sitemap.xml`,
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}