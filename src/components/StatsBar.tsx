import { site } from "@/content/site";

export default function StatsBar() {
  return (
    <section
      aria-label="Credenciais"
      className="border-y border-ink/5 bg-cream-soft"
    >
      <div className="container-narrow grid grid-cols-2 gap-px bg-ink/5 md:grid-cols-4">
        {site.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-start justify-center bg-cream-soft px-5 py-8 sm:px-8 sm:py-10"
          >
            <p className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
