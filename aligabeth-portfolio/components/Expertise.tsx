import { PORTFOLIO_DATA } from "@/lib/information";

export function Expertise() {
  const { expertise } = PORTFOLIO_DATA;

  return (
    <section id="expertise" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Writing Expertise</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Where I can help
          </h2>
          <p className="mt-4 font-serif-body text-base leading-relaxed text-muted">
            Eight areas of focus, each grounded in the same core practice:
            careful listening, careful structure, and writing that respects
            the reader&rsquo;s time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, idx) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent/40"
            >
              <span className="font-display text-3xl text-accent/50 transition-colors group-hover:text-accent-deep">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-3 font-serif-body text-sm leading-relaxed text-text/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
