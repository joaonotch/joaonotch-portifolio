import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "João Victor | Developer",
  description: "Portifolio Pessoal | Back-end developer, ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-mono">
        {children}
      </body>
    </html>
  );
}
