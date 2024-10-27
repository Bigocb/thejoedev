import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// site config
import { config } from "../siteConfig";

// components
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: config.siteTitle,
  description: config.siteDescription,
  keywords: config.siteKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900`}
      >
        <header className="bg-gray-50 dark:bg-gray-900">
          <Navbar siteTitle={config.siteTitle} routes={config.routes} />
        </header>
        <div className="pt-20">{children}</div>
        <footer>
          <Footer siteTitle={config.siteTitle} />
        </footer>
      </body>
    </html>
  );
}
