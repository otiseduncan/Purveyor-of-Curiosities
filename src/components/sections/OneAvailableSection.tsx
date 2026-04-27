import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function OneAvailableSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-bronze/60 bg-[linear-gradient(135deg,#2F5D50,#1C1814_55%,#11100E)] p-8 shadow-2xl shadow-black/30 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <SectionLabel>One Available</SectionLabel>

              <h2 className="font-serif text-4xl font-black text-ivory md:text-5xl">
                When It’s Gone, It’s Gone.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-ivory/85">
                Most inventory is recovered in small quantities or as single
                finds. We do not always know what will come in next, and we
                usually cannot restock the same item.
              </p>
            </div>

            <div className="rounded-[2rem] border border-ivory/15 bg-charcoal/55 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                Portfolio feature
              </p>

              <p className="mt-4 text-2xl font-bold text-ivory">
                Shopify inventory + custom frontend + resale condition system.
              </p>

              <div className="mt-6">
                <Button href="#shop">Browse One-of-One Finds</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}