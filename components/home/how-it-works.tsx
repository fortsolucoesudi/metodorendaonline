"use client";

import { MousePointerClick, BookOpen, Smartphone, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/motion";

const STEPS = [
  {
    step: "01",
    icon: MousePointerClick,
    title: "Escolha um método",
    description:
      "Selecione a estratégia que mais se adapta ao seu perfil e objetivos.",
  },
  {
    step: "02",
    icon: BookOpen,
    title: "Aprenda com os cursos",
    description:
      "Acesse cursos e materiais com passo a passo detalhado e suporte.",
  },
  {
    step: "03",
    icon: Smartphone,
    title: "Aplique com celular ou PC",
    description:
      "Coloque em prática utilizando apenas celular ou computador.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Escale seus resultados",
    description:
      "Automatize processos e multiplique seus ganhos ao longo do tempo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-light/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Como Funciona"
          title="4 passos para sua renda digital"
          subtitle="Um processo simples e validado para você começar hoje mesmo."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.15}>
              <div className="relative flex flex-col items-center text-center">
                {i < STEPS.length - 1 && (
                  <div className="absolute top-8 left-[60%] hidden h-px w-[80%] bg-gradient-to-r from-gold/40 to-transparent lg:block" />
                )}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10">
                  <step.icon className="h-7 w-7 text-gold" />
                </div>
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-gold/60">
                  Passo {step.step}
                </span>
                <h3 className="mb-3 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
