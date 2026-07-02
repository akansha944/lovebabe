"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = !scrolled && !open;
  const lightHeader = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          lightHeader
            ? "border-b border-charcoal/5 bg-cream/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#"
            className={`transition-colors ${lightHeader ? "text-blue" : "text-white drop-shadow-sm"}`}
            aria-label="Love Babe & Bean home"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition hover:text-blue ${
                    onHero ? "text-white/90 hover:text-white" : "text-charcoal"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.instagram.com/lovebabeandbean/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-dark"
              >
                Instagram
              </a>
            </li>
          </ul>

          <button
            type="button"
            className={`relative z-[70] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden ${
              lightHeader ? "text-charcoal" : "text-white"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-cream md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-full min-h-[100dvh] flex-col items-center justify-center gap-7 px-6 pb-8 pt-24">
            <ul className="flex w-full max-w-sm flex-col items-center gap-6">
              {links.map((link) => (
                <li key={link.href} className="w-full text-center">
                  <a
                    href={link.href}
                    className="block font-[family-name:var(--font-display)] text-3xl text-charcoal"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://www.instagram.com/lovebabeandbean/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue px-8 py-3.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
}
