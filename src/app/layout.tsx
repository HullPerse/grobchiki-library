import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import { GrobProvider } from "@/components/providers/stateProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grobchiki",
  description: "Real grobchiki memes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-black/90",
          inter.className
        )}
      >
        <GrobProvider>{children}</GrobProvider>
      </body>
    </html>
  );
}
