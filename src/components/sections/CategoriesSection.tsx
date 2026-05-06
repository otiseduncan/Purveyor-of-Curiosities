const categories = [
  {
    code: "Home",
    title: "The Home Shelf",
    description:
      "Household goods, decor, sealed personal-care items, candles, kitchen finds, and useful everyday products.",
  },
  {
    code: "Garage",
    title: "The Garage Bin",
    description:
      "Automotive accessories, detailing supplies, trim pieces, manuals, and non-safety-critical garage finds.",
  },
  {
    code: "Tools",
    title: "The Tool Crate",
    description:
      "Hand tools, hardware, meters, toolboxes, fasteners, repair supplies, and practical workbench finds.",
  },
  {
    code: "Cabinet",
    title: "The Oddity Cabinet",
    description:
      "Vintage pieces, strange finds, conversation items, memorabilia, decor, and things you do not see every day.",
  },
  {
    code: "Wiring",
    title: "The Wire Box",
    description:
      "Small electronics, chargers, cables, speakers, gadgets, and devices with clear testing notes.",
  },
  {
    code: "Shipping",
    title: "The Local Pickup Corner",
    description:
      "Large, fragile, heavy, awkward, or low-margin finds available for local pickup only.",
  },
];

export function CategoriesSection() {
  return (
    <section id="categories" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-bronze/70 bg-espresso/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Browse the Curiosity Cabinet
          </div>

          <h2 className="font-serif text-4xl font-black text-ivory md:text-5xl">
            Organized Like a Shop, Discovered Like a Treasure Hunt
          </h2>

          <p className="mt-5 text-sand">
            Branded categories keep the experience memorable while Shopify tags
            keep the backend clean and filterable.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-[2rem] border border-bronze/55 bg-espresso/80 p-6 transition hover:-translate-y-1 hover:border-gold/60"
            >
              <div className="mb-6 inline-flex h-12 min-w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 px-3 text-xs font-semibold tracking-normal text-gold">
                {category.code}
              </div>

              <h3 className="text-xl font-bold text-ivory">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-sand">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
