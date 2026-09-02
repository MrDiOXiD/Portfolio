import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: profile.name,
    description: profile.heroSubtext,
    start_url: "/",
    display: "standalone",
    background_color: "#071416",
    theme_color: "#071416",
    lang: "fa",
    dir: "rtl",
    icons: [
      { src: "/icon.webp", sizes: "64x64", type: "image/webp" },
      { src: "/apple-icon.webp", sizes: "180x180", type: "image/webp" },
    ],
  };
}
