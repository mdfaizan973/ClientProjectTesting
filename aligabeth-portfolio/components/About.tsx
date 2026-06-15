import { PORTFOLIO_DATA } from "@/lib/information";

export function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky label column */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">{about.eyebrow}</p>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
                {about.heading}
              </h2>
              <div className="mt-8 hidden lg:block">
                <div className="divider" />
              </div>
            </div>
          </div>

          {/* Essay column */}
          <div className="lg:col-span-9">
            <div className="max-w-2xl space-y-6 font-serif-body text-[1.05rem] leading-[1.85] text-text/85">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "drop-cap" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
