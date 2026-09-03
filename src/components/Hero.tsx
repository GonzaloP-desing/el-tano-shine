import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-joyas.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroImg}
        alt="Cadenas, anillos y aritos con baño de oro 18k sobre piedra negra"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-20 sm:min-h-[85vh]">
        <div className="max-w-2xl">
          <p className="eyebrow">El Tano Joyas · Alta gama</p>
          <h1 className="mt-5 text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Elegancia, presencia y distinción en{" "}
            <span className="text-gold-gradient">Oro 18k</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Piezas exclusivas con terminaciones de alta gama para elevar tu estilo
            diario.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="gold" size="xl" asChild>
              <Link to="/catalogo">Ver catálogo completo</Link>
            </Button>
            <Button variant="outlineGold" size="xl" asChild>
              <Link to="/catalogo" hash="catalogo">
                Lo más vendido
              </Link>
            </Button>
          </div>
          <div className="hairline mt-12 max-w-sm" aria-hidden />
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["Triple capa", "Baño de oro 18k"],
              ["3 cuotas", "Sin interés"],
              ["Envíos", "A todo el país"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-xl text-primary">{k}</dt>
                <dd className="text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
