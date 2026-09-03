const items = [
  "ENVÍOS A TODO EL PAÍS",
  "10% DE DESCUENTO EN TU COMPRA",
  "3 CUOTAS SIN INTERÉS",
  "CERTIFICADO ORO 18K Y GARANTÍA DE 3 MESES",
];

function TickerItems() {
  return (
    <>
      {items.map((item) => (
        <span key={item} className="mx-6 flex items-center gap-6 whitespace-nowrap">
          <span aria-hidden className="text-primary">✦</span>
          {item}
        </span>
      ))}
    </>
  );
}

export function TopBanner() {
  return (
    <div
      className="overflow-hidden border-b border-border/60 bg-card"
      role="marquee"
      aria-label="Envíos a todo el país, 10% de descuento, 3 cuotas sin interés, garantía de 3 meses"
    >
      <div className="marquee-track flex w-max items-center py-2 text-[0.65rem] font-semibold tracking-[0.18em] text-foreground/90 uppercase">
        <TickerItems />
        <TickerItems />
      </div>
    </div>
  );
}
