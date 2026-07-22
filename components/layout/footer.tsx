import Link from "next/link";
import { BRAND, NAV_LINKS, whatsappUrl } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white">
              {BRAND.name}
            </Link>
            <p className="mt-4 max-w-md text-sm text-white/50 leading-relaxed">
              {BRAND.tagline}
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
            >
              Fale conosco pelo WhatsApp →
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            </h4>
            <ul className="flex flex-col gap-3">
            {/*}
              <li>
                <Link href="/cursos" className="text-sm text-white/50 hover:text-gold transition-colors">
                  Cursos Online
                </Link>
              </li>
              <li>
                <Link href="/ebooks" className="text-sm text-white/50 hover:text-gold transition-colors">
                  Ebooks PLR
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/50 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              */}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-white/40 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.</p>
          <p>CNPJ ativo há mais de 10 anos no mercado digital.</p>
        </div>
      </div>
    </footer>
  );
}
