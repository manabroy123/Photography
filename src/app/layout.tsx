import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
};

export const metadata: Metadata = {
  title: "Light & Lens — Macro Photography by Manab Roy",
  description:
    "Extreme macro photography by Manab Roy. Exploring the hidden architecture of insects, dew droplets, and botanical geometry.",
  keywords: [
    "Macro Photography",
    "Light & Lens",
    "Manab Roy",
    "Insect Macro",
    "Spider Eyes",
    "Dew Drops",
    "Extreme Macro",
    "Nature Photography",
  ],
  authors: [{ name: "Manab Roy" }],
  openGraph: {
    title: "Light & Lens — Macro Photography by Manab Roy",
    description: "Macro photographer by passion, a Software Project Manager by profession.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/photos/macro-jumping-spider-predator.jpg",
        width: 1200,
        height: 800,
        alt: "Light & Lens — Macro Photography",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080808] text-neutral-100 min-h-screen selection:bg-[#fef08a] selection:text-[#080808] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
