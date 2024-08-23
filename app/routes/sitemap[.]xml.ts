import { generateSitemap } from "@nasa-gcn/remix-seo";
import { type ServerBuild, type LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request, context }: LoaderFunctionArgs) {
  const serverBuild = (await context.serverBuild) as ServerBuild;
  return generateSitemap(request, serverBuild.routes, {
    siteUrl: "https://promotionalproductsnow.au",
    headers: {
      "Cache-Control": `public, max-age=${60 * 60 * 24 * 7}, must-revalidate`, // 7days
    },
  });
}
