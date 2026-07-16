import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Newsletter } from "@/components/shared/newsletter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog | Renan Duarte",
  description:
    "Artigos sobre renda extra, marketing digital, inteligência artificial e trabalho remoto.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <SectionHeading
            badge="Blog"
            title="Conteúdo Exclusivo"
            subtitle="Artigos, dicas e estratégias para você construir sua renda digital."
            align="left"
          />

          <div className="grid gap-8 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:border-gold/30">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <Badge className="absolute top-4 left-4">{post.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-4 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("pt-BR")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-white/50 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                      Ler artigo <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-gold/20 bg-gradient-to-br from-navy-light/30 to-navy-dark p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white">
              Receba conteúdo exclusivo
            </h3>
            <p className="mt-2 text-white/50">
              Inscreva-se na newsletter e receba dicas de renda extra direto no
              seu e-mail.
            </p>
            <div className="mt-6 max-w-md">
              <Newsletter />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
