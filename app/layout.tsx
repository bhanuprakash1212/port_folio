import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Lee - Portfolio",
  description: "Web App Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#121212]">
      <body className={`${inter.className} bg-[#121212] min-h-screen`}>
        <main className="bg-[#121212] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
