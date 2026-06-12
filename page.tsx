import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Big Ol Bitchs Kennels | ABKC American Bullies - Lubbock, TX",
  description:
    "ABKC registered American Bullies in Lubbock, Texas. View available Stormy x Bandz pups, pedigree, pricing, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
