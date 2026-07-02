import Image from "next/image";
import { LogoMark } from "./Logo";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <Image
        src="/images/hero-matcha.png"
        alt="Layered hand-whisked matcha latte"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/35 to-charcoal/25" />

      <div className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-14 pt-28 md:justify-center md:px-10 md:pb-0 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-xl md:max-w-2xl">
            <div className="animate-rise mb-6">
              <LogoMark size="md" />
            </div>

            <p
              className="animate-rise mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/75"
              style={{ animationDelay: "0.05s" }}
            >
              Newmarket · Auckland
            </p>

            <h1
              className="animate-rise font-[family-name:var(--font-display)] text-[2.75rem] leading-[1.05] text-white md:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.1s" }}
            >
              Your daily
              <br />
              <span className="script-accent text-[1.1em] text-matcha-light">
                matcha moment
              </span>
            </h1>

            <p
              className="animate-rise mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-lg"
              style={{ animationDelay: "0.2s" }}
            >
              A cosy hole-in-the-wall on Osbourne Lane — specialty matcha, cold
              brew with cold foam, and sweet treats worth the detour.
            </p>

            <div
              className="animate-rise mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#menu"
                className="rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-dark"
              >
                See what&apos;s brewing
              </a>
              <a
                href="#visit"
                className="rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Find us
              </a>
            </div>

            <div
              className="animate-rise mt-10 flex items-center gap-6 border-t border-white/15 pt-8"
              style={{ animationDelay: "0.4s" }}
            >
              <div>
                <p className="font-[family-name:var(--font-display)] text-3xl text-white">
                  4.9
                </p>
                <p className="text-xs text-white/60">Google · 44 reviews</p>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div>
                <p className="font-[family-name:var(--font-display)] text-3xl text-matcha-light">
                  $10–20
                </p>
                <p className="text-xs text-white/60">per person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
