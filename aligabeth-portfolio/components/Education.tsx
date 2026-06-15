import { PORTFOLIO_DATA } from "@/lib/information";

export function Education() {
  const { education, literaryInfluences, continuedEducation } =
    PORTFOLIO_DATA;

  return (
    <section id="education" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Education &amp; Learning</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Formal study, and the learning that never really stops
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl border border-line bg-bg p-7 lg:p-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-display text-lg font-semibold text-text">
                  {item.degree}
                </h3>
                <span className="eyebrow whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent-deep">
                {item.institution}
              </p>
              <p className="mt-4 font-serif-body text-sm leading-relaxed text-text/75">
                {item.description}
              </p>
              <div className="mt-5 border-t border-line pt-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                  Key Learnings
                </h4>
                <ul className="space-y-2">
                  {item.learnings.map((l, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm leading-relaxed text-text/70"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Influences + continued education */}
        <div className="mt-16 grid grid-cols-1 gap-8 rounded-2xl border border-line bg-bg p-8 lg:grid-cols-2 lg:p-10">
          <div>
            <h3 className="font-display text-xl font-semibold text-text">
              Literary Influences
            </h3>
            <ul className="mt-5 space-y-4">
              {literaryInfluences.map((inf) => (
                <li key={inf.name}>
                  <p className="font-display text-base font-semibold text-text">
                    {inf.name}
                  </p>
                  <p className="mt-1 font-serif-body text-sm text-muted">
                    {inf.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-text">
              Continued Education
            </h3>
            <p className="mt-5 font-serif-body text-sm leading-relaxed text-text/75">
              {continuedEducation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
