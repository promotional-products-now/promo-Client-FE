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
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import { NextUIProvider } from "@nextui-org/react";
import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { Header } from "app/components/Header";
import { Footer } from "app/components/Footer";
import stylesheet from "./tailwind.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  let data = useLoaderData<typeof loader>();

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
              <div className="container mx-auto lg:my-6 my-3">
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

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col justify-between h-screen bg-red-400">
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="flex flex-col justify-between h-screen bg-red-400">
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
