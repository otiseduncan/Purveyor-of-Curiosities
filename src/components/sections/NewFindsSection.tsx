"use client";

import { useEffect, useMemo, useState } from "react";
import { featuredProducts } from "@/data/featuredProducts";

const STORE_URL = "https://purveyorofcuriosities.store";

export function NewFindsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleProducts = useMemo(() => {
    if (!featuredProducts.length) return [];

    return [0, 1, 2].map((offset) => {
      const index = (activeIndex + offset) % featuredProducts.length;
      return featuredProducts[index];
    });
  }, [activeIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredProducts.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? featuredProducts.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % featuredProducts.length);
  };

  return (
    <section id="shop" className="border-t border-brass/10 bg-ink/95 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-brass/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-brass">
              Featured Finds
            </div>

            <h2 className="font-serif text-4xl font-black leading-none text-cream md:text-5xl">
              A Rotating Look Inside the Store
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-sand">
              A preview of useful goods, strange finds, and one-of-one inventory.
              Full product details, availability, cart, and checkout are handled
              through the official Shopify store.
            </p>
          </div>

          <a
            href={`${STORE_URL}/collections/all`}
            className="inline-flex w-fit items-center justify-center rounded-full border border-brass/35 px-5 py-3 text-xs font-bold uppercase tracking-wider text-cream transition hover:bg-brass/10 hover:text-brass"
          >
            Shop All Finds →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {visibleProducts.map((product) => (
            <article
              key={`${product.title}-${product.collection}`}
              className="group overflow-hidden rounded-2xl border border-brass/15 bg-coffee shadow-[0_0_40px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-brass/40"
            >
              <a href={product.href} className="block">
                <div className="relative h-40 overflow-hidden border-b border-brass/10 bg-gradient-to-br from-emerald/40 via-ink to-coffee">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brass/25 bg-black/20 text-2xl text-brass">
                        ◈
                      </div>
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded-full bg-emerald/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                    {product.badge}
                  </span>
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brass">
                        {product.collection}
                      </p>
                      <h3 className="mt-2 text-lg font-black text-cream">
                        {product.title}
                      </h3>
                    </div>

                    <p className="shrink-0 text-sm font-black text-cream">
                      {product.price}
                    </p>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-sand">
                    {product.note}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-brass/25 px-3 py-1 text-[10px] font-bold text-brass">
                      {product.condition}
                    </span>
                    <span className="rounded-full border border-emerald/30 px-3 py-1 text-[10px] font-bold text-sand">
                      View in Store
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={goPrevious}
            className="rounded-full border border-brass/25 px-4 py-2 text-sm font-bold text-cream transition hover:bg-brass/10 hover:text-brass"
            aria-label="Previous featured products"
          >
            ←
          </button>

          <div className="flex gap-2">
            {featuredProducts.map((product, index) => (
              <button
                key={product.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex ? "bg-brass" : "bg-brass/25"
                }`}
                aria-label={`Show ${product.title}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="rounded-full border border-brass/25 px-4 py-2 text-sm font-bold text-cream transition hover:bg-brass/10 hover:text-brass"
            aria-label="Next featured products"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
