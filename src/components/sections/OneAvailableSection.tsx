const STORE_URL = "https://purveyorofcuriosities.store";

export function OneAvailableSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-bronze/60 bg-[linear-gradient(135deg,#2F5D50,#1C1814_55%,#11100E)] p-8 shadow-2xl shadow-black/30 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-bronze/70 bg-espresso/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                One Available
              </div>

              <h2 className="font-serif text-4xl font-black text-ivory md:text-5xl">
                When It's Gone, It's Gone.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-ivory/85">
                Most inventory is recovered in small quantities or as single finds.
                We do not always know what will come in next, and we usually cannot
                restock the same item.
              </p>
            </div>

            <div className="rounded-[2rem] border border-ivory/15 bg-charcoal/55 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                Store Feature
              </p>

              <p className="mt-4 text-2xl font-bold text-ivory">
                Shopify inventory, product photos, condition notes, cart, and checkout.
              </p>

              <div className="mt-6">
                <a
                  href={`${STORE_URL}/collections/all`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-gold px-5 py-3 text-sm font-bold text-charcoal transition hover:bg-[#D8AF5A]"
                >
                  Browse One-of-One Finds
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
