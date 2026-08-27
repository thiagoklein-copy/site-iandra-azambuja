import { site } from "@/content/site";

function JsonLd() {
  const openingHoursSpecification = site.hours.schema.map((block) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: block.days,
    opens: block.opens,
    closes: block.closes,
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} — ${site.title}`,
    description:
      "Psicóloga clínica em Canoas. Atendimento a adultos e crianças, presencial ou online, com abordagem Cognitivo-Comportamental.",
    url: site.siteUrl,
    telephone: site.phoneTel,
    image: `${site.siteUrl}/images/hero-portrait.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Canoas" },
      { "@type": "Country", name: "Brasil" },
    ],
    openingHoursSpecification,
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
  const mapsHref = site.googleMapsUrl;

  return (
    <footer id="contato" className="scroll-mt-24 bg-primary text-surface">
      <JsonLd />
      <div className="container-narrow px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-surface/55">
              Contato
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              {site.contact.heading}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-surface/70">
              Espaço de escuta qualificada para adultos e crianças — presencial
              em Canoas ou online.
            </p>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              Agendar Consulta
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-surface/55">
                Endereço
              </p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm leading-relaxed text-surface/85 transition hover:text-surface"
              >
                {site.address.full}
              </a>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-surface/55">
                WhatsApp
              </p>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-surface/85 transition hover:text-surface"
              >
                {site.whatsappDisplay}
              </a>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-surface/55">
                CRP
              </p>
              <p className="mt-2 text-sm text-surface/85">07/44362</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-surface/55">
                Horário
              </p>
              <p className="mt-2 text-sm leading-relaxed text-surface/85">
                {site.hours.display}
              </p>

              <nav aria-label="Rodapé" className="mt-8">
                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-surface/80">
                  {site.nav.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="transition hover:text-surface"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-surface/10 pt-6 text-xs text-surface/50">
          <p>
            © 2026 {site.name} {site.title} · {site.crp}
          </p>
        </div>
      </div>
    </footer>
  );
}
