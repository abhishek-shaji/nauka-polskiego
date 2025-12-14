import type { Metadata } from "next";
import { Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Czasowniki Polskie | Polish Verb Conjugation Practice",
  description:
    "Practice Polish verb conjugations with this interactive learning tool. Master wszystkie osoby (all persons) for common Polish verbs.",
  keywords: [
    "Polish",
    "verbs",
    "conjugation",
    "practice",
    "learn Polish",
    "czasowniki",
    "polskie",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${lora.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
