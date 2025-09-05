import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const links: Route.LinksFunction = () => [
  {
    rel: "preload",
    as: "font",
    type: "font/woff2",
    href: "/fonts/Poppins.woff2",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "Terjadi kesalahan yang tidak terduga.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "Oops! Halaman yang kamu cari tidak ada atau telah dipindahkan."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex flex-col justify-center items-center p-2 grow mt-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">{message}</h1>
      <p className="text-xl md:text-2xl text-center mb-4 max-w-[1024px]">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
      <button className="border-red-500 border-2 hover:bg-red-500 hover:text-white px-4 py-2 rounded-full text-xl cursor-pointer transition-colors duration-300">
        <Link to={"/"}>Kembali ke Beranda</Link>
      </button>
    </main>
  );
}
