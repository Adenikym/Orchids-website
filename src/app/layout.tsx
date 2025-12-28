import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Choose weights you need
  variable: '--font-quicksand',
})

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
    <html lang="en" className={quicksand.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
