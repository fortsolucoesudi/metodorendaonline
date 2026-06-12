import { BRAND, NAV_LINKS } from "../../lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-navy">{BRAND.name}</p>
          <p className="mt-1 text-sm text-navy/55">{BRAND.tagline}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/65 transition hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-navy/45">
          © {year} {BRAND.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
