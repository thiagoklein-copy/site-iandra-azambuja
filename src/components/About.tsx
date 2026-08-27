import Image from "next/image";
import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-background scroll-mt-24">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-soft border border-border shadow-soft">
            <Image
              src="/images/about-portrait.svg"
              alt="Ambiente acolhedor de atendimento psicológico"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
          <div className="absolute -left-4 top-10 hidden w-40 overflow-hidden rounded-2xl border border-border shadow-card lg:block">
            <div className="relative aspect-[5/4]">
              <Image
                src="/images/therapy-space.svg"
                alt="Espaço de terapia — visual placeholder"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark">
            Quem sou eu
          </p>
          <Reveal
            as="h2"
            className="font-serif text-3xl font-semibold leading-snug tracking-tight text-primary sm:text-4xl"
          >
            {site.about.heading}
          </Reveal>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.about.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
