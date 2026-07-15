"use client";

import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Prova Social"
          title="Resultados reais de alunos reais"
          subtitle="Veja o que nossos alunos estão conquistando com os métodos validados."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <Card className="h-full transition-all duration-300 hover:border-gold/20">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <Quote className="h-8 w-8 text-gold/30" />
                  <p className="flex-1 text-sm text-white/70 leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  {testimonial.result && (
                    <div className="rounded-lg border border-gold/20 bg-gold/5 px-3 py-2">
                      <p className="text-xs font-semibold text-gold">
                        {testimonial.result}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-white/40">{testimonial.role}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-gold text-gold"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
