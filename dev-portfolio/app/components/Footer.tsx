export function Footer() {
  return (
    <footer className="border-t border-text/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-display text-sm font-semibold tracking-tight text-text">
          Faizan<span className="text-accent">.</span>dev
        </p>
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Faizan Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
