import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Ebooks PLR | Renan Duarte",
  description:
    "Catálogo de ebooks e produtos PLR sobre renda extra, marketing digital, IA e negócios online.",
  path: "/ebooks",
});

export { default } from "./ebooks-client";
