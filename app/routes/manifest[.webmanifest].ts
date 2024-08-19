import type { WebAppManifest } from "@remix-pwa/dev";
import { json } from "@remix-run/node";

export const loader = () => {
  return json(
    {
      short_name: "PPN",
      name: "Promotional Products Now",
      description: "Welcome to Promotional Products Now",
      orientation: "portrait",
      display: "browser",
      lang: "en-US",
      start_url: "/",
      background_color: "#FFFFFF",
      theme_color: "#0079C0",
    } as WebAppManifest,
    {
      headers: {
        "Cache-Control": "public, max-age=86400",
        "Content-Type": "application/manifest+json",
      },
    },
  );
};
