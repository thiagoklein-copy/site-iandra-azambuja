import type { ReactNode } from "react";
import { site } from "@/content/site";

const icons: Record<string, ReactNode> = {
  therapy: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  assessment: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M8 7h8M8 12h5M7 3h10a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  psychosocial: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 19c.8-3 2.9-4.5 5.5-4.5S14 16 14.8 19M14 14.5c1.7-.3 3.3.3 4.5 1.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  hr: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M4 19V7l8-3 8 3v12M8 19v-6h8v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  report: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v5h5M9 13h6M9 17h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-cream-soft scroll-mt-24">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-dark">
            Serviços
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {site.services.heading}
          </h2>
        </div>

        <ul className="mt-12 divide-y divide-ink/10 overflow-hidden rounded-soft border border-ink/10 bg-cream shadow-card">
          {site.services.items.map((service) => (
            <li
              key={service.title}
              className="flex items-start gap-4 px-5 py-5 transition hover:bg-cream-deep/50 sm:items-center sm:gap-6 sm:px-7 sm:py-6"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta-dark">
                {icons[service.icon]}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
