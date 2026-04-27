import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { claimedArchiveItems } from "@/data/site";

export function ClaimedArchiveSection() {
  return (
    <section
      id="archive"
      className="relative z-10 border-t border-bronze/50 bg-espresso/70 py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>The Claimed Archive</SectionLabel>

            <h2 className="font-serif text-4xl font-black text-ivory md:text-5xl">
              Recently Claimed Curiosities
            </h2>

            <p className="mt-5 text-sand">
              A rotating archive of past finds that have already been claimed.
              This builds trust, shows inventory movement, and makes the project
              feel like a real resale operation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>Sold Archive</Badge>
              <Badge tone="green">Social Proof</Badge>
              <Badge tone="copper">Portfolio Detail</Badge>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {claimedArchiveItems.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-bronze/50 bg-charcoal/70 p-5 opacity-80"
              >
                <div className="mb-5 h-28 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(196,154,74,0.25),rgba(47,93,80,0.2))]" />

                <p className="font-bold text-ivory">{item}</p>

                <p className="mt-1 text-sm text-sand">Already claimed</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}