export const BRAND = {
  name: "Renan Duarte",
  tagline:
    "Métodos validados para criar renda extra e construir uma carreira na internet.",
  description:
    "Aprenda estratégias de renda extra, marketing digital, IA e negócios online com Renan Duarte. Métodos validados para trabalhar de qualquer lugar.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://renanduarte.com.br",
  email: "contato@renanduarte.com.br",
} as const;

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5534999999999";

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site do Renan Duarte e gostaria de saber mais sobre os métodos de renda extra.";

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/cursos", label: "Cursos" },
  { href: "/ebooks", label: "Ebooks" },
  { href: "/biografia", label: "Biografia" },
  { href: "/blog", label: "Blog" },
] as const;

export const CHECKOUT_PLATFORMS = {
  hotmart: process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL ?? "",
  kiwify: process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL ?? "",
  eduzz: process.env.NEXT_PUBLIC_EDUZZ_CHECKOUT_URL ?? "",
  perfectPay: process.env.NEXT_PUBLIC_PERFECTPAY_CHECKOUT_URL ?? "",
} as const;

export const ANALYTICS = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
} as const;

export const SEO_KEYWORDS = [
  "renda extra",
  "ganhar dinheiro na internet",
  "trabalho online",
  "marketing digital",
  "trabalhar de casa",
  "renda usando celular",
  "renda usando internet",
  "empreendedorismo digital",
  "ganhar dinheiro online",
  "trabalho remoto",
] as const;

export const CATEGORIES = [
  "Todos",
  "PLR",
  "Renda Extra",
  "IA",
  "Marketing Digital",
  "Afiliados",
  "Automação",
  "Redes Sociais",
] as const;

export type Category = (typeof CATEGORIES)[number];
