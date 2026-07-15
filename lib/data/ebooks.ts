import type { Category } from "../constants";

export type Ebook = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Exclude<Category, "Todos">;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  checkoutUrl?: string;
  platform?: "hotmart" | "kiwify" | "eduzz" | "perfectPay";
  featured?: boolean;
};

export const EBOOKS: Ebook[] = [
  {
    id: "1",
    slug: "renda-extra-celular",
    title: "Renda Extra com Celular",
    description:
      "Guia completo com estratégias práticas para gerar renda extra utilizando apenas seu smartphone e conexão com internet.",
    category: "Renda Extra",
    price: 47.9,
    originalPrice: 97.0,
    rating: 4.9,
    reviews: 328,
    image: "/images/renan-professional.png",
    platform: "hotmart",
    featured: true,
  },
  {
    id: "2",
    slug: "marketing-digital-iniciantes",
    title: "Marketing Digital para Iniciantes",
    description:
      "Aprenda os fundamentos do marketing digital e comece a aplicar estratégias validadas no mercado brasileiro.",
    category: "Marketing Digital",
    price: 67.9,
    originalPrice: 127.0,
    rating: 4.8,
    reviews: 256,
    image: "/images/renan-professional.png",
    platform: "kiwify",
    featured: true,
  },
  {
    id: "3",
    slug: "ia-monetizacao",
    title: "Monetização com Inteligência Artificial",
    description:
      "Descubra como utilizar ferramentas de IA para criar produtos, automatizar processos e gerar renda online.",
    category: "IA",
    price: 79.9,
    originalPrice: 147.0,
    rating: 4.9,
    reviews: 412,
    image: "/images/renan-professional.png",
    platform: "hotmart",
    featured: true,
  },
  {
    id: "4",
    slug: "afiliados-bastidores",
    title: "Afiliados nos Bastidores",
    description:
      "Estratégias para vender como afiliado sem precisar aparecer, utilizando tráfego orgânico e pago.",
    category: "Afiliados",
    price: 57.9,
    rating: 4.7,
    reviews: 189,
    image: "/images/renan-professional.png",
    platform: "eduzz",
  },
  {
    id: "5",
    slug: "automacao-vendas",
    title: "Automação de Vendas Online",
    description:
      "Configure funis automatizados e sistemas que vendem enquanto você trabalha em outras atividades.",
    category: "Automação",
    price: 89.9,
    originalPrice: 167.0,
    rating: 4.8,
    reviews: 203,
    image: "/images/renan-professional.png",
    platform: "perfectPay",
  },
  {
    id: "6",
    slug: "redes-sociais-lucro",
    title: "Redes Sociais que Geram Lucro",
    description:
      "Transforme suas redes sociais em uma máquina de vendas com conteúdo estratégico e posicionamento.",
    category: "Redes Sociais",
    price: 49.9,
    rating: 4.6,
    reviews: 145,
    image: "/images/renan-professional.png",
    platform: "kiwify",
  },
  {
    id: "7",
    slug: "plr-negocios-digitais",
    title: "PLR: Negócios Digitais Prontos",
    description:
      "Pacote PLR com produtos digitais prontos para revenda. Comece seu negócio online com baixo investimento.",
    category: "PLR",
    price: 97.9,
    originalPrice: 197.0,
    rating: 4.9,
    reviews: 367,
    image: "/images/renan-professional.png",
    platform: "hotmart",
    featured: true,
  },
  {
    id: "8",
    slug: "trabalho-remoto-guia",
    title: "Guia do Trabalho Remoto",
    description:
      "Tudo que você precisa saber para construir uma carreira 100% remota e trabalhar de qualquer lugar do mundo.",
    category: "Renda Extra",
    price: 39.9,
    rating: 4.7,
    reviews: 278,
    image: "/images/renan-japan.png",
    platform: "kiwify",
  },
];

export function getEbookBySlug(slug: string) {
  return EBOOKS.find((e) => e.slug === slug);
}
