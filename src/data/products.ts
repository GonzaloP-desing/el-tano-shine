export type CategorySlug = "cadenas" | "pulseras" | "anillos" | "aritos";

export type Product = {
  id: string;
  name: string;
  category: CategorySlug;
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

export const products: Product[] = [
  {
    id: "cad-cubana-8",
    name: "Cadena Cubana 8mm",
    category: "cadenas",
    price: 62900,
    featured: true,
    description:
      "Eslabón cubano macizo de 8mm con cierre mosquetón reforzado. Presencia total, terminación pulida espejo.",
    material: BATH,
    sizeLabel: "Largo",
    sizes: ["45 cm", "50 cm", "55 cm", "60 cm"],
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "cad-barbada-5",
    name: "Cadena Barbada 5mm",
    category: "cadenas",
    price: 48500,
    featured: false,
    description:
      "Clásico eslabón barbado de perfil plano, liviano y cómodo. Ideal para uso diario o combinada en capas.",
    material: BATH,
    sizeLabel: "Largo",
    sizes: ["45 cm", "50 cm", "55 cm"],
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "cad-veneciana-3",
    name: "Cadena Veneciana 3mm",
    category: "cadenas",
    price: 39900,
    featured: true,
    description:
      "Eslabón veneciano de trama cerrada y brillo continuo. Sobria, elegante y resistente.",
    material: BATH,
    sizeLabel: "Largo",
    sizes: ["40 cm", "45 cm", "50 cm"],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "puls-cubana-6",
    name: "Pulsera Cubana 6mm",
    category: "pulseras",
    price: 41900,
    featured: true,
    description:
      "Versión de muñeca del eslabón cubano. Cierre doble seguro para que no se abra sola.",
    material: BATH,
    sizeLabel: "Largo",
    sizes: ["18 cm", "19 cm", "20 cm", "21 cm"],
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "puls-rigida",
    name: "Pulsera Rígida Lisa",
    category: "pulseras",
    price: 35900,
    featured: false,
    description:
      "Brazalete rígido de superficie lisa y curva perfecta. Minimalismo puro con máximo reflejo.",
    material: BATH,
    sizeLabel: "Talle",
    sizes: ["S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "puls-cordon",
    name: "Pulsera Cordón Trenzado",
    category: "pulseras",
    price: 28900,
    featured: false,
    description:
      "Trenzado fino con terminales doradas y ajuste regulable. Liviana y perfecta para combinar.",
    material: BATH,
    sizeLabel: "Talle",
    sizes: ["Único regulable"],
    images: [
      "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ani-sello",
    name: "Anillo Sello Cuadrado",
    category: "anillos",
    price: 33900,
    featured: true,
    description:
      "Anillo sello de frente cuadrado pulido, con hombros trabajados. Una pieza con carácter.",
    material: BATH,
    sizeLabel: "Talle",
    sizes: ["16", "18", "20", "22", "24"],
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ani-alianza",
    name: "Alianza Martillada",
    category: "anillos",
    price: 24900,
    featured: false,
    description:
      "Alianza de 4mm con textura martillada a mano que multiplica los destellos de luz.",
    material: BATH,
    sizeLabel: "Talle",
    sizes: ["14", "16", "18", "20", "22"],
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ani-solitario",
    name: "Anillo Solitario Cristal",
    category: "anillos",
    price: 37900,
    featured: true,
    description:
      "Solitario con cristal talla brillante engarzado en garras. Delicado y de alto impacto.",
    material: BATH,
    sizeLabel: "Talle",
    sizes: ["14", "16", "18", "20"],
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ari-argolla-20",
    name: "Argollas 20mm",
    category: "aritos",
    price: 22900,
    featured: true,
    description:
      "Argollas de tubo hueco de 20mm: presencia visual sin peso en la oreja. Cierre a presión.",
    material: BATH,
    sizeLabel: "Medida",
    sizes: ["15 mm", "20 mm", "30 mm"],
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ari-abridor",
    name: "Abridores Punto de Luz",
    category: "aritos",
    price: 18900,
    featured: false,
    description:
      "Abridores mínimos con cristal central. El aro de todos los días, no se sienten puestos.",
    material: BATH,
    sizeLabel: "Medida",
    sizes: ["3 mm", "5 mm"],
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "ari-pasante",
    name: "Aritos Pasantes Gota",
    category: "aritos",
    price: 26900,
    featured: false,
    description:
      "Pasantes con gota pulida en movimiento. Elegantes para la noche, cómodos para el día.",
    material: BATH,
    sizeLabel: "Medida",
    sizes: ["Único"],
    images: [
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

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
