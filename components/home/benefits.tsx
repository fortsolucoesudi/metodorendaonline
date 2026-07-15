"use client";

import {
  Smartphone,
  UserCheck,
  Sliders,
  EyeOff,
  Globe,
  Wallet,
  TrendingUp,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { Card, CardContent } from "@/components/ui/card";

const BENEFITS = [
  {
    icon: Smartphone,
    title: "Celular ou Computador",
    description: "Trabalhe usando apenas celular ou computador com internet.",
  },
  {
    icon: UserCheck,
    title: "Sem Experiência",
    description: "Não exige experiência anterior. Comece do zero.",
  },
  {
    icon: Sliders,
    title: "Adaptável",
    description: "Métodos adaptáveis ao seu perfil e disponibilidade.",
  },
  {
    icon: EyeOff,
    title: "Nos Bastidores",
    description: "Trabalhe sem precisar aparecer nas redes sociais.",
  },
  {
    icon: Globe,
    title: "Qualquer Lugar",
    description: "Trabalhe de qualquer lugar do mundo com liberdade geográfica.",
  },
  {
    icon: Wallet,
    title: "Baixo Investimento",
    description: "Baixo investimento inicial para começar.",
  },
  {
    icon: TrendingUp,
    title: "Escala",
    description: "Possibilidade de escalar seus resultados ao longo do tempo.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Comunidade ativa e suporte para tirar suas dúvidas.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Benefícios"
          title="Por que escolher nossos métodos?"
          subtitle="Estratégias validadas que milhares de pessoas já utilizam para gerar renda pela internet."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <Card className="group h-full transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.08]">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
