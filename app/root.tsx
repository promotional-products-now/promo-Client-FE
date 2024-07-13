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
import { ToastContainer } from "react-toastify";
import { Header } from "app/components/Header";
import { Footer } from "app/components/Footer";
import { Sidebar } from "app/components/Sidebar";

import stylesheet from "./tailwind.css";
import SwiperStyle from "./style.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { getSession } from "./sessions";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            <Header sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
            <Sidebar sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />

            <main className="flex-1">
              <div
                className={`${
                  location.pathname !== "/"
                    ? "container mx-auto lg:mb-6 py-3"
                    : "lg:mb-6 mb-3 mx-auto"
                }`}
              >
                <Outlet />
              </div>
            </main>
            <Footer />
          </div>
          <ToastContainer containerId={"ppn"} />
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

export async function loader({ request }: any) {
  const session = await getSession(request.headers.get("Cookie"));
  const uid = session.get("uid");

  return json({ user: { uid }, ENV: { SALES_CONTACT: process.env.SALES_CONTACT } });
}