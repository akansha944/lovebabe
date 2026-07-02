export function Visit() {
  return (
    <section id="visit" className="bg-charcoal py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="script-accent text-2xl text-matcha-light md:text-3xl">
              come say hi
            </p>
            <h2 className="mt-1 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
              Osbourne Lane, Newmarket
            </h2>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/75 md:text-base">
              <p>3/3B York Street, Newmarket, Auckland 1023</p>
              <p>Wed – Sat · 10am – 4pm</p>
              <p>$10 – $20 per person</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Love+Babe+%26+Bean+3%2F3B+York+Street+Newmarket+Auckland"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-dark"
              >
                Get directions
              </a>
              <a
                href="https://www.instagram.com/lovebabeandbean/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Love Babe & Bean location map"
              src="https://maps.google.com/maps?q=3%2F3B+York+Street+Newmarket+Auckland+1023&output=embed"
              className="h-[240px] w-full grayscale-[40%] invert-[8%] md:h-[280px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
