import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Returns",
  description:
    "Returns guidance for one-of-one resale inventory at Purveyor of Curiosities.",
  alternates: {
    canonical: "/returns",
  },
};

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-charcoal text-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <a href="/" className="text-sm font-semibold text-gold transition hover:text-ivory">
          ← Back to home
        </a>

        <h1 className="mt-6 font-serif text-4xl font-black md:text-5xl">Returns</h1>

        <div className="mt-8 space-y-6 rounded-[2rem] border border-bronze/60 bg-espresso/75 p-8 text-sand">
          <p>
            Most inventory is one-of-one resale stock. Because items are unique and often unrecoverable, condition notes, photos, and listing details are a key part of every purchase decision.
          </p>
          <p>
            Returns are handled case-by-case when an item arrives significantly different from its listing description.
          </p>
          <p>
            Buyers should review photos, condition notes, and included-item details before ordering. If something seems unclear, please contact us before purchasing.
          </p>
          <p>
            {siteConfig.name} aims for clear, honest listings to reduce surprises and support confident buying.
          </p>
        </div>
      </div>
    </main>
  );
}
