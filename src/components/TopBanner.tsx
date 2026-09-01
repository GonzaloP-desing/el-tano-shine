const items = [
  "Envíos a todo el país",
  "Cuotas sin interés",
  "Baño de oro 18k de máxima durabilidad",
];

export function TopBanner() {
  return (
    <div className="border-b border-border/60 bg-gold-gradient">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[0.65rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase sm:gap-4 sm:text-[0.7rem]">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="opacity-50">|</span>}
            <span className={i === 1 ? "hidden sm:inline" : undefined}>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
