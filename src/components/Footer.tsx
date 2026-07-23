import { site } from "@/content/site";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} — ${site.title}`,
    description:
      "Psicóloga clínica e organizacional em Novo Hamburgo. Atendimento individual com base em TCC e Terapia do Esquema, e consultoria em recursos humanos.",
    url: "https://sabrinaschmidt.com.br",
    telephone: site.phoneTel,
    image: "https://sabrinaschmidt.com.br/images/hero-portrait.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Novo Hamburgo",
    },
    priceRange: "$$",
    identifier: site.crp,
    sameAs: [site.instagram.url],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary text-surface">
      <JsonLd />
      <div className="container-narrow px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-surface/70">{site.title}</p>
            <p className="mt-3 text-sm text-surface/70">{site.crp}</p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-surface/80">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-surface">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-surface/10 pt-6 text-xs text-surface/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name} {site.title} · {site.crp}
          </p>
          <p>Novo Hamburgo / Rio Grande do Sul</p>
        </div>
      </div>
    </footer>
  );
}
