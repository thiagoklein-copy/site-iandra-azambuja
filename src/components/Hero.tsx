import Image from "next/image";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-cream pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-sand/80 blur-3xl" />

      <div className="container-narrow grid items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pb-24">
        <div className="lg:col-span-6">
          <p className="fade-up mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-dark">
            {site.eyebrow}
          </p>
          <h1 className="fade-up font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.35rem]">
            {site.hero.h1}
          </h1>
          <p className="fade-up-delay mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {site.hero.subheadline}
          </p>
          <div className="fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {site.hero.primaryCta}
            </a>
            <a href="#sobre" className="btn-ghost">
              {site.hero.secondaryCta}
            </a>
          </div>
          <p className="fade-up-delay-2 mt-5 text-sm text-ink-soft">
            {site.crp} · Novo Hamburgo / RS
          </p>
        </div>

        <div className="fade-up-delay relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-soft lg:ml-auto lg:max-w-none">
            <Image
              src="/images/hero-portrait.svg"
              alt="Retrato profissional placeholder de Sabrina Schmidt"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-2 bottom-10 max-w-[11.5rem] rounded-2xl bg-cream-soft/95 px-4 py-3 shadow-float backdrop-blur sm:-left-4 sm:max-w-[13rem]">
            <p className="text-xs font-semibold text-ink sm:text-sm">
              {site.hero.badges[0].label}
            </p>
            <p className="mt-0.5 text-[11px] text-ink-soft">Registro profissional</p>
          </div>

          <div className="absolute -right-1 top-8 max-w-[12rem] rounded-2xl bg-cream-soft/95 px-4 py-3 shadow-float backdrop-blur sm:right-2 sm:max-w-[14rem]">
            <p className="text-xs font-semibold text-ink sm:text-sm">
              {site.hero.badges[1].label}
            </p>
            <p className="mt-0.5 text-[11px] text-ink-soft">Formação acadêmica</p>
          </div>
        </div>
      </div>
    </section>
  );
}
