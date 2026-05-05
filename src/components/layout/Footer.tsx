import { footerLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-bronze/50 bg-charcoal">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-serif text-2xl font-bold text-ivory">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-sand">{siteConfig.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-sand">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brass transition-colors">{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
