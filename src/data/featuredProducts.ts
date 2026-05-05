export type FeaturedProduct = {
  title: string;
  collection: string;
  price: string;
  badge: string;
  condition: string;
  note: string;
  href: string;
  image?: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    title: "Vintage Metal Toolbox",
    collection: "The Tool Crate",
    price: "$42",
    badge: "Featured Find",
    condition: "Good Used",
    note: "One-of-one find with honest condition notes and practical resale value.",
    href: "https://purveyorofcuriosities.store/collections/all",
  },
  {
    title: "Sealed Artisan Soap Bundle",
    collection: "The Home Shelf",
    price: "$18",
    badge: "New Find",
    condition: "New / Sealed",
    note: "Factory sealed, labeled, and listed with clear category placement.",
    href: "https://purveyorofcuriosities.store/collections/all",
  },
  {
    title: "OEM-Style Trim Piece",
    collection: "The Garage Bin",
    price: "$29",
    badge: "Limited Quantity",
    condition: "Excellent Used",
    note: "Non-safety-critical automotive part with clear photos and visible condition notes.",
    href: "https://purveyorofcuriosities.store/collections/all",
  },
  {
    title: "Oddity Display Piece",
    collection: "The Oddity Cabinet",
    price: "$24",
    badge: "Curious Find",
    condition: "Display Ready",
    note: "Unusual decor and conversation-piece inventory for collectors and curiosity seekers.",
    href: "https://purveyorofcuriosities.store/collections/all",
  },
  {
    title: "Garage Accessory Lot",
    collection: "The Garage Bin",
    price: "$35",
    badge: "Small Batch",
    condition: "Used / Sorted",
    note: "Useful garage and workshop goods recovered, sorted, and ready for a second life.",
    href: "https://purveyorofcuriosities.store/collections/all",
  },
  {
    title: "Local Pickup Find",
    collection: "The Local Pickup Corner",
    price: "$50",
    badge: "Pickup Only",
    condition: "As Listed",
    note: "Larger or fragile item reserved for local pickup and direct handoff.",
    href: "https://purveyorofcuriosities.store/collections/all",
  },
];
