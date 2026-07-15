"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductCard } from "@/components/shared/product-card";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion";
import { Badge } from "@/components/ui/badge";
import { EBOOKS } from "@/lib/data/ebooks";
import { CATEGORIES, type Category } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function EbooksClient() {
  const [filter, setFilter] = useState<Category>("Todos");

  const filtered =
    filter === "Todos"
      ? EBOOKS
      : EBOOKS.filter((e) => e.category === filter);

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Ebooks" }]} />
          <SectionHeading
            badge="Catálogo"
            title="Ebooks e Produtos PLR"
            subtitle="Materiais digitais prontos para você aplicar e gerar renda extra. Integração preparada para Hotmart, Kiwify, Eduzz e Perfect Pay."
            align="left"
          />

          <div className="mb-10 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  filter === cat
                    ? "border-gold/50 bg-gold/20 text-gold"
                    : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="mb-8 text-sm text-white/40">
            {filtered.length} produto{filtered.length !== 1 ? "s" : ""} encontrado
            {filter !== "Todos" ? ` em "${filter}"` : ""}
          </p>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((ebook) => (
              <StaggerItem key={ebook.id}>
                <ProductCard product={ebook} type="ebook" />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-white/50">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <Badge variant="secondary" className="mb-4">
              Integração Futura
            </Badge>
            <p className="text-sm text-white/50">
              Checkout preparado para integração com{" "}
              <span className="text-gold">Hotmart</span>,{" "}
              <span className="text-gold">Kiwify</span>,{" "}
              <span className="text-gold">Eduzz</span> e{" "}
              <span className="text-gold">Perfect Pay</span>.
              Configure as URLs no arquivo <code className="text-white/70">.env.local</code>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
