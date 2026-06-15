import { PORTFOLIO_DATA } from "@/lib/information";

export function CaseStudies() {
  const { caseStudies } = PORTFOLIO_DATA;

  return (
    <section id="work" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Selected Works &amp; Case Studies</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            How the writing actually gets made
          </h2>
          <p className="mt-4 font-serif-body text-base leading-relaxed text-muted">
            A look behind three projects — the questions I started with, the
            decisions I made along the way, and what happened afterward.
          </p>
        </div>

        <div className="space-y-10">
          {caseStudies.map((cs, idx) => (
            <article
              key={cs.title}
              className="rounded-2xl border border-line bg-surface p-8 lg:p-12"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                  {cs.title}
                </h3>
                <span className="eyebrow whitespace-nowrap">
                  {String(idx + 1).padStart(2, "0")} &mdash; Case Study
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent-deep">
                {cs.client}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    The Challenge
                  </h4>
                  <p className="font-serif-body text-sm leading-relaxed text-text/75">
                    {cs.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    Research Process
                  </h4>
                  <p className="font-serif-body text-sm leading-relaxed text-text/75">
                    {cs.research}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    Writing Approach
                  </h4>
                  <p className="font-serif-body text-sm leading-relaxed text-text/75">
                    {cs.approach}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    Final Outcome
                  </h4>
                  <p className="font-serif-body text-sm leading-relaxed text-text/75">
                    {cs.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    Reader Engagement
                  </h4>
                  <p className="font-serif-body text-sm italic leading-relaxed text-text/70">
                    {cs.engagement}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    Business Impact
                  </h4>
                  <p className="font-serif-body text-sm italic leading-relaxed text-text/70">
                    {cs.businessImpact}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
