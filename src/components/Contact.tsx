"use client";

import { FormEvent, useMemo, useState } from "react";
import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

const modalities = ["Presencial", "Online", "Não sei ainda"] as const;

function buildWhatsAppUrl(payload: {
  name: string;
  phone: string;
  modality: string;
  message: string;
}) {
  const text = [
    "Olá! Vim pelo site e gostaria de agendar uma conversa.",
    "",
    `Nome: ${payload.name}`,
    `Telefone / WhatsApp: ${payload.phone}`,
    `Modalidade preferida: ${payload.modality}`,
    "",
    "O que está me trazendo aqui:",
    payload.message,
  ].join("\n");

  return `https://wa.me/5551999487749?text=${encodeURIComponent(text)}`;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [modality, setModality] = useState<(typeof modalities)[number]>(
    "Não sei ainda",
  );
  const [message, setMessage] = useState("");

  const mapsEmbedSrc = useMemo(
    () =>
      `https://maps.google.com/maps?q=${encodeURIComponent(
        site.address.full,
      )}&z=16&output=embed`,
    [],
  );

  const mapsOpenHref = useMemo(
    () =>
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        site.address.full,
      )}`,
    [],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedPhone || !trimmedMessage) {
      return;
    }

    const url = buildWhatsAppUrl({
      name: trimmedName,
      phone: trimmedPhone,
      modality,
      message: trimmedMessage,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contato"
      className="section-padding bg-background scroll-mt-24"
    >
      <div className="container-narrow">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-dark">
            Contato
          </p>
          <Reveal
            as="h2"
            className="font-serif text-3xl font-semibold leading-snug tracking-tight text-primary sm:text-4xl"
          >
            {site.contact.sectionHeading}
          </Reveal>
          <p className="mt-4 text-base text-muted">{site.contact.blurb}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-card sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block text-sm font-medium text-primary"
                >
                  Nome completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Como você se chama?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="mb-2 block text-sm font-medium text-primary"
                >
                  Telefone / WhatsApp
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(51) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="modalidade"
                  className="mb-2 block text-sm font-medium text-primary"
                >
                  Modalidade preferida
                </label>
                <select
                  id="modalidade"
                  name="modalidade"
                  value={modality}
                  onChange={(e) =>
                    setModality(e.target.value as (typeof modalities)[number])
                  }
                  className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  {modalities.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="mb-2 block text-sm font-medium text-primary"
                >
                  O que está te trazendo aqui?
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  placeholder="Pode ser um resumo simples — não precisa ser perfeito. Estou aqui para escutar."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <button type="submit" className="btn-primary w-full !rounded-xl">
                Enviar mensagem
              </button>
            </form>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-card">
            <div className="grid gap-6 border-b border-border p-6 sm:grid-cols-2 sm:p-8">
              <InfoBlock
                label="Instagram"
                href={site.instagram.url}
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                }
              >
                {site.instagram.handle}
              </InfoBlock>

              <InfoBlock
                label="WhatsApp"
                href={site.whatsappUrl}
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                    <path
                      d="M6.5 18.5 5 21l2.8-.7A8.5 8.5 0 1 0 6.5 18.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 10.5c.4 1.6 1.9 3.1 3.5 3.5M14.5 9.5 13 11"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              >
                {site.whatsappDisplay}
              </InfoBlock>

              <InfoBlock
                label="Endereço"
                href={mapsOpenHref}
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                    <path
                      d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                }
              >
                {site.address.full}
              </InfoBlock>

              <InfoBlock
                label="Horário de atendimento"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 8v4.5L15 14"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                {site.contact.hours}
              </InfoBlock>
            </div>

            <div className="relative h-64 bg-border/40 sm:h-80">
              <iframe
                title="Mapa do consultório em Novo Hamburgo"
                src={mapsEmbedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={mapsOpenHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-primary shadow-float transition hover:text-accent-dark"
              >
                Abrir no Maps
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
                  <path
                    d="M7 17 17 7M10 7h7v7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  label,
  children,
  icon,
  href,
}: {
  label: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  href?: string;
}) {
  const content = (
    <>
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent-dark">
        {icon}
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-primary">{children}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}
