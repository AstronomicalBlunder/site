import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astronomical Blunder",
  description: "Aaryan Sukhadia's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-50`}>
        <div className="bg-indigo-950 absolute top-0 -z-50 left-[11rem] h-[33rem] w-[22rem]
        rounded-full blur-[15rem]">
        </div>
        {children}
      </body>
    </html>
  );
}