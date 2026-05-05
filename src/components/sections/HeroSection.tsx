import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { siteConfig, trustItems } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div>
          <SectionLabel>{siteConfig.tagline}</SectionLabel>

          <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.98] tracking-tight text-ivory md:text-7xl">
            A Curated Shop for Useful and Unusual Finds
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-sand">
            From estate cleanouts to storage auctions, we recover practical
            goods, strange objects, tools, home items, automotive finds, and
            one-of-one treasures worth giving a second life.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="https://purveyorofcuriosities.store/collections/all">Browse the Collection</Button>
            <Button href="#archive" variant="secondary">
              See Recently Claimed Finds
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-bronze/50 bg-espresso/80 p-4 text-sm font-semibold text-ivory"
              >
                <span className="mb-2 block text-lg text-gold">âœ“</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-gold/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[3rem] border border-bronze/70 bg-espresso p-5 shadow-2xl shadow-black/40">
            <div className="rounded-[2.25rem] border border-ivory/10 bg-[linear-gradient(145deg,#2F5D50,#1C1814_52%,#11100E)] p-6">
              <div className="flex items-center justify-between">
                <Badge>Featured Find</Badge>
                <span className="rounded-full bg-charcoal/70 px-3 py-1 text-xs font-bold text-ivory">
                  $42
                </span>
              </div>

              <div className="mt-20 flex items-center justify-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-full border border-gold/50 bg-charcoal/35 text-7xl text-gold">
                  â—ˆ
                </div>
              </div>

              <div className="mt-20 rounded-[1.75rem] border border-bronze/70 bg-charcoal/65 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  The Tool Crate
                </p>

                <h2 className="mt-2 text-2xl font-bold text-ivory">
                  Vintage Metal Toolbox
                </h2>

                <p className="mt-3 text-sm leading-6 text-sand">
                  One-of-one find with honest condition notes, clear photos, and
                  practical resale value.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge>Good Used</Badge>
                  <Badge tone="green">Shipping Available</Badge>
                  <Badge tone="copper">Estate Cleanout</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
