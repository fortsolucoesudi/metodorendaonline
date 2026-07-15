"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOME_FAQ } from "@/lib/data/faq";

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-light/5 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas antes de começar sua jornada digital."
        />

        <Accordion type="single" collapsible className="w-full">
          {HOME_FAQ.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
