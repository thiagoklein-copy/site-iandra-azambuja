import { site } from "@/content/site";

export default function StatsBar() {
  return (
    <section
      aria-label="Credenciais"
      className="border-y border-border bg-surface"
    >
      <div className="container-narrow grid grid-cols-2 gap-px bg-border md:grid-cols-4">
        {site.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-start justify-center bg-surface px-5 py-8 sm:px-8 sm:py-10"
          >
            <p className="font-serif text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
