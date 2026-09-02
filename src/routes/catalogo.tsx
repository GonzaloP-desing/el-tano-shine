import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Catalog } from "@/components/Catalog";
import { CareSection } from "@/components/CareSection";

const searchSchema = z.object({ q: z.string().optional() });

export const Route = createFileRoute("/catalogo")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Catálogo completo | EL TANO JOYAS" },
      {
        name: "description",
        content:
          "Explorá todas las joyas con baño de oro 18k: cadenas, pulseras, anillos y aritos. Filtrá por categoría y precio.",
      },
      { property: "og:title", content: "Catálogo completo | EL TANO JOYAS" },
      {
        property: "og:description",
        content: "Todas nuestras piezas con baño de oro 18k de triple capa, en un solo lugar.",
      },
    ],
  }),
  component: CatalogoPage,
});

function CatalogoPage() {
  const { q } = Route.useSearch();

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-12">
        <h1 className="text-4xl sm:text-5xl">
          Catálogo <span className="text-gold-gradient">El Tano</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {q
            ? `Resultados para "${q}".`
            : "Todas nuestras piezas con baño de oro 18k de triple capa, listas para enviar a todo el país."}
        </p>
      </div>
      <Catalog eyebrow="Piezas disponibles" title="Todas las joyas" query={q ?? ""} />
      <CareSection />
    </>
  );
}
