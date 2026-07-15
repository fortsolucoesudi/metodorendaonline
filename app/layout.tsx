import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { Analytics } from "@/components/seo/analytics";
import { JsonLd, organizationSchema } from "@/components/seo/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({
  title: `${BRAND.name} | Renda Extra e Marketing Digital`,
  description: BRAND.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <JsonLd data={organizationSchema()} />
      </head>
      <body className="min-h-screen antialiased bg-navy text-white">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
