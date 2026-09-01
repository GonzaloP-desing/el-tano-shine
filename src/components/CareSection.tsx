import { Droplets, Sparkles, Archive, SunDim } from "lucide-react";

const tips = [
  {
    icon: Droplets,
    title: "Evitá químicos directos",
    text: "Perfume, alcohol en gel, cloro y cremas atacan el baño. Colocate la joya siempre al final, cuando la piel ya está seca.",
  },
  {
    icon: SunDim,
    title: "Sacátelas en el agua",
    text: "Quitátelas para bañarte, entrenar o ir a la pileta y el mar. La transpiración y el cloro aceleran el desgaste.",
  },
  {
    icon: Sparkles,
    title: "Limpieza suave",
    text: "Pasá un paño de microfibra seco después de usarla. Nunca uses cepillos, esponjas abrasivas ni limpiaplata.",
  },
  {
    icon: Archive,
    title: "Guardado correcto",
    text: "Guardá cada pieza por separado en su bolsita de tela, en un lugar seco y sin humedad ni luz directa.",
  },
];

export function CareSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24" id="cuidados">
      <div className="max-w-2xl">
        <p className="eyebrow">Cuidado de tus joyas</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          El brillo dura si la <span className="text-gold-gradient">cuidás</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Nuestro baño de oro 18k es de triple capa y alta durabilidad. Con estos
          cuatro hábitos simples, tus piezas conservan el color y el reflejo
          original mucho más tiempo.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tips.map((tip) => (
          <article key={tip.title} className="glow-hover surface-card rounded-lg p-6">
            <tip.icon className="h-6 w-6 text-primary" aria-hidden />
            <h3 className="mt-4 text-lg">{tip.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
