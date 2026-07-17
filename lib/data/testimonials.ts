export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  result?: string;
  avatar?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Mendes",
    role: "Vendedor — São Paulo, SP",
    content:
      "Comecei como renda extra e em 3 meses já estava ganhando mais que meu salário fixo. Os métodos do Renan são diretos e funcionam de verdade.",
    rating: 5,
    result: "R$ 4.200/mês em 3 meses",
  },
  {
    id: "2",
    name: "Fernanda Lima",
    role: "Estudante — Belo Horizonte, MG",
    content:
      "Trabalho só com celular, de casa, conciliando com a faculdade. Nunca imaginei que seria tão simples começar.",
    rating: 5,
    result: "R$ 1.800/mês como renda extra",
  },
  {
    id: "3",
    name: "Ricardo Alves",
    role: "Afiliado — Curitiba, PR",
    content:
      "Trabalho 100% nos bastidores, sem aparecer. O curso de afiliados mudou minha vida financeira completamente.",
    rating: 5,
    result: "R$ 8.500/mês como afiliado",
  },
  {
    id: "4",
    name: "Juliana Costa",
    role: "Empreendedora Digital — Rio de Janeiro, RJ",
    content:
      "Apliquei as estratégias de IA e automatizei meu negócio. Hoje vendo enquanto durmo. Incrível!",
    rating: 5,
    result: "Vendas automatizadas 24/7",
  },
  {
    id: "5",
    name: "Marcos Oliveira",
    role: "Funcionário Público — Brasília, DF",
    content:
      "Mantive meu emprego e construí uma renda extra sólida. Em 6 meses já penso em largar o emprego fixo.",
    rating: 4,
    result: "R$ 3.100/mês conciliando",
  },
  {
    id: "6",
    name: "Erica Duarte",
    role: "Mora Fora Desde os 20 anos — Uberlândia, MG",
    content:
      "Trabalho pelo mundo, no meu tempo, cuidando das minhas coisas.Liberdade que eu sempre sonhei.",
    rating: 5,
    result: "Liberdade de horário total",
  },
];
