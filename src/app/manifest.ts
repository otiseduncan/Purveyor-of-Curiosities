import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Curiosities",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#11100e",
    theme_color: "#11100e",
  };
}
