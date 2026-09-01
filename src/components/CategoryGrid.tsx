import { Link } from "@tanstack/react-router";
import { Ruler } from "lucide-react";
import { categories } from "@/data/products";
import { SizeGuideDialog } from "@/components/SizeGuide";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24" id="categorias">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Colecciones</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Elegí por categoría</h2>
        </div>
        <div className="hairline hidden flex-1 sm:mb-3 sm:block" aria-hidden />
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="glow-hover group relative overflow-hidden rounded-lg border border-border"
          >
            <Link
              to="/categoria/$slug"
              params={{ slug: cat.slug }}
              className="block"
              aria-label={`Ver ${cat.name}`}
            >
              <div className="aspect-4/5 overflow-hidden">
                <img
                  src={cat.image}
                  alt={`Categoría ${cat.name} con baño de oro 18k`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-xl text-foreground">{cat.name}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{cat.blurb}</p>
              </div>
            </Link>
            {cat.slug === "anillos" && (
              <SizeGuideDialog>
                <button className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-background/80 px-3 py-1.5 text-[0.65rem] tracking-widest text-primary uppercase backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground">
                  <Ruler className="h-3 w-3" aria-hidden /> Talles
                </button>
              </SizeGuideDialog>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
