import { CompassLogo } from "@/components/brand/CompassLogo";

const STORE_URL = "https://purveyorofcuriosities.store";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brass/10 bg-ink/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3">
          <CompassLogo className="h-12 w-12 shrink-0" />
          <div>
            <p className="font-serif text-xl font-black leading-none text-cream">
              Purveyor of Curiosities
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-brass">
              Useful Goods. Strange Finds.
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-bold text-sand md:flex">
          <a href={STORE_URL} className="transition hover:text-brass">
            Shop
          </a>
          <a href="/#categories" className="transition hover:text-brass">
            Categories
          </a>
          <a href="/#process" className="transition hover:text-brass">
            How It Works
          </a>
          <a href="/#archive" className="transition hover:text-brass">
            Claimed Archive
          </a>
        </nav>

        <a
          href={`${STORE_URL}/cart`}
          className="rounded-full border border-brass/35 px-5 py-2 text-xs font-bold text-cream transition hover:bg-brass/10 hover:text-brass"
        >
          Shopify Cart
        </a>
      </div>
    </header>
  );
}
