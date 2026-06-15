import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/information";

export function Hero() {
  const { hero, meta } = PORTFOLIO_DATA;

  return (
    <section id="top" className="paper-texture border-b border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-24">
        {/* Text column */}
        <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-7">
          <p className="eyebrow mb-6">{hero.eyebrow}</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-7xl">
            {hero.heading}
          </h1>

          <p className="mt-8 max-w-xl font-serif-body text-lg leading-relaxed text-text/80">
            {hero.intro}
          </p>

          <div className="mt-6 max-w-xl border-l-2 border-accent/40 pl-5">
            <p className="font-serif-body text-base italic leading-relaxed text-muted">
              {hero.mission}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-deep"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-full border border-primary/15 px-7 py-3.5 text-sm font-semibold text-text transition-colors hover:border-accent-deep hover:text-accent-deep"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>

          <p className="mt-8 text-sm text-muted">{meta.location}</p>
        </div>

        {/* Portrait column */}
        <div className="order-1 lg:order-2 lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface-alt shadow-[0_20px_60px_rgba(43,41,37,0.10)]">
            <Image
              src={hero.portrait}
              alt={`Portrait of ${meta.name}`}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
