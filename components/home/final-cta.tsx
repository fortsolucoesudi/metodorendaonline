"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/motion";
import { LeadCapture } from "@/components/shared/lead-capture";

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-navy-light/30 via-navy to-navy-dark p-8 md:p-16">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold/5 blur-[80px]" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-navy-light/20 blur-[60px]" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Seu futuro digital pode{" "}
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  começar hoje
                </span>
              </h2>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Aprenda os métodos corretos e construa uma nova fonte de renda
                utilizando apenas internet e as estratégias certas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/cursos">
                    Começar Agora
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Receba conteúdo exclusivo
                </h3>
                <p className="mb-6 text-sm text-white/50">
                  Cadastre-se e receba dicas gratuitas de renda extra.
                </p>
                <LeadCapture />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
