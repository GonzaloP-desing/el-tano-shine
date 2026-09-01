import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { categories, products, type CategorySlug, type Product } from "@/data/products";

type Sort = "destacados" | "precio-asc" | "precio-desc";

const sorts: { value: Sort; label: string }[] = [
  { value: "destacados", label: "Destacados" },
  { value: "precio-asc", label: "Menor precio" },
  { value: "precio-desc", label: "Mayor precio" },
];

export function Catalog({
  initialCategory = "todas",
  lockCategory = false,
  title = "Catálogo completo",
  eyebrow = "Piezas disponibles",
  query = "",
}: {
  initialCategory?: CategorySlug | "todas";
  lockCategory?: boolean;
  title?: string;
  eyebrow?: string;
  query?: string;
}) {
  const [category, setCategory] = useState<CategorySlug | "todas">(initialCategory);
  const [sort, setSort] = useState<Sort>("destacados");
  const [selected, setSelected] = useState<Product | null>(null);

  const effectiveCategory = lockCategory ? initialCategory : category;

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = products.filter(
      (p) =>
        (effectiveCategory === "todas" || p.category === effectiveCategory) &&
        (q === "" || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)),
    );
    return [...filtered].sort((a, b) => {
      if (sort === "precio-asc") return a.price - b.price;
      if (sort === "precio-desc") return b.price - a.price;
      return Number(b.featured) - Number(a.featured) || a.price - b.price;
    });
  }, [effectiveCategory, sort, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20" id="catalogo">
      <div className="flex flex-col gap-6">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
        </div>

        <div className="flex flex-col gap-4 border-y border-border py-4 lg:flex-row lg:items-center lg:justify-between">
          {!lockCategory && (
            <div className="flex flex-wrap gap-2">
              {(["todas", ...categories.map((c) => c.slug)] as const).map((slug) => (
                <button
                  key={slug}
                  onClick={() => setCategory(slug)}
                  aria-pressed={category === slug}
                  className={`rounded-full border px-4 py-1.5 text-xs tracking-widest uppercase transition-colors ${
                    category === slug
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
                  }`}
                >
                  {slug === "todas"
                    ? "Todas"
                    : categories.find((c) => c.slug === slug)!.name}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            <label
              htmlFor="orden"
              className="shrink-0 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase"
            >
              Ordenar
            </label>
            <select
              id="orden"
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
            >
              {sorts.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {list.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No encontramos piezas con esa búsqueda.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={setSelected} />
          ))}
        </div>
      )}

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
