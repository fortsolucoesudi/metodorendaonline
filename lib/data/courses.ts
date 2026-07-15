export type CourseModule = {
  title: string;
  lessons: string[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  banner: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
  benefits: string[];
  modules: CourseModule[];
  certificate: boolean;
  guarantee: string;
  faq: { question: string; answer: string }[];
  checkoutUrl?: string;
  platform?: "hotmart" | "kiwify" | "eduzz" | "perfectPay";
  featured?: boolean;
};

export const COURSES: Course[] = [
  {
    id: "1",
    slug: "metodo-renda-extra",
    title: "Método Renda Extra Digital",
    subtitle: "Do zero à primeira venda online em 30 dias",
    description:
      "Curso completo para quem deseja criar uma renda extra trabalhando pela internet. Métodos validados, passo a passo, utilizando celular ou computador.",
    banner: "/images/renan-professional.png",
    price: 297.0,
    originalPrice: 597.0,
    rating: 4.9,
    reviews: 1247,
    students: 3840,
    duration: "40 horas",
    level: "Iniciante",
    benefits: [
      "Trabalhe de qualquer lugar do mundo",
      "Não exige experiência anterior",
      "Métodos adaptáveis ao seu perfil",
      "Suporte e comunidade exclusiva",
      "Atualizações vitalícias",
      "Certificado de conclusão",
    ],
    modules: [
      {
        title: "Módulo 1 — Fundamentos da Renda Digital",
        lessons: [
          "Mindset do empreendedor digital",
          "Escolhendo seu nicho e método",
          "Ferramentas essenciais gratuitas",
        ],
      },
      {
        title: "Módulo 2 — Estratégias de Monetização",
        lessons: [
          "Afiliados e produtos digitais",
          "Criação de conteúdo estratégico",
          "Funis de vendas simplificados",
        ],
      },
      {
        title: "Módulo 3 — Tráfego e Conversão",
        lessons: [
          "Tráfego orgânico nas redes sociais",
          "Anúncios pagos para iniciantes",
          "Otimização de conversão",
        ],
      },
      {
        title: "Módulo 4 — Escala e Automação",
        lessons: [
          "Automatizando processos de venda",
          "Escalando resultados",
          "Planejamento de crescimento",
        ],
      },
    ],
    certificate: true,
    guarantee: "Garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do valor.",
    faq: [
      {
        question: "Preciso de experiência prévia?",
        answer:
          "Não. O curso foi desenvolvido para iniciantes e ensina tudo do zero.",
      },
      {
        question: "Posso fazer como renda extra?",
        answer:
          "Sim. Muitos alunos começam conciliando com o emprego atual.",
      },
      {
        question: "Quanto tempo tenho de acesso?",
        answer: "Acesso vitalício com todas as atualizações futuras inclusas.",
      },
    ],
    platform: "hotmart",
    featured: true,
  },
  {
    id: "2",
    slug: "marketing-digital-completo",
    title: "Marketing Digital Completo",
    subtitle: "Domine as estratégias que geram resultados reais",
    description:
      "Aprenda marketing digital de forma prática com estratégias testadas em mais de 10 anos de mercado. Tráfego, conteúdo, conversão e escala.",
    banner: "/images/renan-professional.png",
    price: 397.0,
    originalPrice: 797.0,
    rating: 4.8,
    reviews: 892,
    students: 2150,
    duration: "60 horas",
    level: "Intermediário",
    benefits: [
      "Estratégias validadas em 10+ anos de mercado",
      "Tráfego pago e orgânico",
      "Gestão de redes sociais profissional",
      "Cases reais de sucesso",
      "Certificado reconhecido",
      "Mentoria em grupo",
    ],
    modules: [
      {
        title: "Módulo 1 — Fundamentos do Marketing Digital",
        lessons: [
          "Panorama do mercado digital brasileiro",
          "Persona e posicionamento de marca",
          "Jornada do consumidor digital",
        ],
      },
      {
        title: "Módulo 2 — Conteúdo e Redes Sociais",
        lessons: [
          "Estratégia de conteúdo",
          "Instagram, TikTok e YouTube",
          "Copywriting para conversão",
        ],
      },
      {
        title: "Módulo 3 — Tráfego Pago",
        lessons: [
          "Google Ads para iniciantes",
          "Meta Ads (Facebook e Instagram)",
          "Otimização de campanhas",
        ],
      },
      {
        title: "Módulo 4 — Analytics e Escala",
        lessons: [
          "Métricas que importam",
          "Funis de alta conversão",
          "Escalando investimento em ads",
        ],
      },
    ],
    certificate: true,
    guarantee: "Garantia incondicional de 7 dias.",
    faq: [
      {
        question: "Serve para quem já trabalha com marketing?",
        answer:
          "Sim. O curso cobre desde fundamentos até estratégias avançadas de escala.",
      },
      {
        question: "Inclui material sobre IA?",
        answer:
          "Sim. Há módulos dedicados ao uso de IA no marketing digital.",
      },
    ],
    platform: "kiwify",
    featured: true,
  },
  {
    id: "3",
    slug: "ia-negocios-online",
    title: "IA para Negócios Online",
    subtitle: "Automatize, crie e venda com Inteligência Artificial",
    description:
      "Aprenda a utilizar ferramentas de IA para criar produtos digitais, automatizar vendas e escalar seu negócio online com eficiência máxima.",
    banner: "/images/renan-professional.png",
    price: 347.0,
    originalPrice: 697.0,
    rating: 4.9,
    reviews: 634,
    students: 1580,
    duration: "35 horas",
    level: "Iniciante",
    benefits: [
      "Ferramentas de IA atualizadas",
      "Automação de processos",
      "Criação de conteúdo com IA",
      "Produtos digitais automatizados",
      "Cases práticos passo a passo",
      "Comunidade de alunos",
    ],
    modules: [
      {
        title: "Módulo 1 — Introdução à IA para Negócios",
        lessons: [
          "Panorama das ferramentas de IA",
          "Configuração do ambiente",
          "Primeiros resultados em 24h",
        ],
      },
      {
        title: "Módulo 2 — Criação com IA",
        lessons: [
          "Textos, imagens e vídeos com IA",
          "Produtos digitais automatizados",
          "Ebooks e cursos com IA",
        ],
      },
      {
        title: "Módulo 3 — Automação e Vendas",
        lessons: [
          "Chatbots e atendimento automatizado",
          "Funis de venda com IA",
          "Integração com plataformas",
        ],
      },
    ],
    certificate: true,
    guarantee: "Garantia incondicional de 7 dias.",
    faq: [
      {
        question: "Preciso saber programar?",
        answer: "Não. Todas as ferramentas são no-code e fáceis de usar.",
      },
      {
        question: "As ferramentas são pagas?",
        answer:
          "Ensinamos versões gratuitas e pagas, com foco em ROI positivo.",
      },
    ],
    platform: "hotmart",
    featured: true,
  },
];

export function getCourseBySlug(slug: string) {
  return COURSES.find((c) => c.slug === slug);
}
