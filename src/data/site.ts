const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://purveyorofcuriosities.org";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");

const configuredStoreUrl =
  process.env.NEXT_PUBLIC_STORE_URL ?? "https://purveyorofcuriosities.store";

export const storeUrl = configuredStoreUrl.replace(/\/$/, "");

export const storeLinks = {
  home: storeUrl,
  collections: `${storeUrl}/collections/all`,
  cart: `${storeUrl}/cart`,
  shipping: `${storeUrl}/policies/shipping-policy`,
  returns: `${storeUrl}/policies/refund-policy`,
  privacy: `${storeUrl}/policies/privacy-policy`,
  contact: `${storeUrl}/pages/contact`,
};

export const siteConfig = {
  name: "Purveyor of Curiosities",
  url: siteUrl,
  tagline: "Curated finds. Useful goods. Unexpected treasures.",
  shortTagline: "Useful goods. Strange finds.",
  description:
    "A curated resale shop for useful goods, unusual finds, tools, home items, automotive finds, and one-of-one treasures recovered from cleanouts, estates, storage auctions, and turnovers.",
  locale: "en_US",
};

export const navLinks = [
  {
    label: "Shop",
    href: "https://purveyorofcuriosities.store/collections/all",
  },
  {
    label: "Categories",
    href: "/#categories",
  },
  {
    label: "How It Works",
    href: "/#process",
  },
  {
    label: "Claimed Archive",
    href: "/#archive",
  },
];

export const trustItems = [
  "One-of-one inventory",
  "Honest condition notes",
  "Clear photos",
  "Shipping or local pickup",
];

export const categories = [
  {
    title: "The Home Shelf",
    tag: "category:home-everyday",
    description:
      "Household goods, decor, sealed personal-care items, candles, kitchen finds, and useful everyday products.",
    icon: "âŒ‚",
  },
  {
    title: "The Garage Bin",
    tag: "category:garage-auto",
    description:
      "Automotive accessories, detailing supplies, trim pieces, manuals, and non-safety-critical garage finds.",
    icon: "â—†",
  },
  {
    title: "The Tool Crate",
    tag: "category:tools-hardware",
    description:
      "Hand tools, hardware, meters, toolboxes, fasteners, repair supplies, and practical workbench finds.",
    icon: "âš’",
  },
  {
    title: "The Oddity Cabinet",
    tag: "category:collectibles-oddities",
    description:
      "Vintage pieces, strange finds, conversation items, memorabilia, decor, and things you do not see every day.",
    icon: "âœ¦",
  },
  {
    title: "The Wire Box",
    tag: "category:electronics-gadgets",
    description:
      "Small electronics, chargers, cables, speakers, gadgets, and devices with clear testing notes.",
    icon: "âŒ",
  },
  {
    title: "The Local Pickup Corner",
    tag: "category:local-pickup",
    description:
      "Large, fragile, heavy, awkward, or low-margin finds available for local pickup only.",
    icon: "âŒ–",
  },
];

export const featuredProducts = [
  {
    name: "Vintage Metal Toolbox",
    category: "The Tool Crate",
    price: "$42",
    condition: "Good Used",
    status: "One-of-One",
    source: "Estate Cleanout",
    note: "Opens and closes properly with visible shop wear and character.",
  },
  {
    name: "Sealed Artisan Soap Bundle",
    category: "The Home Shelf",
    price: "$18",
    condition: "New / Sealed",
    status: "New Find",
    source: "Storage Auction",
    note: "Factory sealed, labeled, and listed only as a personal-care good with no health claims.",
  },
  {
    name: "OEM-Style Trim Piece",
    category: "The Garage Bin",
    price: "$29",
    condition: "Excellent Used",
    status: "Limited Quantity",
    source: "Garage Find",
    note: "Non-safety-critical automotive part with clear photos and visible condition notes.",
  },
];

export const processSteps = [
  {
    title: "We Find It",
    body: "Items come from estate cleanouts, storage auctions, rental turnovers, trash-out projects, and local recovery jobs.",
    icon: "01",
  },
  {
    title: "We Sort It",
    body: "Each item is reviewed, cleaned when appropriate, photographed, categorized, and assigned condition notes.",
    icon: "02",
  },
  {
    title: "We List It Clearly",
    body: "Listings include photos, condition grades, testing notes, included items, and shipping or pickup information.",
    icon: "03",
  },
  {
    title: "You Claim It",
    body: "Many products are one-of-one. If you see something you want, grab it before it disappears.",
    icon: "04",
  },
];

export const claimedArchiveItems = [
  "Claimed tool kit",
  "Vintage shelf decor",
  "Garage accessory",
  "Oddity display piece",
];

export const footerLinks = [
  {
    label: "Shipping Policy",
    href: "https://purveyorofcuriosities.store/policies/shipping-policy",
  },
  {
    label: "Returns",
    href: "https://purveyorofcuriosities.store/policies/refund-policy",
  },
  {
    label: "Privacy",
    href: "https://purveyorofcuriosities.store/policies/privacy-policy",
  },
  {
    label: "Contact",
    href: "https://purveyorofcuriosities.store/pages/contact",
  },
];
