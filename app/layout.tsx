import type { Metadata } from "next";
import { Inter, Ubuntu, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./footer";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

// Load Ubuntu font
const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap"
});

// Load Roboto Mono font
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap"
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
      className={`${inter.variable} ${ubuntu.variable} ${robotoMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-white text-gray-900 font-sans">
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