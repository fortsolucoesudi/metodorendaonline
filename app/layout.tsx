import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BRAND } from "../lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BRAND.name} | Inteligência Artificial para Empresas`,
  description:
    "Fort Soluções em Uberlândia: IA, gestão de tráfego pago, gestão de redes sociais e automação para empresas que querem vender mais.",
  openGraph: {
    title: `${BRAND.name} | Inteligência Artificial para Empresas`,
    description:
      "Transforme sua operação com IA e escale resultados. Consultoria e implementação personalizada.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
