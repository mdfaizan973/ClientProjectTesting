import { PORTFOLIO_DATA } from "@/lib/information";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Eight years of writing for readers who finish what they start
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* vertical line */}
          <div
            className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block"
            aria-hidden="true"
          />

          <div className="space-y-16">
            {experience.map((role) => (
              <div
                key={role.company + role.period}
                className="relative pl-0 sm:pl-12"
              >
                {/* marker */}
                <span
                  className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-accent-deep bg-bg sm:block"
                  aria-hidden="true"
                />

                <div className="rounded-2xl border border-line bg-surface p-7 lg:p-9">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">
                      {role.role}
                    </h3>
                    <span className="eyebrow whitespace-nowrap">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-deep">
                    {role.company} &middot; {role.location}
                  </p>

                  <p className="mt-4 font-serif-body text-[1.02rem] leading-relaxed text-text/80">
                    {role.summary}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2.5">
                        {role.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2.5 text-sm leading-relaxed text-text/75"
                          >
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                        Achievements
                      </h4>
                      <ul className="space-y-2.5">
                        {role.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-2.5 text-sm leading-relaxed text-text/75"
                          >
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-line pt-5">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                      Audience Impact
                    </h4>
                    <p className="font-serif-body text-sm italic leading-relaxed text-text/70">
                      {role.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
