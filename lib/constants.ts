export const BRAND = {
  name: "Fort Soluções",
  fullName: "Fort Soluções — IA, Tráfego Pago e Redes Sociais",
  tagline: "IA, tráfego pago e redes sociais que geram resultados reais",
  city: "Uberlândia",
} as const;

/** Altere para o número comercial (DDI + DDD + número, só dígitos). */
export const WHATSAPP_NUMBER = "5534996389626";

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Fort Soluções e gostaria de saber mais sobre IA, gestão de tráfego pago e gestão de redes sociais.";

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;
