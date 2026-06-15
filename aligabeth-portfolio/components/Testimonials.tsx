import { Quote } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/information";

export function Testimonials() {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section id="testimonials" className="border-b border-line bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Reader &amp; Client Testimonials</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            In their words
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7"
            >
              <Quote className="h-5 w-5 text-accent/50" />
              <blockquote className="mt-4 flex-1 font-serif-body text-sm leading-relaxed text-text/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="font-display text-sm font-semibold text-text">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
