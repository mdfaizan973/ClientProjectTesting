import { Mail, Send } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/information";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function Contact() {
  const { contact, meta } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: intro + collaboration + links */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">{contact.eyebrow}</p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
              {contact.heading}
            </h2>
            <p className="mt-6 font-serif-body text-base leading-relaxed text-text/75">
              {contact.intro}
            </p>

            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Collaboration opportunities
              </h3>
              <ul className="mt-4 space-y-2.5">
                {contact.collaboration.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 font-serif-body text-sm leading-relaxed text-text/75"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={`mailto:${meta.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent-deep"
              >
                <Mail className="h-4 w-4" />
                {meta.email}
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent-deep"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-10 rounded-2xl border border-line bg-surface-alt p-6">
              <h3 className="font-display text-lg font-semibold text-text">
                {contact.newsletter.heading}
              </h3>
              <p className="mt-2 font-serif-body text-sm leading-relaxed text-text/70">
                {contact.newsletter.description}
              </p>
              <form className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-primary/15 bg-bg px-5 py-2.5 text-sm text-text placeholder:text-muted/70 outline-none transition-colors focus:border-accent-deep"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-deep"
                >
                  Subscribe
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-surface p-8 lg:p-10">
              <h3 className="font-display text-xl font-semibold text-text">
                Send a message
              </h3>
              <p className="mt-2 font-serif-body text-sm text-text/70">
                Tell me a little about what you have in mind — a publication,
                a brand, a deadline, an idea that&rsquo;s still taking shape.
                I read every message myself.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-text"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent-deep"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-text"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent-deep"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="topic"
                    className="text-sm font-medium text-text"
                  >
                    What are you reaching out about?
                  </label>
                  <select
                    id="topic"
                    className="w-full rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent-deep"
                  >
                    <option>A feature or essay pitch</option>
                    <option>Brand storytelling / About page</option>
                    <option>Ghostwriting</option>
                    <option>Editorial consulting</option>
                    <option>Speaking or workshop inquiry</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me a bit about your project, timeline, and what kind of writing you're looking for."
                    className="w-full resize-none rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-text placeholder:text-muted/60 outline-none transition-colors focus:border-accent-deep"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-deep"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center gap-4 border-t border-line pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-display text-lg font-semibold text-text">
            {meta.name}
          </p>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {meta.name}. All words, written
            with care.
          </p>
        </div>
      </div>
    </section>
  );
}
