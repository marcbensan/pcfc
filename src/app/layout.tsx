import type { Metadata } from "next";
import NavigationMenu from "./_components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "PCFC",
  description: "Praise Christian Family Crhuch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* title font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />

        {/* Normal font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Orbitron:wght@400..900&family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavigationMenu>{children}</NavigationMenu>
      </body>
    </html>
  );
}
