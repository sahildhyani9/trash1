import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/about", priority: "0.8", changefreq: "monthly" as const },
  { path: "/programs", priority: "0.9", changefreq: "monthly" as const },
  { path: "/programs/foundational", priority: "0.8", changefreq: "monthly" as const },
  { path: "/programs/intermediate", priority: "0.8", changefreq: "monthly" as const },
  { path: "/programs/advanced", priority: "0.8", changefreq: "monthly" as const },
  { path: "/residency", priority: "0.9", changefreq: "monthly" as const },
  { path: "/community", priority: "0.7", changefreq: "weekly" as const },
  { path: "/resources", priority: "0.7", changefreq: "weekly" as const },
  { path: "/testimonials", priority: "0.6", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.7", changefreq: "monthly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ].join("\n"),
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
