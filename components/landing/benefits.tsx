import { MiniRobot } from "./mini-robot";

const benefits = [
  {
    title: "Mais clientes, menos esforço",
    description:
      "Automatize prospecção e follow-up com IA que qualifica leads e agenda reuniões enquanto sua equipe foca no fechamento.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
  {
    title: "Atendimento que nunca dorme",
    description:
      "Chatbots e assistentes treinados no seu negócio respondem dúvidas, enviam propostas e convertem visitantes em oportunidades 24 horas por dia.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
  {
    title: "Decisões com dados reais",
    description:
      "Dashboards e análises preditivas transformam informações dispersas em insights acionáveis para crescer com segurança.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
  {
    title: "Implementação sob medida",
    description:
      "Cada solução é desenhada para o seu setor, integrada aos sistemas que você já usa e acompanhada por especialistas da Fort Soluções.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
    ),
  },
  {
    title: "Gestão de Tráfego Pago",
    description:
      "Anúncios otimizados no Google e Meta com relatórios claros, testes constantes e foco em transformar cliques em vendas.",
    robot: "ads" as const,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
      />
    ),
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Conteúdo estratégico, calendário editorial e engajamento para sua marca se destacar no Instagram, Facebook e LinkedIn.",
    robot: "social" as const,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
      />
    ),
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute right-6 top-20 hidden opacity-25 lg:block">
        <MiniRobot variant="ai" className="robot-float" />
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-light">
            Benefícios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Por que empresas em Uberlândia escolhem a Fort Soluções
          </h2>
          <p className="mt-4 text-lg text-navy/65">
            IA, tráfego pago e redes sociais trabalhando juntos — mais visibilidade,
            mais leads e mais vendas para o seu negócio.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className="benefit-card group relative rounded-2xl border border-navy/8 bg-white p-8 shadow-sm transition hover:border-navy/15 hover:shadow-xl hover:shadow-navy/5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {"robot" in item && item.robot && (
                <div className="absolute -right-1 -top-2 opacity-90">
                  <MiniRobot variant={item.robot} className="scale-[0.55]" />
                </div>
              )}
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-navy text-white transition group-hover:scale-105">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-navy/65">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
