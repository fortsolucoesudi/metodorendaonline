import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug, BLOG_POSTS } from "@/lib/data/blog";
import { createMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/seo/json-ld";
import { BRAND } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: `${post.title} | Blog Renan Duarte`,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const baseUrl = BRAND.url;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: `${baseUrl}${post.image}`,
          datePublished: post.date,
          author: { "@type": "Person", name: post.author },
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: baseUrl },
          { name: "Blog", url: `${baseUrl}/blog` },
          { name: post.title, url: `${baseUrl}/blog/${slug}` },
        ])}
      />
      <Header />
      <main className="pt-24 pb-20">
        <article className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime} de leitura
            </span>
            <span>Por {post.author}</span>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose-custom mt-10">
            <p className="text-lg text-white/70 leading-relaxed">
              {post.excerpt}
            </p>
            <p className="mt-6 text-white/60 leading-relaxed">
              {post.content}
            </p>
            <p className="mt-6 text-white/60 leading-relaxed">
              Se você quer aprender mais sobre {post.category.toLowerCase()} e
              começar a gerar renda pela internet, confira nossos{" "}
              <Link href="/cursos" className="text-gold hover:underline">
                cursos
              </Link>{" "}
              e{" "}
              <Link href="/ebooks" className="text-gold hover:underline">
                ebooks
              </Link>{" "}
              com métodos validados.
            </p>
          </div>

          <Button variant="ghost" className="mt-10" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao blog
            </Link>
          </Button>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
