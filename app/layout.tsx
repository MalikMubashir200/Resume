import type { Metadata } from "next";
import { Ubuntu, Roboto_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./footer";

// Load Ubuntu
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Load Open Sans
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Load Roboto Mono
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
  fallback: ['monospace'],
});

export const metadata: Metadata = {
  title: "Malik Mubashir --Web Developer",
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
    <html
      lang="en"
      className={`scroll-smooth ${ubuntu.variable} ${robotoMono.variable} ${openSans.variable}`}
    >
      <body className="antialiased bg-white text-gray-900 font-ubuntu">
        <Header/>
        {/* Main content with proper spacing */}
        <main 
          role="main" 
          className="md:pl-24 "
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}