import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductCard } from "@/components/shared/product-card";
import { createMetadata } from "@/lib/seo";
import { COURSES } from "@/lib/data/courses";

export const metadata: Metadata = createMetadata({
  title: "Cursos Online | Renan Duarte",
  description:
    "Cursos completos de renda extra, marketing digital e inteligência artificial. Métodos validados para trabalhar online.",
  path: "/cursos",
});

export default function CursosPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Cursos" }]} />
          <SectionHeading
            badge="Cursos"
            title="Métodos Validados para Renda Digital"
            subtitle="Cursos completos com certificado, garantia e suporte. Do zero à escala."
            align="left"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course) => (
              <ProductCard key={course.id} product={course} type="course" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
