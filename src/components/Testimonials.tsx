import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

/*
  Depoimentos: seção agregada apenas (nota Google + temas parafraseados).
  Citações verbatim com nomes de avaliadores só devem ser adicionadas depois
  que a Iandra autorizar explicitamente o uso no site — esta seção é
  intencionalmente aggregate-only para o demo.
*/

export default function Testimonials() {
  const { testimonials, googleMapsUrl } = site;

  return (
    <section
      id="depoimentos"
      className="section-padding bg-background scroll-mt-24"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark">
            Confiança
          </p>
          <Reveal
            as="h2"
            className="font-serif text-3xl font-semibold leading-snug tracking-tight text-primary sm:text-4xl"
          >
            {testimonials.heading}
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-soft border border-border bg-surface px-6 py-10 text-center shadow-card sm:px-10 sm:py-12">
          <div
            className="mb-3 flex items-center justify-center gap-1 text-accent"
            aria-hidden
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="font-serif text-5xl font-semibold tracking-tight text-primary sm:text-6xl">
            {testimonials.rating}
          </p>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-accent-dark underline-offset-4 transition hover:underline"
          >
            {testimonials.reviewCount} avaliações no Google
          </a>

          <ul className="mt-10 space-y-4 text-left">
            {testimonials.themes.map((theme) => (
              <li
                key={theme}
                className="rounded-2xl border border-border bg-background/70 px-5 py-4 text-sm leading-relaxed text-muted sm:text-base"
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 3.5 14.6 9l6 .5-4.6 4 1.4 5.8L12 16.6 6.6 19.3 8 13.5 3.4 9.5l6-.5L12 3.5Z" />
    </svg>
  );
}
