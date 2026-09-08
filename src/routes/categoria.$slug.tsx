import { createFileRoute, notFound } from "@tanstack/react-router";
import { Catalog } from "@/components/Catalog";
import { SizeGuideDialog } from "@/components/SizeGuide";
import { Button } from "@/components/ui/button";
import { categories, type CategorySlug } from "@/data/products";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Categoría no encontrada | Bottega Oro" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.category.name} con baño de oro 18k | Bottega Oro`;
    return {
      meta: [
        { title },
        { name: "description", content: `${loaderData.category.blurb}. Envíos a todo el país y cuotas sin interés.` },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.blurb },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={category.image}
          alt={`${category.name} con baño de oro 18k`}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <p className="eyebrow">Colección</p>
          <h1 className="mt-3 text-4xl sm:text-6xl">
            <span className="text-gold-gradient">{category.name}</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {category.blurb}. Baño de oro 18k de triple capa, hipoalergénico y de
            máxima durabilidad.
          </p>
          {category.slug === ("anillos" satisfies CategorySlug) && (
            <SizeGuideDialog>
              <Button variant="outlineGold" className="mt-6">
                Ver guía de talles
              </Button>
            </SizeGuideDialog>
          )}
        </div>
      </section>

      <Catalog
        initialCategory={category.slug}
        lockCategory
        eyebrow={`${category.name} disponibles`}
        title={`Todos nuestros ${category.name.toLowerCase()}`}
      />
    </>
  );
}
