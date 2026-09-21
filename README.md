# El Tano Jewels

Actúa como un diseñador UI/UX senior y desarrollador web experto en e-commerce. Crea una tienda online completa, moderna y de alta gama para la marca "EL TANO JOYAS", especializada en joyas y accesorios con baño de oro 18k.

1. Identidad Visual y Estilo (Look & Feel):

- Paleta de colores: Estética dark luxury. Fondo principal negro profundo / carbón oscuro (#0B0B0B, #121212), con acentos y detalles metálicos en dorado elegante (#D4AF37, #C5A059), blanco puro para tipografía de lectura clara y toques en gris grafito para bordes y tarjetas.

- Tipografía: Elegante y moderna (serif sobrio para encabezados o sans-serif premium tipo Montserrat/Inter).

- Animaciones: Transiciones suaves en hover (efecto de resplandor dorado o zoom suave en imágenes).

2. Estructura y Navegación:

- Top Banner Promocional: Barra superior con avisos: "Envíos a todo el país | Cuotas sin interés | Baño de oro 18k de máxima durabilidad".

- Header / Navbar sticky:

  * Logo de la marca: "EL TANO JOYAS" (con tipografía destacada y monograma o detalle dorado).

  * Menú de navegación por categorías: Inicio, Cadenas, Pulseras, Anillos, Aritos, Guía de Talles, Contacto.

  * Buscador rápido de productos.

  * Ícono de Carrito de Compras interactivo con badge contador de productos.

- Hero Section:

  * Imagen/banner de alto impacto visual con joyas doradas sobre fondo oscuro.

  * Título: "Elegancia, presencia y distinción en Oro 18k".

  * Subtítulo: "Piezas exclusivas con terminaciones de alta gama para elevar tu estilo diario".

  * Botones CTA: "Ver Catálogo Completo" y "Lo Más Vendido".

- Selector de Categorías (Grid visual interactivo): Tarjetas destacadas para:

  1. Anillos (con link o botón integrado a "Guía de talles").

  2. Cadenas.

  3. Pulseras.

  4. Aritos.

- Catálogo de Productos y Filtros:

  * Filtro por categoría, orden por precio y destacados.

  * Product Cards interactivas: Imagen con efecto hover, nombre, badge "Baño Oro 18k", selector de talle o medida (imprescindible para anillos y cadenas), precio visible y botón "Añadir al Carrito" con feedback visual.

- Modal de Detalle de Producto: Al hacer clic en un producto, abrir un modal con galería de fotos, descripción detallada del material y baño, selector de cantidad/talle, botón de compra directa y botón secundario "Consultar por WhatsApp sobre este producto".

- Sección "Cuidado de tus Joyas": Tips breves para prolongar el brillo y cuidado del baño en oro 18k (evitar químicos directos, almacenamiento, limpieza).

- Guía de Talles: Modal o sección emergente con tabla visual para medir el diámetro de los dedos y elegir el número correcto de anillo.

3. Sistema de Carrito y Checkout:

- Slide-over Drawer / Modal de Carrito:

  * Lista de productos agregados con miniatura, título, talle seleccionado, cantidad modificable (+/-) y botón de eliminar.

  * Resumen de compra con subtotal, cálculo de envío y total final.

  * Botón principal de Checkout: Flujo de checkout simulado listo para conectar con pasarela de pago (tipo Mercado Pago / Stripe), con formulario para datos de envío, email y confirmación.

  * Opción secundaria en el carrito: "Finalizar o consultar pedido por WhatsApp" que genere un mensaje predefinido con el desglose de los productos agregados.

4. Atención al Cliente y Floating Actions:

- Botón flotante de WhatsApp en la esquina inferior derecha: Permanente, con icono oficial y mensaje directo preconfigurado tipo: "¡Hola El Tano Joyas! Tengo una consulta sobre...".

- Footer completo:

  * Enlaces a categorías, políticas de envío, garantía del baño de oro y cambios.

  * Métodos de pago aceptados y sellos de compra segura.

  * Redes sociales y formulario de suscripción / newsletter para descuentos.

5. Requisitos Técnicos:

- Totalmente responsive (diseño mobile-first optimizado para celulares).

- Componentes modulares, limpios y accesibles.

- Mock data completo con al menos 8 a 12 productos realistas divididos entre las 4 categorías (fotos de joyería dorada vía Unsplash, precios realistas y variantes de talles).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0b5b4968-683e-4104-940b-f2bd730f987b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
