import { generateRobotsTxt } from "@nasa-gcn/remix-seo";

export function loader() {
  return generateRobotsTxt([
    {
      type: "userAgent",
      value: "*",
    },
    { type: "sitemap", value: "https://promotionalproductsnow.au/sitemap.xml" },
    { type: "disallow", value: "/account" },
    { type: "disallow", value: "/checkout" },
    { type: "disallow", value: "/edit-account" },
    { type: "disallow", value: "/otp" },
    { type: "disallow", value: "/cart" },
    { type: "disallow", value: "/forgot-password" },
    { type: "disallow", value: "/change-password" },
  ]);
}
