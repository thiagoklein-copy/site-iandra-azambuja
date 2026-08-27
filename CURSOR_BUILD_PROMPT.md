# Cursor Build Prompt — Iandra Mensch Azambuja Psicóloga Website

Build a premium one-page marketing website for a psychologist using Next.js 14 (App Router), TypeScript, and Tailwind CSS. Deploy target is Vercel. Mobile-first, fast-loading, semantic HTML, one component per section under `/components`. All on-page copy must be written in Brazilian Portuguese exactly as provided below, even though these build instructions are in English.

## Design direction

Same reference blend as the previous build, each contributing a different thing — do not copy either directly:

- **Medivra** (`https://medivra.framer.website/`) contributes the color/tone system: warm cream background, soft rounded image cards with subtle shadow, small floating annotation/badge cards layered over the hero photo, generous whitespace.
- **Medio** (`https://medio.framer.website/`) contributes structural pattern only: the numbered step section for "how it works," the stats bar with big bold numbers, and the compact service-row layout (icon + title + description).

This build has a real hero photo asset already available (professional studio portrait, dark charcoal background, warm-toned). Use a **cooler, more editorial palette** than the terracotta build to complement the photo's charcoal/blue tones — shift the accent from terracotta to a muted dusty blue, keeping the same warm cream base for content sections.

Color palette (define in `tailwind.config.ts` as custom Tailwind colors):
- `background`: `#F7F3EE` (warm cream)
- `surface`: `#FFFFFF`
- `accent`: `#5B7C99` (dusty blue — CTAs, highlights, icons; echoes the blouse in the hero photo)
- `accent-dark`: `#425A70` (hover state)
- `text-primary`: `#211F1D` (near-black, matches the hero photo's charcoal backdrop)
- `text-muted`: `#6B6058`
- `border`: `#E7DDD0`

Typography: same pairing as before — "Fraunces" (serif) for headings, "Inter" (sans) for body, loaded via `next/font/google`.

Motion: light `framer-motion` fade/slide-up on hero entrance and section headings on scroll only. Nothing else animates.

## Tech requirements

- Next.js 14 App Router, TypeScript, Tailwind CSS
- Fully responsive, mobile-first breakpoints
- Semantic HTML5, single `h1` in hero
- All images via `next/image`, lazy-loaded below the fold
- Minimal client components — only where interaction requires it
- Local SEO: title/meta description in pt-BR targeting "psicóloga Canoas," Open Graph tags, JSON-LD `ProfessionalService` schema with the real address, phone, and opening hours below
- Sticky nav with smooth-scroll anchors
- Primary CTA throughout: WhatsApp link `https://wa.me/5551989559882`
- Footer includes contact info, CRP number, opening hours, and JSON-LD schema script

## Hero photo asset

Use the provided studio portrait (charcoal background, Iandra in a light blue blouse, three-quarter turn, warm smile) as the hero image. Recreate the four floating annotation labels from the photo as small curved-arrow callout badges positioned around the image, styled like Medivra's floating trust badges but as short personal statements instead of stats:
- "Psicóloga Clínica, atuo com a abordagem Cognitivo Comportamental."
- "Acredito em uma escuta que acolhe e transforma."
- "É possível viver com propósito e leveza."
- "Meu compromisso é dar sentido às experiências que atravessamos."

On mobile, collapse these four badges into a simple stacked list below the photo instead of floating callouts (floating arrows won't work at narrow widths).

## Site content (Brazilian Portuguese — use exactly)

### 1. Header / Nav
Logo text: **Iandra Mensch Azambuja** — small tagline beside/under it: "Psicóloga"
Nav links: Sobre · Serviços · Depoimentos · Contato
Nav CTA button: "Agendar Consulta" → WhatsApp link

### 2. Hero
Eyebrow label: "Psicóloga Clínica · CRP 07/44362"
H1: "Psicoterapia que une ciência e afeto"
Subheadline: "Atendimento a adultos e crianças, presencial em Canoas ou online. Um espaço de escuta qualificada para você entender o que sente e seguir com mais leveza."
Primary CTA button: "Agendar Consulta" (WhatsApp link)
Secondary ghost link: "Conheça meu trabalho" (scrolls to Sobre)
Hero photo: as described above, with the four floating callouts.

### 3. Stats/trust bar
Four stat blocks styled like Medio's bold-number row:
- "5,0" — Avaliação no Google (25 avaliações)
- "CRP 07/44362" — Registro ativo
- "Adultos e Crianças" — Público atendido
- "Presencial e Online" — Modalidades de atendimento

### 4. Sobre (About)
Heading: "Sobre Iandra"
Body copy:

"Sou psicóloga clínica, CRP 07/44362, e atendo adultos e crianças em consultório em Canoas ou por atendimento online. Trabalho com a abordagem Cognitivo-Comportamental, unindo base científica a um olhar afetivo e humano para cada história que chega até mim.

Acredito em uma escuta que acolhe e transforma. Meu compromisso é ajudar você a dar sentido às experiências que atravessa, com ética, confiança e respeito ao seu tempo."

Layout: hero-style photo crop or a second photo placeholder on one side, text on the other. Below the paragraph, a small pill list: "CRP 07/44362 · Abordagem Cognitivo-Comportamental · Canoas - RS"

### 5. Serviços (Services)
Heading: "Como posso ajudar"
Three service cards, each with a small icon + title + one-line description:
1. **Psicoterapia Individual (Adultos)** — "Atendimento para ansiedade, autoconhecimento e mudanças de vida, com base científica e escuta acolhedora."
2. **Psicoterapia Infantil** — "Acompanhamento para crianças, com abordagens atualizadas e ambiente acolhedor."
3. **Atendimento Online** — "Sessões por videochamada com a mesma qualidade do atendimento presencial, para todo o Brasil."

### 6. Depoimentos (Testimonials)
Heading: "O que dizem sobre o atendimento"
Since these are public Google reviews and Iandra hasn't yet authorized their verbatim use for her own site, do NOT quote reviewers directly. Instead build this section as a trust summary using paraphrased themes plus the real aggregate rating:
- Show the 5,0 rating and "25 avaliações no Google" prominently (e.g., star icons + number), linking out to the Google Maps profile.
- Below it, three short paraphrased trust statements (not attributed to any named reviewer), e.g.:
  - "Atendimento descrito como humanizado, acolhedor e com escuta qualificada."
  - "Pacientes destacam ética, comprometimento e confiança no trabalho."
  - "Famílias relatam evolução no acompanhamento de crianças e adolescentes."
- Add a small note in the code comments for Cursor: real verbatim quotes with reviewer names should only be added later, after Iandra explicitly authorizes their use — this section is intentionally aggregate-only for the demo.

### 7. CTA banner
Heading: "Dar o primeiro passo é o mais importante"
Subtext: "Marque uma conversa inicial e entenda como a terapia pode ajudar você ou sua família."
Button: "Agendar pelo WhatsApp"

### 8. Contato / Footer
Heading: "Atendimento em Canoas"
Address: R. Domingos Martins, 261 - Centro, Canoas - RS, 92010-170
Phone/WhatsApp: (51) 98955-9882
CRP: 07/44362
Horário: Segunda a sexta, 8h às 20h · Sábado, 8h às 15h · Domingo, fechado
Footer nav: Sobre · Serviços · Depoimentos · Contato
Small print: "© 2026 Iandra Mensch Azambuja Psicóloga · CRP 07/44362"

## Component checklist
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/StatsBar.tsx`
- `components/About.tsx`
- `components/Services.tsx`
- `components/Testimonials.tsx`
- `components/CtaBanner.tsx`
- `components/Footer.tsx`
- `components/WhatsAppButton.tsx`
- `tailwind.config.ts`

## Assumptions flagged for confirmation before go-live
- Pricing not disclosed anywhere on the site (per compliance rule for psychologists) — WhatsApp is the only path for value inquiries, no numbers shown.
- Child therapy is listed as a service based on Iandra's own Instagram bio ("Atendimento de adultos e crianças"), not assumed from reviews alone.
- Testimonials section intentionally left aggregate/paraphrased — swap in real named quotes only after her authorization.
