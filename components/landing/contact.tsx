import { BRAND, whatsappUrl } from "../../lib/constants";
import { AdsMockup } from "./ads-mockup";
import { MiniRobot } from "./mini-robot";
import { SocialMockup } from "./social-mockup";
import { WhatsAppButton } from "./whatsapp-button";

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-navy/10 bg-navy shadow-2xl shadow-navy/25">
          <div className="grid lg:grid-cols-2">
            <div className="relative p-10 lg:p-14">
              <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
                  Contato
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Vamos impulsionar seus resultados?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Fale com a equipe da {BRAND.name}. Respondemos em minutos no
                  WhatsApp com uma proposta sob medida para sua empresa.
                </p>

                <ul className="mt-10 space-y-4 text-white/80">
                  {[
                    "IA, tráfego pago e redes sociais",
                    "Consultoria inicial sem compromisso",
                    "Projetos para PMEs e grandes empresas",
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <WhatsAppButton size="lg" />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center border-t border-white/10 bg-white/5 p-10 backdrop-blur-sm lg:border-t-0 lg:border-l lg:p-14">
              <div className="pointer-events-none absolute -right-2 top-6 opacity-80">
                <MiniRobot variant="ads" className="robot-float-delay scale-75" />
              </div>
              <div className="pointer-events-none absolute bottom-8 left-4 opacity-80">
                <MiniRobot variant="social" className="robot-float-delay-2 scale-75" />
              </div>

              <div className="relative mb-8 grid gap-4 sm:grid-cols-2">
                <AdsMockup />
                <SocialMockup />
              </div>

              <h3 className="relative text-xl font-semibold text-white">Preferência por e-mail?</h3>
              <p className="mt-2 text-white/60">
                Envie sua mensagem e retornamos em até 1 dia útil.
              </p>
              <a
                href="mailto:contato@fortiasolucoes.com.br"
                className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-white transition hover:text-white/80"
              >
                contato@fortiasolucoes.com.br
              </a>
              <p className="mt-8 text-sm text-white/45">
                Ou inicie a conversa agora:{" "}
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#25D366] underline-offset-4 hover:underline"
                >
                  abrir WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
