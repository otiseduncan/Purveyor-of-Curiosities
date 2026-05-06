import { CompassLogo } from "@/components/brand/CompassLogo";

const STORE_URL = "https://purveyorofcuriosities.store";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/10 bg-charcoal/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3">
          <CompassLogo className="h-12 w-12 shrink-0" />
          <div>
            <p className="font-serif text-xl font-black leading-none text-ivory">
              Purveyor of Curiosities
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
              Useful Goods. Strange Finds.
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-bold text-sand md:flex">
          <a href={STORE_URL} className="transition hover:text-gold">
            Shop
          </a>
          <a href="/#categories" className="transition hover:text-gold">
            Categories
          </a>
          <a href="/#process" className="transition hover:text-gold">
            How It Works
          </a>
          <a href="/#archive" className="transition hover:text-gold">
            Claimed Archive
          </a>
        </nav>

        <a
          href={`${STORE_URL}/cart`}
          className="rounded-full border border-gold/35 px-5 py-2 text-xs font-bold text-ivory transition hover:bg-gold/10 hover:text-gold"
        >
          Shopify Cart
        </a>
      </div>
    </header>
  );
}
