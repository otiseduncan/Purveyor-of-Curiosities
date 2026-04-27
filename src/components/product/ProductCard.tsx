import { Badge } from "@/components/ui/Badge";
import { featuredProducts } from "@/data/site";

type Product = (typeof featuredProducts)[number];

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-bronze/60 bg-espresso shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-gold/60">
      <div className="relative h-60 overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(196,154,74,0.35),transparent_35%),linear-gradient(135deg,#2F5D50,#1C1814_58%,#11100E)]">
        <div className="absolute inset-5 rounded-[1.5rem] border border-ivory/10 bg-black/10" />

        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/15 text-5xl text-ivory/40">
          ◈
        </div>

        <div className="absolute left-5 top-5">
          <Badge tone="green">{product.status}</Badge>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {product.category}
          </p>

          <div className="mt-2 flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-ivory">{product.name}</h3>
            <p className="text-xl font-black text-ivory">{product.price}</p>
          </div>
        </div>

        <p className="text-sm leading-6 text-sand">{product.note}</p>

        <div className="flex flex-wrap gap-2">
          <Badge>{product.condition}</Badge>
          <Badge tone="copper">{product.source}</Badge>
        </div>
      </div>
    </article>
  );
}