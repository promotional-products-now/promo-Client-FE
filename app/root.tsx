import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import { NextUIProvider } from "@nextui-org/react";
import { Header } from "app/components/Header";
import { Footer } from "app/components/Footer";
import stylesheet from "./tailwind.css";
import SwiperStyle from "./style.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: SwiperStyle },
  { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/swiper@11.0.7/modules/free-mode.min.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/swiper@11.0.7/modules/pagination.min.css",
  },
];

export default function App() {
  let data = useLoaderData<typeof loader>();
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <div className="flex flex-col justify-between h-screen">
            <Header />
            <main className="flex-1">
              <div className={`lg:my-6 my-3 ${location.pathname !== "/" && "container mx-auto "}`}>
                <Outlet />
              </div>
            </main>
            <Footer />
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify({ env: data.ENV })}`,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

export async function loader() {
  return json({ ENV: { SALES_CONTACT: process.env.SALES_CONTACT } });
}