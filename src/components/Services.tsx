import type { ReactNode } from "react";
import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

const icons: Record<string, ReactNode> = {
  adults: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  children: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 19c.7-3.2 2.8-4.8 6-4.8s5.3 1.6 6 4.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.5 5.5c-.6-1.2-1.6-1.8-2.7-1.5M15.5 5.5c.6-1.2 1.6-1.8 2.7-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  online: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="13"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16 9.5 20 7v8l-4-2.5M8 18h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-surface scroll-mt-24">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark">
            Serviços
          </p>
          <Reveal
            as="h2"
            className="font-serif text-3xl font-semibold leading-snug tracking-tight text-primary sm:text-4xl"
          >
            {site.services.heading}
          </Reveal>
        </div>

        <ul className="mt-12 divide-y divide-border overflow-hidden rounded-soft border border-border bg-surface shadow-card">
          {site.services.items.map((service) => (
            <li
              key={service.title}
              className="flex items-start gap-4 px-5 py-5 transition hover:bg-background/60 sm:items-center sm:gap-6 sm:px-7 sm:py-6"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent-dark">
                {icons[service.icon]}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
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
