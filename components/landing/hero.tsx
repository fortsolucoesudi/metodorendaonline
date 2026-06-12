import { BRAND } from "../../lib/constants";
import { HeroRobot } from "./hero-robot";
import { MiniRobot } from "./mini-robot";
import { WhatsAppButton } from "./whatsapp-button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy pt-28 pb-20 lg:pt-36">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="hero-glow pointer-events-none absolute -top-32 right-0 size-[600px] rounded-full bg-[#1e4a7a]/40 blur-[120px]" />
      <div className="hero-glow pointer-events-none absolute bottom-0 left-0 size-[400px] rounded-full bg-white/5 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="order-2 max-w-xl lg:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            {BRAND.fullName}
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            IA, tráfego pago e redes sociais que{" "}
            <span className="bg-gradient-to-r from-white via-white to-[#5eead4] bg-clip-text text-transparent">
              geram clientes
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            A <strong className="font-semibold text-white">{BRAND.name}</strong> em{" "}
            <strong className="font-semibold text-white">{BRAND.city}</strong> une
            tecnologia, marketing digital e gestão de mídias para sua empresa vender
            mais — com estratégia, automação e presença profissional online.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {["Inteligência Artificial", "Tráfego Pago", "Redes Sociais"].map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton size="lg" />
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-white/90 transition hover:text-white"
            >
              Ver serviços
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {[
              { value: "3x", label: "Mais leads qualificados" },
              { value: "70%", label: "Menos tarefas manuais" },
              { value: "24/7", label: "Divulgação no WhatsApp" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-white lg:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs text-white/55 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="pointer-events-none absolute -left-4 top-8 z-10 hidden sm:block">
            <MiniRobot variant="ads" className="robot-float-delay scale-[0.65]" />
          </div>
          <div className="pointer-events-none absolute -right-2 bottom-16 z-10 hidden sm:block">
            <MiniRobot variant="social" className="robot-float-delay-2 scale-[0.65]" />
          </div>
          <HeroRobot />
          <p className="mt-4 text-center text-sm text-white/45 lg:text-left">
            Seu assistente de IA divulgando sua marca no WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
