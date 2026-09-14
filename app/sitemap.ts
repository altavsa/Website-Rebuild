import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/business",
    "/residential",
    "/about",
    "/services",
    "/services/cctv",
    "/services/biometrics",
    "/services/av",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/business" || path === "/residential"
          ? 0.9
          : path.startsWith("/services/")
            ? 0.8
            : 0.7,
  }));
}
