"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/constants";

const BENEFITS_LIST = [
  "Trabalhar do conforto da sua casa",
  "Trabalhar de qualquer lugar do mundo",
  "Adaptar os métodos ao seu perfil",
  "Escolher aparecer ou trabalhar nos bastidores",
  "Criar uma renda extra",
  "Construir uma nova profissão",
  "Trabalhar utilizando apenas internet",
  "Conciliar com emprego atual ou estudos",
  "Escalar seus resultados ao longo do tempo",
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-dark" />
      <div className="hero-grid absolute inset-0" />
      <div className="hero-glow absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-navy-light/20 blur-[100px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 md:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Métodos Validados
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Comece sua{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              renda extra
            </span>{" "}
            hoje e transforme sua vida
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-white/60 leading-relaxed md:text-xl"
          >
            Aprenda estratégias utilizadas diariamente por milhares de pessoas
            para gerar renda pela internet utilizando apenas um celular ou
            computador com acesso à internet.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 grid gap-2 text-left sm:grid-cols-2"
          >
            {BENEFITS_LIST.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="flex items-start gap-2 text-sm text-white/70"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button size="lg" asChild>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Quero Começar Agora
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={whatsappUrl("Olá! Quero minha renda extra.")} target="_blank" rel="noopener noreferrer">
                Quero Minha Renda Extra
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/cursos">
                Ver Métodos Disponíveis
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="relative h-[400px] w-[320px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-gold/10 md:h-[500px] md:w-[380px]">
            <Image
              src="/images/Renanfotosite.png" 
              alt="Renan Duarte - Empreendedor Digital"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 320px, 380px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-gold/30 bg-navy/90 px-4 py-3 backdrop-blur-xl">
            <p className="text-xs text-white/50">Empreendedor Digital</p>
            <p className="text-sm font-bold text-gold">+10 anos de mercado</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
