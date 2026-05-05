import { CompassLogo } from "@/components/brand/CompassLogo";
import { featuredProducts } from "@/data/featuredProducts";

const STORE_URL = "https://purveyorofcuriosities.store";

const featureList = [
  "One-of-one inventory",
  "Honest condition notes",
  "Clear product photos",
  "Shipping or local pickup",
];

export function HeroSection() {
  const featured = featuredProducts[0];

  return (
    <section className="relative overflow-hidden border-b border-brass/10 bg-ink px-6 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(44,79,60,0.35),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(185,141,58,0.14),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-brass/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brass">
            Curated finds. Useful goods. Unexpected treasures.
          </div>

          <h1 className="font-serif text-5xl font-black leading-[0.9] text-cream md:text-7xl">
            The Gateway to Useful and Unusual Finds
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-sand">
            Our official Shopify store is live. Preview featured finds here,
            then enter the store for current inventory, product photos, prices,
            cart, checkout, shipping, and updates.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={STORE_URL}
              className="inline-flex items-center justify-center rounded-full bg-brass px-6 py-3 text-sm font-black text-ink transition hover:opacity-90"
            >
              Enter the Store
            </a>

            <a
              href={`${STORE_URL}/collections/all`}
              className="inline-flex items-center justify-center rounded-full border border-brass/35 px-6 py-3 text-sm font-black text-cream transition hover:bg-brass/10 hover:text-brass"
            >
              Browse All Finds
            </a>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">
            {featureList.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-brass/15 bg-coffee/70 p-4 text-sm font-bold text-cream"
              >
                <span className="mb-3 block h-2 w-2 rounded-full bg-brass" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <article className="rounded-[2rem] border border-brass/20 bg-coffee/80 p-5 shadow-[0_0_80px_rgba(44,79,60,0.22)]">
          <a href={featured?.href ?? STORE_URL} className="block rounded-[1.5rem] border border-brass/10 bg-ink p-4">
            <div className="relative h-72 overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-emerald/35 via-ink to-coffee">
              {featured?.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <CompassLogo className="h-32 w-32" />
                </div>
              )}

              <span className="absolute left-4 top-4 rounded-full border border-brass/60 bg-ink/75 px-3 py-1 text-xs font-black text-brass">
                Featured Find
              </span>

              {featured?.price ? (
                <span className="absolute right-4 top-4 rounded-full bg-ink/85 px-4 py-2 text-sm font-black text-cream">
                  {featured.price}
                </span>
              ) : null}
            </div>

            <div className="mt-5 rounded-2xl border border-brass/15 bg-black/20 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-brass">
                {featured?.collection ?? "Featured Store Find"}
              </p>
              <h2 className="mt-2 text-2xl font-black text-cream">
                {featured?.title ?? "Featured Store Find"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-sand">
                {featured?.note ?? "See the official Shopify store for current inventory."}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-brass/35 px-3 py-1 text-xs font-bold text-brass">
                  Live Shopify Item
                </span>
                <span className="rounded-full border border-emerald/35 px-3 py-1 text-xs font-bold text-sand">
                  View in Store
                </span>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
}
