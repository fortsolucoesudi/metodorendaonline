import { MiniRobot } from "./mini-robot";
import { AdsMockup } from "./ads-mockup";
import { SocialMockup } from "./social-mockup";

const services = [
  {
    title: "Inteligência Artificial & Automação",
    description:
      "Chatbots, fluxos inteligentes e integrações que qualificam leads e vendem no automático — inclusive pelo WhatsApp.",
    robot: "ai" as const,
    extra: (
      <div className="mt-4 rounded-lg border border-navy/5 bg-slate-50 p-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-navy/70">Assistente IA ativo</span>
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-2 w-full rounded bg-navy/10" />
          <div className="h-2 w-[80%] rounded bg-navy/5" />
        </div>
      </div>
    ),
  },
  {
    title: "Gestão de Tráfego Pago",
    description:
      "Campanhas no Google Ads, Meta Ads e outras plataformas com foco em ROI, leads qualificados e escala com controle de investimento.",
    robot: "ads" as const,
    extra: <AdsMockup className="mt-4" />,
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Planejamento de conteúdo, posts profissionais, engajamento e presença digital consistente para fortalecer sua marca.",
    robot: "social" as const,
    extra: <SocialMockup className="mt-4" />,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative border-y border-navy/5 bg-slate-50/80 py-24 lg:py-32">
      <div className="pointer-events-none absolute right-8 top-12 hidden opacity-40 lg:block">
        <MiniRobot variant="ads" className="robot-float-delay" />
      </div>
      <div className="pointer-events-none absolute left-8 bottom-12 hidden opacity-40 lg:block">
        <MiniRobot variant="social" className="robot-float-delay-2" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-light">
            Serviços
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Tudo que sua empresa precisa para crescer online
          </h2>
          <p className="mt-4 text-lg text-navy/65">
            Da inteligência artificial ao marketing digital — soluções integradas
            para atrair, converter e fidelizar clientes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white p-8 shadow-sm transition hover:border-navy-light/30 hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="flex-1 text-xl font-semibold text-navy">{item.title}</h3>
                <MiniRobot variant={item.robot} className="shrink-0 -mt-2 scale-90" />
              </div>
              <p className="mt-3 flex-1 leading-relaxed text-navy/65">{item.description}</p>
              {item.extra}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
