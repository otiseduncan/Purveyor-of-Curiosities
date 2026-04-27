import { SectionLabel } from "@/components/ui/SectionLabel";
import { categories } from "@/data/site";

export function CategoriesSection() {
  return (
    <section id="categories" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Browse the Curiosity Cabinet</SectionLabel>

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
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-2xl text-gold">
                {category.icon}
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