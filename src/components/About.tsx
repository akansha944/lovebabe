import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl shadow-charcoal/8">
          <Image
            src="/images/storefront.png"
            alt="Love Babe & Bean storefront on Osbourne Lane"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-matcha">
            The vibe
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-charcoal md:text-5xl">
            A hidden gem for{" "}
            <span className="italic text-blue">matcha addicts</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            Love Babe & Bean is a hole-in-the-wall coffee and matcha shop —
            hand-whisked matcha, cold brew with cold foam, specialty drinks,
            and sweet treats that keep people coming back.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Quality, flavour, and a warm welcome. That&apos;s the whole thing.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              "Every matcha whisked by hand",
              "Cold foam flavours that rotate",
              "Fresh bakes when you need something sweet",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-charcoal">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-xs text-white">
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 inline-flex flex-wrap gap-3">
            <span className="rounded-full bg-blue px-5 py-2 text-sm font-medium text-white">
              Wed – Sat · 10 – 4
            </span>
            <span className="rounded-full border border-charcoal/10 bg-white px-5 py-2 text-sm font-medium text-charcoal">
              Osbourne Lane
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
