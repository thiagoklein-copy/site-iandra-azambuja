import { site } from "@/content/site";

export default function CtaBanner() {
  return (
    <section className="section-padding bg-cream-soft">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-center shadow-soft sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-terracotta/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 bottom-0 h-44 w-44 rounded-full bg-terracotta-light/20 blur-3xl" />

          <h2 className="relative font-serif text-3xl font-semibold tracking-tight text-cream-soft text-balance sm:text-4xl lg:text-5xl">
            {site.cta.heading}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-cream/75 sm:text-lg">
            {site.cta.subtext}
          </p>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary relative mt-8"
          >
            {site.cta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
