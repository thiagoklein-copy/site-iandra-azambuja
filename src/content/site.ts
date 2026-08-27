export const site = {
  name: "Iandra Mensch Azambuja",
  title: "Psicóloga",
  eyebrow: "Psicóloga Clínica · CRP 07/44362",
  crp: "CRP 07/44362",
  whatsappUrl: "https://wa.me/5551989559882",
  whatsappDisplay: "(51) 98955-9882",
  phoneTel: "+5551989559882",
  siteUrl: "https://iandraazambuja.com.br",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Domingos+Martins%2C+261+-+Centro%2C+Canoas+-+RS%2C+92010-170",
  address: {
    street: "R. Domingos Martins, 261 - Centro",
    city: "Canoas",
    state: "RS",
    postalCode: "92010-170",
    full: "R. Domingos Martins, 261 - Centro, Canoas - RS, 92010-170",
  },
  hours: {
    display:
      "Segunda a sexta, 8h às 20h · Sábado, 8h às 15h · Domingo, fechado",
    schema: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        days: ["Saturday"],
        opens: "08:00",
        closes: "15:00",
      },
    ],
  },
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
  hero: {
    h1: "Psicoterapia que une ciência e afeto",
    subheadline:
      "Atendimento a adultos e crianças, presencial em Canoas ou online. Um espaço de escuta qualificada para você entender o que sente e seguir com mais leveza.",
    primaryCta: "Agendar Consulta",
    secondaryCta: "Conheça meu trabalho",
    callouts: [
      "Psicóloga Clínica, atuo com a abordagem Cognitivo Comportamental.",
      "Acredito em uma escuta que acolhe e transforma.",
      "É possível viver com propósito e leveza.",
      "Meu compromisso é dar sentido às experiências que atravessamos.",
    ],
  },
  stats: [
    { value: "5,0", label: "Avaliação no Google (25 avaliações)" },
    { value: "CRP 07/44362", label: "Registro ativo" },
    { value: "Adultos e Crianças", label: "Público atendido" },
    { value: "Presencial e Online", label: "Modalidades de atendimento" },
  ],
  about: {
    heading: "Sobre Iandra",
    paragraphs: [
      "Sou psicóloga clínica, CRP 07/44362, e atendo adultos e crianças em consultório em Canoas ou por atendimento online. Trabalho com a abordagem Cognitivo-Comportamental, unindo base científica a um olhar afetivo e humano para cada história que chega até mim.",
      "Acredito em uma escuta que acolhe e transforma. Meu compromisso é ajudar você a dar sentido às experiências que atravessa, com ética, confiança e respeito ao seu tempo.",
    ],
    tags: [
      "CRP 07/44362",
      "Abordagem Cognitivo-Comportamental",
      "Canoas - RS",
    ],
  },
  services: {
    heading: "Como posso ajudar",
    items: [
      {
        title: "Psicoterapia Individual (Adultos)",
        description:
          "Atendimento para ansiedade, autoconhecimento e mudanças de vida, com base científica e escuta acolhedora.",
        icon: "adults",
      },
      {
        title: "Psicoterapia Infantil",
        description:
          "Acompanhamento para crianças, com abordagens atualizadas e ambiente acolhedor.",
        icon: "children",
      },
      {
        title: "Atendimento Online",
        description:
          "Sessões por videochamada com a mesma qualidade do atendimento presencial, para todo o Brasil.",
        icon: "online",
      },
    ],
  },
  testimonials: {
    heading: "O que dizem sobre o atendimento",
    rating: "5,0",
    reviewCount: 25,
    themes: [
      "Atendimento descrito como humanizado, acolhedor e com escuta qualificada.",
      "Pacientes destacam ética, comprometimento e confiança no trabalho.",
      "Famílias relatam evolução no acompanhamento de crianças e adolescentes.",
    ],
  },
  cta: {
    heading: "Dar o primeiro passo é o mais importante",
    subtext:
      "Marque uma conversa inicial e entenda como a terapia pode ajudar você ou sua família.",
    button: "Agendar pelo WhatsApp",
  },
  contact: {
    heading: "Atendimento em Canoas",
  },
} as const;
