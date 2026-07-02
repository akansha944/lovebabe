const items = [
  "hand-whisked matcha",
  "cold foam season",
  "osbourne lane",
  "matcha addicts welcome",
  "wed – sat · 10 – 4",
  "sweet treats daily",
  "every cup crafted",
  "find us in newmarket",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="tile-watermark py-7 md:py-9">
      <div className="relative overflow-hidden bg-blue py-4 shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-blue-dark)_40%,transparent)]">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap px-4">
          {doubled.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.18em] text-white/95 md:gap-10 md:text-sm md:tracking-[0.25em]"
            >
              {item}
              <span className="text-white/40" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
