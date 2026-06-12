import { MiniRobot } from "./mini-robot";
import { AdsMockup } from "./ads-mockup";
import { SocialMockup } from "./social-mockup";

export function RobotSquad() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute -left-20 top-10 opacity-30">
        <MiniRobot variant="default" className="robot-float-delay scale-75" />
      </div>
      <div className="pointer-events-none absolute -right-16 bottom-10 opacity-30">
        <MiniRobot variant="ai" className="robot-float-delay-2 scale-[0.85]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/40">
            Equipe digital
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Robôs que trabalham pelo seu marketing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/55">
            Cada área da Fort Soluções tem sua especialidade — IA, anúncios pagos e
            redes sociais em sintonia.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <MiniRobot variant="ai" label="Bot IA" />
            <p className="text-center text-sm text-white/70">
              Automação, WhatsApp e fluxos inteligentes
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-end gap-4">
              <MiniRobot variant="ads" label="Bot Ads" />
              <AdsMockup className="w-36 shrink-0 scale-90" />
            </div>
            <p className="text-center text-sm text-white/70">
              Gestão de tráfego pago com foco em ROI e leads
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-end gap-4">
              <MiniRobot variant="social" label="Bot Social" />
              <SocialMockup className="w-36 shrink-0 scale-90" />
            </div>
            <p className="text-center text-sm text-white/70">
              Gestão de redes sociais e conteúdo estratégico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
