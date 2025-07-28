import type { Metadata, Viewport } from "next";
import { Inter, Ubuntu, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./footer";

// Preload critical fonts with 'next/font'
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
  preload: true,
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Malik Mubashir | Web Developer",
    template: "%s | Malik Mubashir"
  },
  description: "Full-stack developer specializing in healthcare applications with a focus on accessibility and performance.",
  keywords: ["web developer", "full-stack", "healthcare", "React", "TypeScript", "Next.js"],
  authors: [{ name: "Malik Mubashir" }],
  creator: "Malik Mubashir",
  publisher: "Malik Mubashir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'),
  openGraph: {
    title: "Malik Mubashir | Web Developer",
    description: "Full-stack developer specializing in healthcare applications.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Malik Mubashir",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
      suppressContentEditableWarning
    >
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-white text-gray-900 font-sans min-h-screen flex flex-col">
        <Header />
        <main 
          id="main-content" 
          role="main" 
          className="flex-grow md:pl-24"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}