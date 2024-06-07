import { Facebook, Github, Instagram } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Logo from "./components/Logo";
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
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {children}
        <footer className="w-full border-t border-t-[#eee] items-center justify-center gap-3 flex flex-col lg:flex-row py-8 px-epic_page_mob lg:px-epic_page_desk text-sm text-[#a4a4a4]">
          <Logo />
          <div className="flex flex-col lg:flex-row items-center justify-center lg:ml-auto gap-3  capitalize">
            <span>publishers terms</span>
            <span>terms and services</span>
            <span>privacy policy</span>
          </div>
          <div className="mt-5 lg:mt-0 lg:ml-auto flex items-center justify-center gap-2">
            <Link href={"/"}>
              <Facebook />
            </Link>
            <Link href={"/"}>
              <Instagram />
            </Link>{" "}
            <Link href={"/"}>
              <Github />{" "}
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
