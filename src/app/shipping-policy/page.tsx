import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Shipping guidance for Purveyor of Curiosities, including local pickup notes and item-level shipping availability.",
  alternates: {
    canonical: "/shipping-policy",
  },
};

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-charcoal text-ivory">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <a href="/" className="text-sm font-semibold text-gold transition hover:text-ivory">
          ← Back to home
        </a>

        <h1 className="mt-6 font-serif text-4xl font-black md:text-5xl">Shipping Policy</h1>

        <div className="mt-8 space-y-6 rounded-[2rem] border border-bronze/60 bg-espresso/75 p-8 text-sand">
          <p>
            Shipping availability varies by item. Each listing includes specific notes about whether the item can be shipped, local delivery is possible, or pickup is required.
          </p>
          <p>
            Some finds are marked as local pickup only due to size, fragility, weight, or handling risk. Large furniture, heavy tool sets, and fragile decor may not be eligible for standard parcel shipping.
          </p>
          <p>
            Buyers should review listing notes before checkout and contact us with questions about packaging, shipping timelines, or pickup windows.
          </p>
          <p>
            {siteConfig.name} reserves the right to confirm the safest fulfillment method when an item requires special handling.
          </p>
        </div>
      </div>
    </main>
  );
}
