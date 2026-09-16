import { queryOptions } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { CategorySlug, Product } from "@/data/products";

const BATH =
  "Base de acero quirúrgico / latón con baño de oro 18k aplicado por galvanoplastia de triple capa. No se oxida ni pierde el color con el uso diario y es hipoalergénico.";

const slugByCategoria: Record<string, CategorySlug> = {
  Cadenas: "cadenas",
  Pulseras: "pulseras",
  Anillos: "anillos",
  Aritos: "aritos",
};

function toSlug(categoria: string): CategorySlug {
  return (
    slugByCategoria[categoria] ??
    (categoria.toLowerCase().trim() as CategorySlug)
  );
}

/** Trae los productos disponibles desde la tabla `productos`. */
export async function fetchProductos(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("productos")
    .select(
      "id, nombre, descripcion, precio, categoria, subcategoria, url_imagen, disponible, es_destacado, etiqueta_talle, talles, created_at",
    )
    .eq("disponible", true)
    .order("created_at", { ascending: true });

  if (error) throw error;

  return (data ?? []).map((row) => ({
    id: row.id,
    name: row.nombre,
    category: toSlug(row.categoria),
    subcategory: row.subcategoria ?? "Baño de Oro",
    price: Number(row.precio),
    featured: Boolean(row.es_destacado),
    description: row.descripcion ?? "",
    material: BATH,
    sizeLabel: row.etiqueta_talle ?? "Talle",
    sizes: row.talles?.length ? row.talles : ["Único"],
    images: [row.url_imagen],
  }));
}

export const productosQuery = queryOptions({
  queryKey: ["productos"],
  queryFn: fetchProductos,
  staleTime: 60_000,
});
