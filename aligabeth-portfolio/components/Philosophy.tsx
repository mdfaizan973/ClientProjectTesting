import { PORTFOLIO_DATA } from "@/lib/information";

export function Philosophy() {
  const { philosophy } = PORTFOLIO_DATA;

  return (
    <section id="philosophy" className="border-b border-line bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4 text-center">{philosophy.eyebrow}</p>
          <h2 className="font-display text-center text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
            {philosophy.heading}
          </h2>

          <div className="mt-4 flex justify-center">
            <div className="h-px w-16 bg-accent-deep/40" />
          </div>

          <div className="mt-12 space-y-6 font-serif-body text-lg leading-[1.9] text-text/85">
            {philosophy.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "drop-cap" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
