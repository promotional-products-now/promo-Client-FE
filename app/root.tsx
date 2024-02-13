import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { NextUIProvider } from "@nextui-org/react";
import stylesheet from "./tailwind.css";
import { Link } from "@remix-run/react";

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
          <div className="flex flex-row gap-3 ">
            <Link to={"/About"} className="">
              Go to about page
            </Link>
            <Link to={"/"} className="">
              Go to Home page
            </Link>
            <Link to={"Checkout"} className="">
              Go to checkout page
            </Link>
          </div>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}
