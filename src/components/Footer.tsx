import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

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
    <footer id="contato" className="scroll-mt-24 bg-primary text-surface">
      <JsonLd />
      <div className="container-narrow section-padding !pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal
              as="h2"
              className="font-serif text-3xl font-semibold leading-snug tracking-tight sm:text-4xl"
            >
              {site.contact.heading}
            </Reveal>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-surface/70 sm:text-base">
              {site.contact.blurb}
            </p>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Contato
              </h3>
              <address className="mt-4 not-italic text-sm leading-relaxed text-surface/80">
                <p>{site.address.full}</p>
                <p className="mt-3">
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-surface"
                  >
                    WhatsApp: {site.whatsappDisplay}
                  </a>
                </p>
                <p className="mt-2">{site.crp}</p>
              </address>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Navegação
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-surface/80">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition hover:text-surface">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-surface/10 pt-6 text-xs text-surface/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name} {site.title} · {site.crp}
          </p>
          <p>Novo Hamburgo / Rio Grande do Sul</p>
        </div>
      </div>
    </footer>
  );
}
