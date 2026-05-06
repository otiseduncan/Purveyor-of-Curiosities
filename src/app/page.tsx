import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { NewFindsSection } from "@/components/sections/NewFindsSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OneAvailableSection } from "@/components/sections/OneAvailableSection";
import { ClaimedArchiveSection } from "@/components/sections/ClaimedArchiveSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { featuredProducts, siteConfig } from "@/data/site";

export default function Home() {
  const itemListElements = featuredProducts.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      category: product.category,
      description: product.note,
      offers: {
        "@type": "Offer",
        price: Number(product.price.replace(/[^\d.]/g, "")),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${siteConfig.url}/#shop`,
      },
    },
  }));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "OnlineStore",
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      priceRange: "$$",
      currenciesAccepted: "USD",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Featured Products",
      itemListElement: itemListElements,
    },
  ];

  return (
    <main className="min-h-screen bg-charcoal text-ivory">
      <JsonLd data={structuredData} />
      <div className="pointer-events-none fixed inset-0 opacity-50 [background-image:radial-gradient(circle_at_15%_15%,rgba(196,154,74,0.17),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(47,93,80,0.2),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(164,90,58,0.12),transparent_30%)]" />

      <Header />
      <HeroSection />
      <NewFindsSection />
      <CategoriesSection />
      <ProcessSection />
      <OneAvailableSection />
      <ClaimedArchiveSection />
      <Footer />
    </main>
  );
}