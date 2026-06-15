import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/information";

export function Journal() {
  const { journal } = PORTFOLIO_DATA;

  return (
    <section id="journal" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Journal &amp; Insights</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Notes from the writing desk
          </h2>
          <p className="mt-4 font-serif-body text-base leading-relaxed text-muted">
            Reflections on craft, creativity, and the publishing world —
            written for anyone curious about what goes on behind the page.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {journal.map((post) => (
            <article
              key={post.title}
              className="group rounded-2xl border border-line bg-bg p-7 transition-colors hover:border-accent/40 lg:p-8"
            >
              <span className="eyebrow">{post.category}</span>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-text">
                {post.title}
              </h3>
              <p className="mt-3 font-serif-body text-sm leading-relaxed text-text/75">
                {post.preview}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-deep transition-colors group-hover:text-accent">
                Read the piece
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
