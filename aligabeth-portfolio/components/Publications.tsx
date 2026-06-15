import { PORTFOLIO_DATA } from "@/lib/information";

export function Publications() {
  const { publications } = PORTFOLIO_DATA;

  return (
    <section id="publications" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Featured Publications</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            From the archive
          </h2>
          <p className="mt-4 font-serif-body text-base leading-relaxed text-muted">
            A selection of essays, profiles, and features published across
            magazines and journals over the past several years.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub) => (
            <article
              key={pub.outlet + pub.year + pub.category}
              className="flex flex-col bg-bg p-7"
            >
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="eyebrow">{pub.category}</span>
                <span className="text-muted">{pub.year}</span>
              </div>

              <h3 className="mt-4 font-display text-base font-semibold text-text">
                {pub.outlet}
              </h3>
              <p className="mt-1 text-xs text-muted">{pub.readTime}</p>

              <p className="mt-4 flex-1 font-serif-body text-sm leading-relaxed text-text/75">
                {pub.summary}
              </p>

              <div className="mt-5 border-t border-line pt-4">
                <p className="font-serif-body text-sm italic leading-relaxed text-accent-deep">
                  &ldquo;{pub.takeaway}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
