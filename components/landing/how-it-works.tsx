import { MiniRobot } from "./mini-robot";
import { WhatsAppButton } from "./whatsapp-button";

const steps = [
  {
    step: "01",
    title: "Diagnóstico gratuito",
    description:
      "Conversamos pelo WhatsApp para entender seu negócio, gargalos e metas de crescimento.",
    robot: "default" as const,
  },
  {
    step: "02",
    title: "Projeto personalizado",
    description:
      "Desenhamos a estratégia ideal — IA, campanhas de tráfego pago, redes sociais ou pacote integrado.",
    robot: "ads" as const,
  },
  {
    step: "03",
    title: "Implementação e escala",
    description:
      "Implantamos, treinamos sua equipe e acompanhamos os resultados com ajustes contínuos.",
    robot: "social" as const,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Do primeiro contato ao resultado em 3 passos
          </h2>
        </div>

        <ol className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((item, index) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              {index < steps.length - 1 && (
                <span
                  className="absolute -right-4 top-1/2 hidden size-8 -translate-y-1/2 items-center justify-center text-white/30 lg:flex"
                  aria-hidden
                >
                  →
                </span>
              )}
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-4xl font-bold text-white/20">{item.step}</span>
                <MiniRobot variant={item.robot} className="scale-75 opacity-90" />
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-white/65">{item.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <p className="max-w-md text-lg text-white/70">
            Pronto para começar? Fale com um especialista agora mesmo.
          </p>
          <WhatsAppButton size="lg" />
        </div>
      </div>
    </section>
  );
}
