import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orchids - Organization Website",
  description: "Official website for Orchids organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
