import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Catalog } from "@/components/Catalog";
import { CareSection } from "@/components/CareSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EL TANO JOYAS | Joyas con baño de oro 18k" },
      {
        name: "description",
        content:
          "Cadenas, pulseras, anillos y aritos con baño de oro 18k de triple capa. Envíos a todo el país y cuotas sin interés.",
      },
      { property: "og:title", content: "EL TANO JOYAS | Joyas con baño de oro 18k" },
      {
        property: "og:description",
        content:
          "Piezas exclusivas con terminaciones de alta gama para elevar tu estilo diario.",
      },
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
