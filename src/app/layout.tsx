import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";

export const metadata: Metadata = {
  title: "VELOURA STUDIO — Crafting Timeless Elegance",
  description:
    "A luxury atelier crafting timeless elegance through bespoke fashion and couture experiences. Discover the Veloura collection.",
  openGraph: {
    title: "VELOURA STUDIO",
    description: "Crafting Timeless Elegance",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-ivory">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
