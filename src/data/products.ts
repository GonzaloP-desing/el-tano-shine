import { catalogData, type CatalogItem } from "@/data/catalog";

export type CategorySlug = "cadenas" | "pulseras" | "anillos" | "aritos";

export type Product = {
  id: string;
  name: string;
  category: CategorySlug;
  subcategory: string;
  price: number;
  featured: boolean;
  description: string;
  material: string;
  sizeLabel: string;
  sizes: string[];
  images: string[];
};


export const categories: {
  slug: CategorySlug;
  name: string;
  blurb: string;
  image: string;
}[] = [
  {
    slug: "anillos",
    name: "Anillos",
    blurb: "Sellos, alianzas y solitarios con baño de oro 18k",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cadenas",
    name: "Cadenas",
    blurb: "Eslabones cubanos, barbados y venecianos",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "pulseras",
    name: "Pulseras",
    blurb: "Piezas de muñeca sobrias y de alto impacto",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "aritos",
    name: "Aritos",
    blurb: "Argollas, pasantes y abridores para uso diario",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
  },
];

const BATH =
  "Base de acero quirúrgico / latón con baño de oro 18k aplicado por galvanoplastia de triple capa. No se oxida ni pierde el color con el uso diario y es hipoalergénico.";

const slugByCategoria: Record<CatalogItem["categoria"], CategorySlug> = {
  Cadenas: "cadenas",
  Pulseras: "pulseras",
  Anillos: "anillos",
  Aritos: "aritos",
};

/** Los productos se generan automáticamente desde catalogData (src/data/catalog.ts). */
export const products: Product[] = catalogData.map((item) => ({
  id: item.id,
  name: item.nombre,
  category: slugByCategoria[item.categoria],
  subcategory: item.subcategoria,
  price: item.precio,
  featured: item.es_destacado,
  description: item.descripcion,
  material: BATH,
  sizeLabel: item.etiqueta_talle ?? "Talle",
  sizes: item.talles?.length ? item.talles : ["Único"],
  images: [item.url_imagen],
}));


export const WHATSAPP_NUMBER = "5491122334455";

export function formatPrice(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Precio anterior "tachado": ~25% por encima del precio actual (-20% OFF percibido). */
export function listPrice(product: Product) {
  return Math.round((product.price * 1.25) / 100) * 100;
}
