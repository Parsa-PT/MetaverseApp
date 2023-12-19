import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metaverse",
  description: "Metaverse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  className=' bg-[#040014] ' lang="en">
     <head>
     <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
      <body  className={inter.className}>{children}</body>
    </html>
  );
}
