# Iandra Mensch Azambuja — Site Institucional

Site one-page da psicóloga Iandra Mensch Azambuja (clínica), feito com Next.js 14, TypeScript e Tailwind CSS. Pronto para deploy na Vercel.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts: Fraunces + Inter
- Motion: `framer-motion` leve (hero + headings de seção)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Conecte o repositório em [vercel.com](https://vercel.com)
2. Framework preset: Next.js
3. Deploy — sem variáveis de ambiente obrigatórias

WhatsApp CTA aponta para `https://wa.me/5551989559882`.

## Conteúdo e cores

- Copy e dados centralizados em `src/content/site.ts`
- Paleta em `tailwind.config.ts`: cream `#F7F3EE`, accent dusty blue `#5B7C99`, charcoal text `#211F1D`
- Fotos placeholder em `public/images/` — substitua a foto de estúdio em `hero-portrait` (preferencialmente JPG/WebP) e atualize o caminho no Hero / metadata

## Estrutura

```
src/
  app/           # layout, page, globals
  components/    # Header, Hero, StatsBar, About, Services, Testimonials, CtaBanner, Footer, WhatsAppButton
  content/       # site.ts
public/images/   # placeholders
```

## Contato (produção)

- Endereço: R. Domingos Martins, 261 - Centro, Canoas - RS, 92010-170
- WhatsApp: (51) 98955-9882
- CRP: 07/44362
- Horário: Segunda a sexta, 8h às 20h · Sábado, 8h às 15h · Domingo, fechado
