import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Small Space Planner",
    short_name: "Space Planner",
    description: "Practical small-apartment layouts and planning tools.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f0e7",
    theme_color: "#17372f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
