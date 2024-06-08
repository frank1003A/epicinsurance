import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AOSProvider from "./components/AosProvider";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Epic Insurance Brokers Limited",
  description: "Epic is an insurance broker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <AOSProvider>
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
      </AOSProvider>
    </html>
  );
}
