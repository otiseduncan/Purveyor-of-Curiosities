import { navLinks, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="relative z-10 border-b border-bronze/50 bg-charcoal/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="https://purveyorofcuriosities.store" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/70 bg-espresso text-2xl text-gold shadow-lg shadow-black/20">
            â—‰
          </div>

          <div>
            <p className="font-serif text-xl font-bold tracking-wide text-ivory">
              {siteConfig.name}
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-sand">
              {siteConfig.shortTagline}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-sand md:flex">
          {navLinks.map((link) => (
            <a key={link.label} className="hover:text-ivory" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className="hidden rounded-full border border-bronze px-4 py-2 text-sm font-bold text-ivory transition hover:border-gold md:inline-flex">
          Shopify Cart
        </button>
      </div>
    </header>
  );
}
