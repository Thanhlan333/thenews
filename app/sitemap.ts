import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://muaque.vn", lastModified: new Date() },
    { url: "https://muaque.vn/gia-nong-san-hom-nay", lastModified: new Date() },
    { url: "https://muaque.vn/gia-nong-san-hom-nay/tp-hcm", lastModified: new Date() },
    { url: "https://muaque.vn/gia-nong-san-hom-nay/binh-duong", lastModified: new Date() },
  ];
}
