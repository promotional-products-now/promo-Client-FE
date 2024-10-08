import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
  // useLoaderData,
  useLocation,
  useMatches,
  useRouteLoaderData,
} from "@remix-run/react";
// import { ManifestLink } from "@remix-pwa/sw";
import { cssBundleHref } from "@remix-run/css-bundle";
import { NextUIProvider } from "@nextui-org/react";
import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { ToastContainer } from "react-toastify";
import { Header } from "app/components/Header";
import { Footer } from "app/components/Footer";
import { Sidebar } from "app/components/Sidebar";

// import Stylesheet from "./tailwind.css?url";
import "./tailwind.css";

import "./style.css";
import { ReactNode, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { getSession } from "./sessions";
import nprogressStyles from "nprogress/nprogress.css?url";
import { ProgressBar } from "./nprogress";
import axios, { AxiosError } from "axios";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
interface RouteErrorResponse {
  status: number;
  statusText: string;
  data: any;
}

interface NetworkError extends Error {
  name: string;
}

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  // { rel: "stylesheet", href: Stylesheet },
  // { rel: "stylesheet", href: SwiperStyle },
  { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/swiper@11.0.7/modules/free-mode.min.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/swiper@11.0.7/modules/pagination.min.css",
  },
  { rel: "stylesheet", href: nprogressStyles },
];
let isMount = true;

export default function App() {
  // useSWEffect();

  return (
    <Document>
      {" "}
      <Outlet />
    </Document>
  );
}

export async function loader({ request }: any) {
  const session = await getSession(request.headers.get("Cookie"));
  const uid = session.get("uid");

  return json({ user: { uid }, ENV: { SALES_CONTACT: process.env.SALES_CONTACT } });
}

function Document(props: { children: ReactNode; title?: string }) {
  let location = useLocation();
  let matches = useMatches();

  let data = useLoaderData<typeof loader>();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    let mounted = isMount;
    isMount = false;
    if ("serviceWorker" in navigator) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller?.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest,
        });
      } else {
        let listener = async () => {
          await navigator.serviceWorker.ready;
          navigator.serviceWorker.controller?.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest,
          });
        };
        navigator.serviceWorker.addEventListener("controllerchange", listener);
        return () => {
          navigator.serviceWorker.removeEventListener("controllerchange", listener);
        };
      }
    }
  }, [location]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {props.title ? <title>{props.title}</title> : null}

        {/* <ManifestLink /> */}
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            <div className="flex flex-col justify-between h-screen">
              <Header sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
              <Sidebar sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />

              <main className="flex-1">
                <div
                  className={`${
                    location.pathname !== "/"
                      ? "container mx-auto lg:mb-6 py-3 lg:px-12 lg:w-11/12"
                      : "lg:mb-6 mb-3 mx-auto"
                  }`}
                >
                  {props.children}
                </div>
              </main>
              <Footer />
            </div>
            <ProgressBar />
            <ToastContainer containerId={"ppn"} />
            <ScrollRestoration />
          </NextUIProvider>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify({ env: data && data.ENV ? data.ENV : "" })}`,
            }}
          />

          <script src="//code.tidio.co/qbakac63yzzkny4nnhlttm465hmnvnak.js" />

          <Scripts />
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError() as RouteErrorResponse | NetworkError | Error | AxiosError;

  const getFriendlyMessage = (status: number) => {
    switch (status) {
      case 404:
        return {
          title: "Page Not Found",
          message: "Sorry, the page you are looking for does not exist.",
          suggestion: "Please check the URL and try again, or go back to the homepage.",
        };
      case 400:
        return {
          title: "Bad Request",
          message: "There was an error with your request. Please try again.",
          suggestion: "Please check the information you provided and try again.",
        };
      case 429:
        return {
          title: "Too Many Requests",
          message: "You have made too many requests in a short period.",
          suggestion: "Please wait a few minutes before trying again.",
        };
      case 500:
        return {
          title: "Internal Server Error",
          message: "Oops! Something went wrong on our end.",
          suggestion: "Please try again later. If the issue persists, contact support.",
        };
      default:
        return {
          title: "Unexpected Error",
          message: "An unexpected error occurred.",
          suggestion: "Please try again. If the issue persists, contact support.",
        };
    }
  };

  const isNetworkError = (error: NetworkError): boolean => {
    return error.message === "Failed to fetch" || error.name === "NetworkError";
  };

  const isConnectionRefusedError = (error: Error): boolean => {
    return error.message.includes("ECONNREFUSED");
  };

  const isAxiosError = (error: any): error is AxiosError<{ message: string }> => {
    return axios.isAxiosError(error);
  };

  function ErrorHandler() {
    if (isAxiosError(error)) {
      const { title, message, suggestion } = getFriendlyMessage(error.response?.status || 500);
      return (
        <Document title={title}>
          <div className="flex flex-col justify-center items-center h-screen bg-zinc-50 p-1">
            <div className="text-center bg-white p-4 md:p-8 rounded shadow-lg">
              {error.response?.status && (
                <h1 className="text-6xl md:text-8xl font-bold text-primary">
                  {error.response?.status}
                </h1>
              )}
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-700">{title}</h2>
              <p className="text-2xl text-gray-700">{message}</p>
              <p className="mt-4 text-lg text-gray-500">{suggestion}</p>
              {error.response?.data ? (
                <p className="mt-4 text-lg text-gray-500">
                  {error.response.data?.message || JSON.stringify(error.response?.data)}
                </p>
              ) : null}
            </div>
          </div>
        </Document>
      );
    } else if (isRouteErrorResponse(error)) {
      const { title, message, suggestion } = getFriendlyMessage(error?.status);
      return (
        <Document title={title}>
          <div className="flex flex-col justify-center items-center h-screen bg-zinc-50 p-1">
            <div className="text-center bg-white p-4 md:p-8 rounded shadow-lg">
              {error?.status && (
                <h1 className="text-6xl md:text-8xl font-bold text-primary">{error?.status}</h1>
              )}
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-700">{title}</h2>
              <p className="text-2xl text-gray-700">{message}</p>
              <p className="mt-4 text-lg text-gray-500">{suggestion}</p>
              <p className="mt-4 text-lg text-gray-500">{error?.data}</p>
            </div>
          </div>
        </Document>
      );
    } else if (isNetworkError(error as NetworkError)) {
      return (
        <Document title="Network Error">
          <div className="flex flex-col justify-center items-center h-screen bg-zinc-50  p-1">
            <div className="text-center bg-white p-4 md:p-8 rounded shadow-lg">
              <h1 className=" text-4xl md:text-6xl font-bold text-red-600">Network Error</h1>
              <p className="text-2xl text-gray-700">It seems like you're having network issues.</p>
              <p className="mt-4 text-lg text-gray-500">
                Please check your internet connection and try again.
              </p>
            </div>
          </div>
        </Document>
      );
    } else if (isConnectionRefusedError(error)) {
      return (
        <Document title="Connection Error">
          <div className="flex flex-col justify-center items-center h-screen bg-zinc-50  p-1">
            <div className="text-center bg-white p-4 md:p-8 rounded shadow-lg">
              <h1 className=" text-4xl md:text-6xl font-bold text-red-600">Connection Error</h1>
              <p className="text-2xl text-gray-700">We couldn't connect to the server.</p>
              <p className="mt-4 text-lg text-gray-500">
                Please make sure the server is running and try again.
              </p>
              <p className="mt-4 text-lg text-gray-500">{error.message}</p>
            </div>
          </div>
        </Document>
      );
    } else if (error instanceof Error) {
      return (
        <Document title={error.message}>
          {" "}
          <div className="flex flex-col justify-center items-center h-screen bg-zinc-50  p-1">
            <div className="text-center bg-white p-4 md:p-8 rounded shadow-lg">
              <h1 className=" text-4xl md:text-6xl font-bold text-primary">
                Oops, Something went wrong
              </h1>
              <p className="text-2xl text-gray-700">But don't worry- it's not your fault. </p>
              <p className="text-2xl text-gray-700">Please Reload the page </p>
              <div className="mt-4 text-left">
                <p className="text-lg text-gray-500">Details:</p>
                <pre className="bg-gray-100 p-2 rounded text-sm text-gray-800">{error.message}</pre>
              </div>
            </div>
          </div>
        </Document>
      );
    } else {
      return (
        <Document title="Unknown Error ">
          <div className="flex flex-col justify-center items-center h-screen bg-zinc-50  p-1">
            <div className="text-center bg-white p-4 md:p-8 rounded shadow-lg">
              <h1 className=" text-4xl md:text-6xl font-bold text-red-600">Unknown Error</h1>
              <p className="text-2xl text-gray-700">An unexpected error occurred.</p>
              <p className="mt-4 text-lg text-gray-500">Please try again later.</p>
            </div>
          </div>
        </Document>
      );
    }
  }

  return <ErrorHandler />;
}
