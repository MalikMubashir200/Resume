import type { Metadata } from "next";
import { Ubuntu, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";

// Load Ubuntu
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap", // Better performance
});

// Load Roboto Mono
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Developer Portfolio", // ✅ Meaningful title
  description: "Full-stack developer specializing in healthcare applications.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ubuntu.variable} ${robotoMono.variable} antialiased bg-white text-gray-900`}>
        <Header />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
