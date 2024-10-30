import "~/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Toaster } from "~/components/ui/sonner";
import { Footer } from "~/components/layout/footer";
import { Header } from "~/components/layout/header";
import { Providers } from "~/components/providers";

export const metadata = {
  title: "Coupy",
  description:
    "Open-source tool to generate short links. With a user-friendly interface and robust functionality, Coupy makes it easy to share and manage links.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Coupy",
    description:
      "Open-source tool to generate short links. With a user-friendly interface and robust functionality, Coupy makes it easy to share and manage links.",
    url: "https://coupy-tech.vercel.app/",
    images: [
      {
        url: "https://pro-portfolio-roan.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "socials previous",
      },
    ],
    siteName: "Coupy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} flex min-h-screen flex-col`}
      >
        <Providers>
          <Header />
          <main className="mx-auto max-w-5xl flex-1 px-4">{children}</main>
          <Footer />
          <Toaster />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
