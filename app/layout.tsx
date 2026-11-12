import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Fórum IFSP",
  description: "Comunidade e fórum de discussões do IFSP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
