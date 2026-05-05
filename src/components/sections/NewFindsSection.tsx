import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { featuredProducts } from "@/data/site";

export function NewFindsSection() {
  return (
    <section
      id="shop"
      className="relative z-10 border-y border-bronze/50 bg-espresso/60 py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>New This Week</SectionLabel>

            <h2 className="font-serif text-4xl font-black text-ivory md:text-5xl">
              Freshly Listed Finds
            </h2>

            <p className="mt-4 max-w-2xl text-sand">
              Fresh inventory from recent cleanouts, auctions, turnovers, and
              local recovery projects. Most are available only once.
            </p>
          </div>

          <Button href="https://purveyorofcuriosities.store/collections/all" variant="secondary">
            Shop New Arrivals
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
