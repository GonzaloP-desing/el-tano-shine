import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SizeGuideTable } from "@/components/SizeGuide";

const otherGuides = [
  {
    title: "Cadenas",
    text: "45 cm queda sobre la clavícula, 50 cm en el pecho alto y 55/60 cm sobre el esternón.",
  },
  {
    title: "Pulseras",
    text: "Medí el contorno de la muñeca y sumá 1,5 cm para un calce cómodo.",
  },
  {
    title: "Aritos",
    text: "15 mm es discreto para uso diario, 20 mm equilibrado y 30 mm de máxima presencia.",
  },
];

export const Route = createFileRoute("/guia-de-talles")({
  head: () => ({
    meta: [
      { title: "Guía de talles de anillos y cadenas | EL TANO JOYAS" },
      {
        name: "description",
        content:
          "Aprendé a medir el diámetro de tu dedo y elegir el talle correcto de anillo, además de los largos de cadenas y pulseras.",
      },
      { property: "og:title", content: "Guía de talles | EL TANO JOYAS" },
      {
        property: "og:description",
        content: "Tabla de talles de anillos con diámetro y perímetro, más medidas de cadenas y pulseras.",
      },
    ],
  }),
  component: GuiaPage,
});

function GuiaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <p className="eyebrow">Antes de comprar</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">
        Guía de <span className="text-gold-gradient">talles</span>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Elegir bien la medida es la diferencia entre una joya que usás todos los
        días y una que queda en el cajón. Seguí estos pasos y comprá con
        seguridad.
      </p>

      <div className="mt-12">
        <SizeGuideTable />
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {otherGuides.map((g) => (
          <article key={g.title} className="glow-hover surface-card rounded-lg p-6">
            <h2 className="text-lg">{g.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button variant="gold" asChild>
          <Link to="/categoria/$slug" params={{ slug: "anillos" }}>
            Ver anillos
          </Link>
        </Button>
        <Button variant="outlineGold" asChild>
          <Link to="/contacto">Consultar mi talle</Link>
        </Button>
      </div>
    </div>
  );
}
