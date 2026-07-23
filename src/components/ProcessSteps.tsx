import { site } from "@/content/site";

export default function ProcessSteps() {
  return (
    <section
      id="como-funciona"
      className="section-padding bg-cream scroll-mt-24"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-dark">
            Processo
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {site.process.heading}
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {site.process.steps.map((step, index) => (
            <li
              key={step.number}
              className="relative rounded-soft border border-ink/8 bg-cream-soft p-7 shadow-card"
            >
              <span className="font-serif text-5xl font-semibold leading-none text-terracotta/30">
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                {step.description}
              </p>
              {index < site.process.steps.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-terracotta/30 md:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
