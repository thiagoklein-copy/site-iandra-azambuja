import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iandraazambuja.com.br"),
  title: {
    default: "Iandra Mensch Azambuja | Psicóloga em Canoas",
    template: "%s | Iandra Mensch Azambuja Psicóloga",
  },
  description:
    "Psicóloga em Canoas (CRP 07/44362). Psicoterapia para adultos e crianças, presencial ou online, com abordagem Cognitivo-Comportamental. Agende pelo WhatsApp.",
  keywords: [
    "psicóloga Canoas",
    "psicóloga clínica Canoas",
    "terapia cognitivo-comportamental",
    "psicoterapia infantil Canoas",
    "atendimento psicológico online",
    "Iandra Mensch Azambuja",
    "CRP 07/44362",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://iandraazambuja.com.br",
    siteName: "Iandra Mensch Azambuja Psicóloga",
    title: "Iandra Mensch Azambuja | Psicóloga Clínica em Canoas",
    description:
      "Psicoterapia que une ciência e afeto. Atendimento a adultos e crianças em Canoas ou online — CRP 07/44362.",
    images: [
      {
        url: "/images/hero-portrait.svg",
        width: 900,
        height: 1100,
        alt: "Iandra Mensch Azambuja — Psicóloga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iandra Mensch Azambuja | Psicóloga em Canoas",
    description:
      "Atendimento psicológico a adultos e crianças, presencial em Canoas ou online.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
