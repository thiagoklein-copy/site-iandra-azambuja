# Sabrina Schmidt — Site Institucional

Site one-page da psicóloga Sabrina Schmidt (clínica e organizacional), feito com Next.js 14, TypeScript e Tailwind CSS. Pronto para deploy na Vercel.

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

WhatsApp CTA aponta para `https://wa.me/5551999487749`.

## Conteúdo e cores

- Copy e dados centralizados em `src/content/site.ts`
- Paleta em `tailwind.config.ts`: `background`, `surface`, `accent`, `accent-dark`, `primary`, `muted`, `border`
- Fotos placeholder em `public/images/` — substitua pelos arquivos reais mantendo os nomes (ou atualize os caminhos nos componentes)

## Estrutura

```
src/
  app/           # layout, page, globals
  components/    # Header, Hero, StatsBar, About, Services, ProcessSteps, CtaBanner, Footer, WhatsAppButton
  content/       # site.ts
public/images/   # placeholders
```

## Contato (produção)

- Endereço: R. Carlos Gomes, 36 - Sl 12 - Vila Rosa, Novo Hamburgo - RS, 93315-040
- WhatsApp: (51) 99948-7749
- CRP: 07/15606-RS
