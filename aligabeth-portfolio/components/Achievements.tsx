import { PORTFOLIO_DATA } from "@/lib/information";

export function Achievements() {
  const { achievements, featuredIn } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="border-b border-line bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((stat) => (
            <div
              key={stat.label}
              className="border-l border-bg/15 pl-6 first:border-l-0 first:pl-0 sm:border-l sm:pl-6"
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-bg sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-bg/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-bg/10 pt-10">
          <p className="eyebrow mb-6 text-bg/50">Featured In</p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {featuredIn.map((name) => (
              <span
                key={name}
                className="font-display text-lg text-bg/70 sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
