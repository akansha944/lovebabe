import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-cream py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 text-center md:px-8">
        <Logo variant="wordmark" className="mx-auto" />

        <p className="script-accent text-2xl text-blue">made with love</p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          Hand-whisked matcha, cold brew with cold foam, and sweet treats —
          made with love in Newmarket.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href="https://www.instagram.com/lovebabeandbean/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-charcoal transition hover:text-blue"
          >
            Instagram
          </a>
          <a
            href="https://maps.google.com/?q=Love+Babe+%26+Bean+3%2F3B+York+Street+Newmarket+Auckland"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-charcoal transition hover:text-blue"
          >
            Directions
          </a>
          <a
            href="#menu"
            className="font-medium text-charcoal transition hover:text-blue"
          >
            Menu
          </a>
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Love Babe & Bean. All rights reserved.
        </p>

        <a
          href="https://veluno.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-xs text-muted transition hover:text-charcoal"
        >
          Website designed &amp; built by
          <span className="font-semibold text-blue group-hover:text-blue-dark">
            Veluno
          </span>
        </a>
      </div>
    </footer>
  );
}
