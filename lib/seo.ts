import type { Metadata } from "next";
import { BRAND, SEO_KEYWORDS } from "./constants";

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  image = "/images/renan-professional.png",
  keywords = [...SEO_KEYWORDS],
}: PageSEO): Metadata {
  const url = `${BRAND.url}${path}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: BRAND.name }],
    creator: BRAND.name,
    metadataBase: new URL(BRAND.url),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      locale: "pt_BR",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
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
  };
}
