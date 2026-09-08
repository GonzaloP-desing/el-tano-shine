/**
 * BASE DE DATOS LOCAL DEL CATÁLOGO
 * ---------------------------------
 * Editá SOLO este archivo para agregar, actualizar o eliminar productos.
 * No hace falta tocar ningún componente visual.
 *
 * Propiedades de cada producto:
 *  - id            : identificador único (texto)
 *  - nombre        : nombre visible del producto
 *  - descripcion   : texto corto que se muestra en el detalle
 *  - precio        : número (sin puntos ni signo $)
 *  - categoria     : "Anillos" | "Cadenas" | "Pulseras" | "Aritos"
 *  - subcategoria  : "Baño de Oro" | "Acero Quirúrgico" (o la que quieras)
 *  - url_imagen    : URL de la foto principal
 *  - es_destacado  : true / false
 *  - etiqueta_talle: título del selector (ej. "Talle", "Largo", "Medida")
 *  - talles        : opciones disponibles
 */

export type Categoria = "Anillos" | "Cadenas" | "Pulseras" | "Aritos";

export type CatalogItem = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: Categoria;
  subcategoria: string;
  url_imagen: string;
  es_destacado: boolean;
  etiqueta_talle?: string;
  talles?: string[];
};

const IMG = (n: number) =>
  `https://placehold.co/1000x1000/141414/c5a059?text=Producto+${n}`;

export const catalogData: CatalogItem[] = [
  {
    id: "producto-1",
    nombre: "Cadena Cubana 8mm",
    descripcion:
      "Descripción de prueba: eslabón cubano macizo con cierre mosquetón reforzado y terminación pulida espejo.",
    precio: 62900,
    categoria: "Cadenas",
    subcategoria: "Baño de Oro",
    url_imagen: IMG(1),
    es_destacado: true,
    etiqueta_talle: "Largo",
    talles: ["45 cm", "50 cm", "55 cm", "60 cm"],
  },
  {
    id: "producto-2",
    nombre: "Cadena Veneciana 3mm",
    descripcion:
      "Descripción de prueba: trama cerrada de brillo continuo, sobria y resistente para uso diario.",
    precio: 39900,
    categoria: "Cadenas",
    subcategoria: "Acero Quirúrgico",
    url_imagen: IMG(2),
    es_destacado: false,
    etiqueta_talle: "Largo",
    talles: ["40 cm", "45 cm", "50 cm"],
  },
  {
    id: "producto-3",
    nombre: "Pulsera Cubana 6mm",
    descripcion:
      "Descripción de prueba: versión de muñeca del eslabón cubano, con cierre doble seguro.",
    precio: 41900,
    categoria: "Pulseras",
    subcategoria: "Baño de Oro",
    url_imagen: IMG(3),
    es_destacado: true,
    etiqueta_talle: "Largo",
    talles: ["18 cm", "19 cm", "20 cm", "21 cm"],
  },
  {
    id: "producto-4",
    nombre: "Anillo Sello Cuadrado",
    descripcion:
      "Descripción de prueba: frente cuadrado pulido con hombros trabajados, una pieza con carácter.",
    precio: 33900,
    categoria: "Anillos",
    subcategoria: "Baño de Oro",
    url_imagen: IMG(4),
    es_destacado: true,
    etiqueta_talle: "Talle",
    talles: ["16", "18", "20", "22", "24"],
  },
  {
    id: "producto-5",
    nombre: "Alianza Martillada",
    descripcion:
      "Descripción de prueba: alianza de 4mm con textura martillada que multiplica los destellos.",
    precio: 24900,
    categoria: "Anillos",
    subcategoria: "Acero Quirúrgico",
    url_imagen: IMG(5),
    es_destacado: false,
    etiqueta_talle: "Talle",
    talles: ["14", "16", "18", "20", "22"],
  },
  {
    id: "producto-6",
    nombre: "Argollas 20mm",
    descripcion:
      "Descripción de prueba: tubo hueco con presencia visual sin peso en la oreja, cierre a presión.",
    precio: 22900,
    categoria: "Aritos",
    subcategoria: "Baño de Oro",
    url_imagen: IMG(6),
    es_destacado: true,
    etiqueta_talle: "Medida",
    talles: ["15 mm", "20 mm", "30 mm"],
  },
];
