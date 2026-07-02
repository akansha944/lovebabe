import Image from "next/image";

type MenuItem = {
  name: string;
  description: string;
  tag?: string;
};

type MenuCategory = {
  title: string;
  emoji: string;
  accent: string;
  items: MenuItem[];
};

const menu: MenuCategory[] = [
  {
    title: "Matcha",
    emoji: "🍵",
    accent: "border-matcha/20 bg-matcha-pale/50",
    items: [
      {
        name: "Classic Matcha Latte",
        description: "Vibrant green layers over creamy milk and ice",
        tag: "Signature",
      },
      {
        name: "Strawberry Matcha",
        description: "Sweet pink meets earthy matcha",
      },
      {
        name: "Iced Matcha",
        description: "Pure, bold, hand-whisked",
      },
      {
        name: "Matcha + Cold Foam",
        description: "Thick foam, rainbow sprinkles optional",
        tag: "Popular",
      },
    ],
  },
  {
    title: "Cold Brew",
    emoji: "🤎",
    accent: "border-amber-200/60 bg-amber-50/50",
    items: [
      {
        name: "Classic Cold Brew",
        description: "Smooth and slow-steeped",
      },
      {
        name: "Pistachio Cold Foam",
        description: "Pale green foam, rich coffee below",
        tag: "Fan fav",
      },
      {
        name: "Cookie Butter Cold Brew",
        description: "Crushed biscuit, sweet cold foam",
      },
    ],
  },
  {
    title: "Treats",
    emoji: "🥐",
    accent: "border-blue/15 bg-blue-light/40",
    items: [
      {
        name: "Brown Butter Choc Chip Cookie",
        description: "Sea salt, golden, chewy",
        tag: "Must try",
      },
      {
        name: "Daily Pastries",
        description: "Croissants and bakes — ask what's in",
      },
      {
        name: "Seasonal Specials",
        description: "Follow Instagram for drops",
      },
    ],
  },
];

export function Menu() {
  return (
    <section id="menu" className="bg-cream-dark py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="script-accent text-3xl text-blue md:text-4xl">the menu</p>
            <h2 className="mt-1 font-[family-name:var(--font-display)] text-4xl text-charcoal md:text-5xl">
              Sip, slow down,
              <br />
              stay a while
            </h2>
          </div>
          <p className="text-muted lg:text-right">
            Specialty matcha and cold brew with cold foam — made fresh Wed through
            Sat. Check Instagram for today&apos;s lineup.
          </p>
        </div>

        <div className="relative mt-12 aspect-[21/9] overflow-hidden rounded-3xl md:aspect-[3/1]">
          <Image
            src="/images/counter-scene.png"
            alt="Drinks lined up on the cafe counter"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/20 to-transparent" />
          <p className="script-accent absolute bottom-4 left-4 text-2xl text-white sm:bottom-6 sm:left-6 sm:text-3xl md:bottom-8 md:left-10 md:text-4xl">
            your order awaits
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {menu.map((category) => (
            <div
              key={category.title}
              className={`rounded-3xl border p-7 md:p-8 ${category.accent}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {category.emoji}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-charcoal">
                  {category.title}
                </h3>
              </div>

              <ul className="mt-7 space-y-5">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-charcoal/5 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium text-charcoal">{item.name}</p>
                      {item.tag && (
                        <span className="shrink-0 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
