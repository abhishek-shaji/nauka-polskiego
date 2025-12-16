import type { Metadata } from "next";
import { Inter, Red_Hat_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default:
      "Nauka Polskiego - Learn Polish Online | Verb Conjugation Practice",
    template: "%s | Nauka Polskiego",
  },
  description:
    "Free interactive Polish language learning tool. Practice Polish verb conjugations, sentence completion, and grammar exercises. Perfect for beginners and intermediate learners wanting to master Polish.",
  keywords: [
    "learn Polish",
    "Polish language",
    "Polish verbs",
    "Polish conjugation",
    "Polish grammar",
    "nauka polskiego",
    "czasowniki polskie",
    "polish practice",
    "polish exercises",
    "polish for beginners",
    "polish online course",
    "odmiana czasowników",
    "język polski",
    "polish language learning",
    "free polish lessons",
  ],
  authors: [{ name: "Abhishek Shaji" }],
  creator: "Abhishek Shaji",
  publisher: "Abhishek Shaji",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    alternateLocale: "en_US",
    title: "Nauka Polskiego - Learn Polish Online",
    description:
      "Free interactive Polish language learning tool. Practice verb conjugations and sentence exercises to master Polish grammar.",
    siteName: "Nauka Polskiego",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nauka Polskiego - Learn Polish Online",
    description:
      "Free interactive Polish language learning tool. Practice verb conjugations and master Polish grammar.",
    creator: "@abhishekshaji",
  },
  alternates: {
    languages: {
      "pl-PL": "/",
      "en-US": "/",
    },
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="canonical" href="https://naukapolskiego.com" />
        <meta name="google-site-verification" content="" />
      </head>
      <body
        className={`${inter.variable} ${inter.className} ${redHatDisplay.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
