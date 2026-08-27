"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

const calloutPositions = [
  "lg:absolute lg:-left-3 lg:top-10 lg:max-w-[13.5rem]",
  "lg:absolute lg:-right-2 lg:top-16 lg:max-w-[13rem]",
  "lg:absolute lg:-left-4 lg:bottom-28 lg:max-w-[14rem]",
  "lg:absolute lg:right-0 lg:bottom-12 lg:max-w-[13.5rem]",
] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fade = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut" as const, delay },
        };

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-background pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-border/80 blur-3xl" />

      <div className="container-narrow grid items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pb-24">
        <div className="lg:col-span-6">
          <motion.p
            {...fade(0)}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark"
          >
            {site.eyebrow}
          </motion.p>
          <motion.h1
            {...fade(0.08)}
            className="font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-primary text-balance sm:text-5xl lg:text-[3.35rem]"
          >
            {site.hero.h1}
          </motion.h1>
          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.hero.subheadline}
          </motion.p>
          <motion.div
            {...fade(0.24)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
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
          </motion.div>
        </div>

        <motion.div {...fade(0.18)} className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-soft lg:ml-auto lg:max-w-none">
            {/* Substituir por /images/hero-portrait.jpg (retrato de estúdio) quando o arquivo estiver em public/images/ */}
            <Image
              src="/images/hero-portrait.svg"
              alt="Iandra Mensch Azambuja, psicóloga clínica"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
          </div>

          {/* Desktop: badges flutuantes · Mobile: lista empilhada abaixo da foto */}
          <ul className="mt-5 space-y-3 lg:mt-0 lg:contents" aria-label="Sobre a abordagem">
            {site.hero.callouts.map((text, index) => (
              <li
                key={text}
                className={`relative rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-float backdrop-blur ${calloutPositions[index]}`}
              >
                <span
                  className="mb-1.5 hidden text-accent lg:block"
                  aria-hidden
                >
                  <CurvedArrow index={index} />
                </span>
                <p className="text-xs leading-snug text-primary sm:text-sm">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function CurvedArrow({ index }: { index: number }) {
  const flip = index % 2 === 1;
  return (
    <svg
      viewBox="0 0 40 18"
      className={`h-3.5 w-8 ${flip ? "ml-auto rotate-180" : ""}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M2 14 C12 2, 26 2, 36 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 6.5 L36 10 L31.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
