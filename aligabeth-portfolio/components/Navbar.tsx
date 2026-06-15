"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/information";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#publications", label: "Publications" },
  { href: "#work", label: "Selected Work" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-text"
        >
          {PORTFOLIO_DATA.meta.name}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent-deep"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-primary/15 px-5 py-2 text-sm font-medium text-text transition-colors hover:border-accent-deep hover:text-accent-deep"
          >
            Work with me
          </a>
        </div>

        <button
          className="text-text lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-lg text-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-primary/15 px-5 py-2.5 text-center text-sm font-medium text-text"
            >
              Work with me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
