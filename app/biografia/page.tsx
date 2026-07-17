import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  Globe,
  Award,
  Target,
  Eye,
  Heart,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/motion";
import { Card, CardContent } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Biografia | Renan Duarte",
  description:
    "Conheça a trajetória de Renan Duarte, empreendedor digital com mais de 10 anos de experiência no mercado online.",
  path: "/biografia",
  image: "/images/Renanfotosite.png",
});

const SECTIONS = [
  {
    icon: Briefcase,
    title: "Minha História",
    content:
      "Sou empreendedor digital e proprietário da agência Fort Soluções uma empresa de marketing com CNPJ ativo há 10 anos. Durante essa trajetória, tive a oportunidade de atuar diretamente no mercado digital, acompanhando as transformações da internet e desenvolvendo estratégias que permitiram construir uma carreira sólida trabalhando online.",
  },
  {
    icon: TrendingUp,
    title: "Minha Jornada",
    content:
      "Ao longo dos anos, o marketing digital me proporcionou liberdade geográfica, crescimento profissional e a oportunidade de viver exclusivamente através da internet. Essa jornada me permitiu conquistar objetivos pessoais importantes, investir no meu patrimônio, viajar para fora do país regularmente e trabalhar de qualquer lugar do mundo.",
  },
  {
    icon: Globe,
    title: "Experiências Internacionais",
    content:
      "Fiz uma viagem até o Japão que sempre foi um sonho. Além de conhecer uma nova cultura, aprendi mais sobre marketing e trouxe novas ideias para o Brasil. Cada viagem é uma oportunidade de expandir horizontes e trazer inovação para meus projetos.",
  },
  {
    icon: Building2,
    title: "Empresas Atendidas",
    content:
      "Ao longo de mais de uma década, atendi dezenas de empresas em diversos segmentos, desde pequenos empreendedores até negócios consolidados, sempre com foco em resultados mensuráveis e crescimento sustentável.",
  },
  {
    icon: Award,
    title: "Certificações",
    content:
      "Invisto continuamente em formação e certificações nas principais plataformas de marketing digital, tráfego pago, automação e inteligência artificial para manter meus métodos sempre atualizados.",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Missão",
    content:
      "Compartilhar conhecimento e ajudar outras pessoas a criarem uma renda extra ou transformarem isso em sua principal atividade profissional.",
  },
  {
    icon: Eye,
    title: "Visão",
    content:
      "Ser referência em educação digital no Brasil, encurtando o caminho daqueles que desejam conquistar mais liberdade financeira e qualidade de vida.",
  },
  {
    icon: Heart,
    title: "Valores",
    content:
      "Transparência, resultados reais, métodos validados, suporte genuíno e compromisso com o sucesso de cada aluno.",
  },
];

const RESULTS = [
  { value: "10+", label: "Anos de mercado" },
  { value: "500+", label: "Alunos formados" },
  { value: "2+", label: "Países visitados" },
  { value: "150+", label: "Empresas atendidas" },
];

export default function BiografiaPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Biografia" }]} />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <div className="relative aspect-[3/4] max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-gold/10">
                <Image
                  src="/images/Renanfotosite.png"
                  alt="Renan Duarte - Empreendedor Digital"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">
                Biografia
              </span>
              <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                Olá, eu sou{" "}
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Renan Duarte
                </span>
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Empreendedor digital com mais de 10 anos de experiência.
                Proprietário de empresa de marketing com CNPJ ativo. Especialista
                em renda extra, marketing digital e negócios online.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Hoje meu propósito é compartilhar esse conhecimento e ajudar
                outras pessoas a criarem uma renda extra ou até mesmo
                transformarem isso em sua principal atividade profissional.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Acredito que qualquer pessoa pode aprender a ganhar dinheiro
                online quando possui acesso aos métodos corretos, orientação
                adequada e disposição para aplicar estratégias validadas.
              </p>
            </FadeIn>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS.map((result, i) => (
              <FadeIn key={result.label} delay={i * 0.1}>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-gold md:text-4xl">
                      {result.value}
                    </p>
                    <p className="mt-2 text-sm text-white/50">{result.label}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading
              badge="Trajetória"
              title="Minha Jornada Digital"
              subtitle="Uma década construindo resultados no mercado digital brasileiro."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {SECTIONS.map((section, i) => (
                <FadeIn key={section.title} delay={i * 0.1}>
                  <Card className="h-full">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                        <section.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {section.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/50 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/Renanfotosite.png"
                  alt="Renan Duarte no Japão - Experiência Internacional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-navy/80 px-4 py-2 backdrop-blur-xl">
                  <p className="text-xs text-white/50">Tóquio, Japão</p>
                  <p className="text-sm font-semibold text-white">
                    Liberdade Geográfica
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-bold text-white">
                Resultados que falam por si
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Meu objetivo é encurtar o caminho daqueles que desejam conquistar
                mais liberdade financeira, flexibilidade e qualidade de vida
                através do mercado digital. Cada método que compartilho foi
                testado e validado na prática.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Trabalho de qualquer lugar do mundo utilizando apenas um
                computador, um celular e conexão com a internet. Essa é a
                liberdade que quero compartilhar com você.
              </p>
            </FadeIn>
          </div>

          <div className="mt-20">
            <SectionHeading
              badge="Propósito"
              title="Missão, Visão e Valores"
            />
            <div className="grid gap-6 md:grid-cols-3">
              {VALUES.map((value, i) => (
                <FadeIn key={value.title} delay={i * 0.1}>
                  <Card className="h-full text-center">
                    <CardContent className="flex flex-col items-center gap-4 p-8">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                        <value.icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {value.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        {value.content}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
