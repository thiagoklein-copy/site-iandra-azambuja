import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

export default function ProcessSteps() {
  return (
    <section
      id="como-funciona"
      className="section-padding bg-background scroll-mt-24"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark">
            Processo
          </p>
          <Reveal
            as="h2"
            className="font-serif text-3xl font-semibold leading-snug tracking-tight text-primary sm:text-4xl"
          >
            {site.process.heading}
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {site.process.steps.map((step, index) => (
            <li
              key={step.number}
              className="relative rounded-soft border border-border bg-surface p-7 shadow-card"
            >
              <span className="font-serif text-5xl font-semibold leading-none text-accent/30">
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {step.description}
              </p>
              {index < site.process.steps.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-accent/30 md:block"
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
