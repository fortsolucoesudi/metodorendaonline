export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-ganhar-renda-extra-pela-internet",
    title: "Como Ganhar Renda Extra pela Internet em 2026",
    excerpt:
      "Descubra os métodos mais eficazes para criar uma renda extra trabalhando online, mesmo sem experiência prévia.",
    content:
      "A internet abriu portas para milhões de brasileiros que buscam uma renda extra ou uma nova carreira. Neste artigo, vamos explorar os métodos mais eficazes...",
    category: "Renda Extra",
    date: "2026-03-10",
    readTime: "8 min",
    image: "/images/renan-professional.png",
    author: "Renan Duarte",
  },
  {
    slug: "marketing-digital-para-iniciantes",
    title: "Marketing Digital para Iniciantes: Guia Completo",
    excerpt:
      "Tudo que você precisa saber para começar no marketing digital e gerar resultados reais para seu negócio.",
    content:
      "O marketing digital é uma das habilidades mais valorizadas do mercado atual. Se você está começando do zero, este guia é para você...",
    category: "Marketing Digital",
    date: "2026-03-05",
    readTime: "12 min",
    image: "/images/renan-professional.png",
    author: "Renan Duarte",
  },
  {
    slug: "inteligencia-artificial-negocios-online",
    title: "Como Usar Inteligência Artificial nos Seus Negócios Online",
    excerpt:
      "Ferramentas de IA que podem automatizar seu negócio e multiplicar seus resultados em 2026.",
    content:
      "A Inteligência Artificial revolucionou a forma como empreendedores digitais trabalham. Neste artigo, mostro as ferramentas que uso diariamente...",
    category: "Inteligência Artificial",
    date: "2026-02-28",
    readTime: "10 min",
    image: "/images/renan-professional.png",
    author: "Renan Duarte",
  },
  {
    slug: "trabalho-remoto-guia-completo",
    title: "Trabalho Remoto: Guia Completo para Liberdade Geográfica",
    excerpt:
      "Como construir uma carreira 100% remota e trabalhar de qualquer lugar do mundo.",
    content:
      "O trabalho remoto deixou de ser tendência e se tornou realidade para milhões de profissionais. Veja como você pode fazer parte disso...",
    category: "Trabalho Remoto",
    date: "2026-02-20",
    readTime: "9 min",
    image: "/images/renan-japan.png",
    author: "Renan Duarte",
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
