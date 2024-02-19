import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { NextUIProvider } from "@nextui-org/react";
import stylesheet from "./tailwind.css";
import { Header } from "app/components/Header";
import { Footer } from "app/components/Footer";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
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
            <div className="flex-1 lg:m-6 m-3">
              <Outlet />
            </div>
            <Footer />
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}
