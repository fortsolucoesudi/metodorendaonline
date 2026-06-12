const testimonials = [
  {
    quote:
      "Em 60 dias nosso funil de vendas triplicou. A Fort Soluções entendeu nosso processo e entregou uma automação que realmente converte.",
    name: "Mariana Costa",
    role: "Diretora Comercial — TechVarejo",
    initials: "MC",
  },
  {
    quote:
      "O atendimento via WhatsApp ficou instantâneo. Reduzimos 80% do tempo da equipe em perguntas repetitivas e ganhamos escala.",
    name: "Ricardo Almeida",
    role: "CEO — Clínica Saúde+",
    initials: "RA",
  },
  {
    quote:
      "Parceiro estratégico, não só fornecedor. Os dashboards de IA nos deram clareza para decisões que aumentaram a margem em 22%.",
    name: "Fernanda Lima",
    role: "CFO — Grupo Horizonte",
    initials: "FL",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-light">
            Depoimentos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Quem confia na Fort Soluções
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col rounded-2xl border border-navy/8 bg-gradient-to-b from-white to-slate-50/80 p-8 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-amber-400" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="size-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 text-lg leading-relaxed text-navy/80">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-4 border-t border-navy/8 pt-6">
                <span className="flex size-12 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                  {item.initials}
                </span>
                <div>
                  <cite className="not-italic font-semibold text-navy">{item.name}</cite>
                  <p className="text-sm text-navy/55">{item.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
