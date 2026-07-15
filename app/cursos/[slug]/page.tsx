import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  Clock,
  Users,
  Award,
  Shield,
  CheckCircle,
  ShoppingCart,
  ArrowLeft,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd, courseSchema, breadcrumbSchema } from "@/components/seo/json-ld";
import { getCourseBySlug, COURSES } from "@/lib/data/courses";
import { createMetadata } from "@/lib/seo";
import { BRAND, CHECKOUT_PLATFORMS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return createMetadata({
    title: `${course.title} | Renan Duarte`,
    description: course.description,
    path: `/cursos/${slug}`,
    image: course.banner,
  });
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const checkoutUrl =
    course.checkoutUrl ||
    (course.platform ? CHECKOUT_PLATFORMS[course.platform] : "#");

  const baseUrl = BRAND.url;

  return (
    <>
      <JsonLd data={courseSchema(course)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: baseUrl },
          { name: "Cursos", url: `${baseUrl}/cursos` },
          { name: course.title, url: `${baseUrl}/cursos/${slug}` },
        ])}
      />
      <Header />
      <main className="pt-24 pb-20">
        <div className="relative h-[300px] overflow-hidden md:h-[400px]">
          <Image
            src={course.banner}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="-mt-20 relative z-10">
            <Breadcrumbs
              items={[
                { label: "Cursos", href: "/cursos" },
                { label: course.title },
              ]}
            />

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Badge className="mb-4">{course.level}</Badge>
                <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  {course.title}
                </h1>
                <p className="mt-2 text-lg text-gold">{course.subtitle}</p>
                <p className="mt-6 text-white/60 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 text-gold" />
                    {course.rating} ({course.reviews} avaliações)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    {course.students.toLocaleString("pt-BR")} alunos
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                </div>

                <div className="mt-12">
                  <h2 className="mb-6 text-2xl font-bold text-white">
                    O que você vai aprender
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {course.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/5 p-4"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <span className="text-sm text-white/70">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="mb-6 text-2xl font-bold text-white">
                    Conteúdo Programático
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {course.modules.map((mod, i) => (
                      <AccordionItem key={i} value={`mod-${i}`}>
                        <AccordionTrigger>{mod.title}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-2">
                            {mod.lessons.map((lesson) => (
                              <li
                                key={lesson}
                                className="flex items-center gap-2 text-sm"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="mt-12">
                  <h2 className="mb-6 text-2xl font-bold text-white">FAQ</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {course.faq.map((item, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-2xl border border-gold/20 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-3xl font-bold text-gold">
                    {formatPrice(course.price)}
                  </p>
                  {course.originalPrice && (
                    <p className="text-sm text-white/30 line-through">
                      {formatPrice(course.originalPrice)}
                    </p>
                  )}

                  <Button size="lg" className="mt-6 w-full" asChild>
                    <a
                      href={checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Comprar Agora
                    </a>
                  </Button>

                  <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                    {course.certificate && (
                      <div className="flex items-center gap-3 text-sm text-white/60">
                        <Award className="h-5 w-5 text-gold" />
                        Certificado de conclusão
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-sm text-white/60">
                      <Shield className="h-5 w-5 text-gold" />
                      {course.guarantee}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 w-full"
                    asChild
                  >
                    <Link href="/cursos">
                      <ArrowLeft className="h-4 w-4" />
                      Voltar aos cursos
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
