type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Renan Duarte",
    description:
      "Métodos validados para criar renda extra e construir uma carreira na internet.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://renanduarte.com.br",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://renanduarte.com.br"}/images/renan-professional.png`,
    sameAs: [],
    founder: {
      "@type": "Person",
      name: "Renan Duarte",
      jobTitle: "Empreendedor Digital",
    },
  };
}

export function courseSchema(course: {
  title: string;
  description: string;
  price: number;
  slug: string;
  rating: number;
  reviews: number;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://renanduarte.com.br";
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "Renan Duarte",
      sameAs: baseUrl,
    },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/cursos/${course.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating,
      reviewCount: course.reviews,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
