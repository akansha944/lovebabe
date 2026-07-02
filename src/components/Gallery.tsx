import Image from "next/image";

const photos = [
  {
    src: "/images/gallery-pour.png",
    alt: "Hand-whisked matcha being poured",
    caption: "whisked by hand",
  },
  {
    src: "/images/featured-sprinkle-matcha.png",
    alt: "Matcha with cold foam and sprinkles",
    caption: "cold foam season",
  },
  {
    src: "/images/gallery-cookies.png",
    alt: "Brown butter chocolate chip cookies",
    caption: "sweet treats",
  },
];

export function Gallery() {
  return (
    <section className="border-t border-charcoal/6 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          @lovebabeandbean
        </p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-display)] text-3xl text-charcoal md:text-4xl">
          A little taste of what we make
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {photos.map((photo) => (
            <figure key={photo.alt} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="script-accent mt-3 text-center text-xl text-matcha">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/lovebabeandbean/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-charcoal px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-blue"
          >
            See more on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
