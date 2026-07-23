# Build Prompt — Sabrina Schmidt | Psicóloga

Paste this entire prompt into Cursor to build the full website.

---

You are a senior frontend engineer and brand designer. Build a complete, production-ready professional website for a Brazilian psychology professional. Ship a polished single-page marketing site (with optional lightweight multi-section routing if needed) that feels premium, warm, and credential-forward — not like a generic medical/dental template, not cold/clinical, and not stiff/corporate.

## Language & Copy Rules (CRITICAL)

- Write **ALL on-page copy in authentic Brazilian Portuguese (pt-BR)**.
- Do NOT use literal English translations, Spanglish, or generic corporate jargon.
- Tone: credentialed, warm, trustworthy, editorial. Speak like a respected psychologist who works with both people and organizations — clear, human, never salesy.
- UI chrome (aria labels, button labels, form labels, placeholders, error messages, footer microcopy) must also be in Brazilian Portuguese.
- Code comments, component names, file names, and README may be in English.
- Placeholder content that will later be replaced (WhatsApp number, address details, photo) must be clearly marked in Portuguese comments in code OR with obvious placeholder text like `[INSERIR NÚMERO]` — never invent a fake phone number as if it were real.

## Business Brief

**Brand:** Sabrina Schmidt — Psicóloga  
**Practice type:** Clínica + Organizacional  
**Location:** Novo Hamburgo, Rio Grande do Sul, Brazil  
**CRP:** 07/15606-RS  

**Credentials (use selectively for trust — never dump a full CV on the page):**
- Mestrado em Psicologia (PUCRS)
- Pós-graduação em Dinâmica de Grupo (SBDG)
- Pós-graduação em TCC (CBI of Miami)
- Em formação: Pós-graduação em Psicologia Organizacional (PUCRS)
- Formação em Schema Therapy (Wainer)
- Analista Comportamental certificada (DISC/PDA)
- Graduação em Direito (Feevale)
- Sócia na Vago RH
- Professora na ATITUS Educação (Campus POA)
- Coordenadora do Serviço-Escola de Psicologia

**Dual practice (must be visually and structurally separated):**
1. **Atendimento Clínico** — terapia individual fundamentada em TCC e Schema Therapy  
2. **Consultoria Organizacional** — diagnóstico de clima/cultura, desenvolvimento de lideranças, mapeamento de competências, apoio a recrutamento  

**Audiences:**
- Individuals seeking therapy
- Companies / HR seeking organizational consulting  

**WhatsApp CTA:** Primary conversion path. Use a clearly marked placeholder for the number (e.g. `env.NEXT_PUBLIC_WHATSAPP_NUMBER` or `[INSERIR NÚMERO COM DDI]`) and prefill a helpful Portuguese message based on contact goal when possible.

## Tech Stack (required)

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS**
- Deployable on **Vercel** with zero friction
- Prefer Framer Motion (or CSS scroll-driven animations) for smooth, intentional motion — not noisy
- Semantic HTML, accessible forms, keyboard-friendly nav
- Responsive: excellent on mobile and desktop
- Include a clean `README.md` with local run + Vercel deploy steps
- Include `.env.example` for WhatsApp number / contact email if used

## Design System — Blend These THREE References (do not copy any one)

Synthesize a cohesive identity from:

1. **WHOOP** (https://www.whoop.com/au/en/)  
   - Premium feel, bold high-contrast typography hierarchy  
   - Confident spacing, strong first viewport composition  
   - Smooth scroll / reveal animations  

2. **Medivra** (https://medivra.framer.website/)  
   - Soft warm neutral palette (cream / beige / sand)  
   - Rounded layouts with calm editorial rhythm  
   - Timeline-style process / journey sections  
   - Layered image cards with subtle depth (soft shadows, slight offset stacking)  

3. **Medio** (https://medio.framer.website/)  
   - Confident **serif + sans** type pairing for headlines vs body  
   - Clean trust/metrics bar with numbers as credibility signals  
   - Structured 3-step “how it works” with photography placeholders  
   - Warm terracotta / deep clay accent (NOT clinical blue/white)  

### Visual direction (hard rules)

- Calm professional palette: warm neutrals + one confident accent (terracotta / deep clay / burnt sienna). Avoid clinical blue, purple-on-white AI defaults, and dark-mode-first looks.
- Define CSS variables for colors, type scale, spacing, radius.
- Expressive purposeful fonts (Google Fonts ok). Suggested pairing direction: elegant serif for display (e.g. Fraunces, Cormorant Garamond, or Libre Baskerville) + refined sans for UI/body (e..g. Source Sans 3, DM Sans, or Manrope). Do NOT use Inter/Roboto/Arial/system as the brand face.
- First viewport = one composition: brand name as hero-level signal, one headline, one short supporting line, WhatsApp CTA group, and a dominant professional photo plane (full-bleed or edge-to-edge visual — not a tiny inset card collage).
- No floating promo badges/stickers over the hero.
- Cards only where they aid interaction/understanding (service tracks, form). Avoid dashboard clutter, pill clusters, stat overload outside the intentional trust bar.
- Ship at least 2–3 intentional motions (e.g. hero fade/rise, trust bar count-up or soft reveal, section scroll reveals).
- Imagery: use high-quality placeholder photos (Unsplash/Pexels or local `/public` placeholders) that feel human, warm, professional — therapy/conversation/leadership context. Mark photo slots clearly for a real professional portrait of Sabrina.

## Site Structure (single page, anchored sections)

Implement these sections in order:

### 1. Header / Nav
- Brand: “Sabrina Schmidt”
- Anchor links: Sobre, Serviços, Como funciona, Depoimentos, Contato
- Desktop + mobile menu
- Optional secondary CTA: “Falar no WhatsApp”

### 2. Hero
- Business name as dominant brand signal
- Credential-forward tagline in Portuguese (example direction — rewrite to feel natural, not copy verbatim):  
  *Psicóloga clínica e organizacional em Novo Hamburgo — acompanhamento individual e consultoria para empresas.*
- Short supporting sentence that signals dual practice without sounding like a CV
- Primary CTA button: WhatsApp (opens `wa.me` with prefills)
- Professional photo placeholder (prominent, full-bleed or large visual plane)
- Subtle CRP mention near credentials line (not buried only in footer)

### 3. Trust bar (Medio-inspired metrics row)
Short row of credibility signals, e.g.:
- CRP 07/15606-RS
- Mestrado PUCRS
- Clínica + Organizacional
- Formação em TCC e Schema Therapy  
Keep it scannable — numbers/short labels, not paragraphs.

### 4. About
Condensed bio positioning clinical + organizational work.  
Do **NOT** paste the full academic CV. Select 4–6 trust anchors max (CRP, mestrado, Schema/TCC, Vago RH / ATITUS as light institutional signals).  
One short paragraph + optional secondary line. Warm, human, competent.

### 5. Services — TWO CLEAR TRACKS (do not blend)
Visually separate into two labeled tracks:

#### Track A — Atendimento Clínico
Audience: individuals  
Offer cards with title, short description, session format, and price placeholders.  
Suggested offers (adapt copy; mark prices as editable placeholders with realistic RS formatting):
- Terapia individual (TCC / Schema Therapy) — valor por sessão `[R$ XX]`
- Primeira conversa / acolhimento — clarify if free or paid `[R$ XX ou sob consulta]`
Keep language intimate and careful — no miracle claims; ethical psychology tone.

#### Track B — Consultoria Organizacional
Audience: companies / HR  
Offer cards for:
- Diagnóstico de clima e cultura
- Desenvolvimento de lideranças
- Mapeamento de competências
- Apoio a processos de recrutamento / análise comportamental (DISC/PDA)  
Prices: “sob consulta” or package placeholders — B2B rarely lists fixed retail prices; be professional about that.

Each track needs its own heading, short intro sentence, and distinct visual grouping so a visitor instantly knows which path is theirs.

### 6. How it works — 3 steps (Medio-style numbered process)
Example flow (rewrite naturally in pt-BR):
1. **Contato** — mensagem no WhatsApp ou formulário, com indicação do objetivo  
2. **Sessão / Diagnóstico** — conversa inicial clínica OU levantamento organizacional  
3. **Acompanhamento** — plano terapêutico contínuo OU projeto de consultoria com devolutivas  

Use numbered typography, short copy, and photo/illustration placeholders with subtle depth.

### 7. Testimonials
2–3 realistic but **clearly generic** quotes in Portuguese (not fabricated named real clients). Mix voices:
- 1 individual therapy voice
- 1 corporate/HR voice
- Optional third hybrid or leadership voice  

Label carefully (e.g. “Cliente de terapia individual”, “Profissional de RH”) — first names or initials only, no fake full identities that could be mistaken for verified reviews. No medical outcome guarantees.

### 8. Contact / CTA
- Form fields: **Nome**, **Telefone**, **Objetivo** (dropdown or radio):
  - Terapia individual
  - Consultoria para empresa
  - Outro / Dúvidas
- Submit behavior: for MVP, either (a) open WhatsApp with composed message containing the fields, or (b) `mailto:` / Formspree / simple API route — pick the simplest reliable approach and document it. Prefer WhatsApp handoff for this business.
- Also show a prominent WhatsApp button next to/below the form.
- Short reassurance microcopy about resposta e confidencialidade (ethical, not legalistic overload).

### 9. Footer
- Name + short line
- Location: Novo Hamburgo / RS (and address placeholder if needed)
- CRP 07/15606-RS
- WhatsApp + email placeholders
- Social links placeholders (Instagram, LinkedIn)
- Copyright year

### 10. Floating WhatsApp button
- Fixed position, visible on all viewports while scrolling
- Accessible label in Portuguese
- Does not obstruct the contact form CTA on mobile (offset carefully)

## Content & Ethics Guardrails

- No diagnostic claims, no “cura”, no guaranteed results.
- Respect psychology advertising norms in Brazil: professional identification with CRP, sober claims, dignity of the profession.
- Dual-audience clarity without splitting into two separate websites.
- Prices are placeholders the owner can edit later — centralize them in a single `content` or `constants` file.

## Implementation Details

- Create content in a single source of truth (e.g. `src/content/site.ts`) for easy copy/price edits.
- Componentize: Header, Hero, TrustBar, About, Services (with ClinicalTrack + OrgTrack), Process, Testimonials, ContactForm, Footer, WhatsAppFloat.
- Smooth scroll to anchors.
- SEO basics: `metadata` title/description in Portuguese, Open Graph placeholders, favicon placeholder.
- Performance: next/image for photos, font optimization, minimal JS.
- Lighthouse-friendly contrast on warm neutrals (terracotta accent on cream must remain readable).

## Acceptance Checklist

- [ ] Next.js + Tailwind + TypeScript project runs with `npm run dev`
- [ ] All visible copy is natural Brazilian Portuguese
- [ ] Hero has name, tagline, WhatsApp CTA, photo placeholder
- [ ] Trust bar present
- [ ] Services clearly split: Atendimento Clínico vs Consultoria Organizacional
- [ ] 3-step process section
- [ ] Testimonials in pt-BR (generic, dual audience)
- [ ] Contact form: nome, telefone, seletor de objetivo
- [ ] Floating WhatsApp button on scroll
- [ ] Footer with CRP and contact placeholders
- [ ] Warm neutrals + terracotta/clay accent; serif+sans pairing
- [ ] Motion present but restrained
- [ ] README + .env.example
- [ ] Ready to deploy on Vercel

## Deliverable

Build the full website now in this repository. Do not stop at a wireframe. Implement polished UI, real pt-BR copy, and working WhatsApp CTAs using env-based phone placeholders.

---

*Generated for: Sabrina Schmidt — Psicóloga Clínica e Organizacional | Novo Hamburgo/RS | CRP 07/15606-RS*
