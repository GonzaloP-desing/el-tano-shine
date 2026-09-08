import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Catalog } from "@/components/Catalog";
import { CareSection } from "@/components/CareSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bottega Oro | Joyas con baño de oro 18k" },
      {
        name: "description",
        content:
          "Cadenas, pulseras, anillos y aritos con baño de oro 18k de triple capa. Envíos a todo el país y cuotas sin interés.",
      },
      { property: "og:title", content: "Bottega Oro | Joyas con baño de oro 18k" },
      {
        property: "og:description",
        content:
          "Piezas exclusivas con terminaciones de alta gama para elevar tu estilo diario.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <Catalog eyebrow="Selección" title="Lo más vendido" />
      <CareSection />
    </>
  );
}
