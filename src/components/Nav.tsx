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
  const solidHeader = scrolled && !open;
  const lightForeground = onHero || open;

  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-charcoal/55 backdrop-blur-sm md:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          open
            ? "border-b border-white/10 bg-charcoal/20 backdrop-blur-md"
            : solidHeader
              ? "border-b border-charcoal/5 bg-cream/95 shadow-sm backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
        <nav className="relative z-[60] mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#"
            className={`transition-colors ${lightForeground ? "text-white drop-shadow-sm" : "text-blue"}`}
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
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden ${
              lightForeground ? "text-white" : "text-charcoal"
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

        {open && (
          <div
            className="relative z-[60] border-t border-white/10 px-5 pb-5 pt-3 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <ul className="mx-auto flex max-w-sm flex-col gap-0.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-3.5 font-[family-name:var(--font-display)] text-2xl text-white transition hover:bg-white/10"
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
              className="mx-auto mt-3 block max-w-sm rounded-full bg-blue py-3.5 text-center text-sm font-semibold text-white shadow-lg"
              onClick={() => setOpen(false)}
            >
              Follow on Instagram
            </a>
          </div>
        )}
      </header>
    </>
  );
}
