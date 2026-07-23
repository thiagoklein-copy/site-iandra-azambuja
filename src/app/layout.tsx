import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sabrinaschmidt.com.br"),
  title: {
    default: "Sabrina Schmidt | Psicóloga Clínica e Organizacional em Novo Hamburgo",
    template: "%s | Sabrina Schmidt Psicóloga",
  },
  description:
    "Psicóloga clínica e organizacional em Novo Hamburgo (CRP 07/15606-RS). Atendimento individual com TCC e Terapia do Esquema, e consultoria em RH. Agende pelo WhatsApp.",
  keywords: [
    "psicóloga Novo Hamburgo",
    "terapia cognitivo-comportamental",
    "terapia do esquema",
    "psicologia organizacional",
    "Sabrina Schmidt",
    "CRP 07/15606-RS",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sabrinaschmidt.com.br",
    siteName: "Sabrina Schmidt Psicóloga",
    title: "Sabrina Schmidt | Psicóloga Clínica e Organizacional",
    description:
      "Cuidado psicológico para quem busca clareza e equilíbrio. Atendimento em Novo Hamburgo — CRP 07/15606-RS.",
    images: [
      {
        url: "/images/hero-portrait.svg",
        width: 900,
        height: 1100,
        alt: "Sabrina Schmidt — Psicóloga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabrina Schmidt | Psicóloga",
    description:
      "Atendimento clínico e consultoria organizacional em Novo Hamburgo.",
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
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
