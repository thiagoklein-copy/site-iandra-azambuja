"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

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
          <motion.p {...fade(0.3)} className="mt-5 text-sm text-muted">
            {site.crp} · Novo Hamburgo / RS
          </motion.p>
        </div>

        <motion.div
          {...fade(0.18)}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-soft lg:ml-auto lg:max-w-none">
            <Image
              src="/images/hero-portrait.svg"
              alt="Retrato profissional placeholder de Sabrina Schmidt"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-2 bottom-10 max-w-[11.5rem] rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-float backdrop-blur sm:-left-4 sm:max-w-[13rem]">
            <p className="text-xs font-semibold text-primary sm:text-sm">
              {site.hero.badges[0].label}
            </p>
            <p className="mt-0.5 text-[11px] text-muted">Registro profissional</p>
          </div>

          <div className="absolute -right-1 top-8 max-w-[12rem] rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-float backdrop-blur sm:right-2 sm:max-w-[14rem]">
            <p className="text-xs font-semibold text-primary sm:text-sm">
              {site.hero.badges[1].label}
            </p>
            <p className="mt-0.5 text-[11px] text-muted">Formação acadêmica</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
