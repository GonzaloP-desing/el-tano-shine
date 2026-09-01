import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { ReactNode } from "react";

const rings = [
  { talle: "12", diametro: "15,7 mm", circ: "49,3 mm" },
  { talle: "14", diametro: "16,3 mm", circ: "51,2 mm" },
  { talle: "16", diametro: "17,0 mm", circ: "53,4 mm" },
  { talle: "18", diametro: "17,7 mm", circ: "55,6 mm" },
  { talle: "20", diametro: "18,4 mm", circ: "57,8 mm" },
  { talle: "22", diametro: "19,1 mm", circ: "60,0 mm" },
  { talle: "24", diametro: "19,8 mm", circ: "62,2 mm" },
];

const steps = [
  "Cortá una tira de papel de 1 cm de ancho y envolvela en la base del dedo.",
  "Marcá donde se cierra el círculo y medí el largo con una regla: ese es el perímetro.",
  "Buscá ese perímetro en la tabla y elegí el talle correspondiente.",
  "Si estás entre dos medidas, elegí siempre el talle mayor.",
];

export function SizeGuideTable() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <p className="eyebrow">Cómo medir</p>
        <ol className="mt-4 space-y-4">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-4">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary/50 font-display text-sm text-primary">
                {i + 1}
              </span>
              <span className="min-w-0 text-sm leading-relaxed text-muted-foreground">{s}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 border-l-2 border-primary/60 pl-4 text-xs leading-relaxed text-muted-foreground">
          Tip: medí al final del día, cuando los dedos están un poco más
          hinchados. Evitá medir con mucho frío.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gold-gradient text-primary-foreground">
              <th className="px-4 py-3 text-left text-xs tracking-widest uppercase">Talle</th>
              <th className="px-4 py-3 text-left text-xs tracking-widest uppercase">Diámetro</th>
              <th className="px-4 py-3 text-left text-xs tracking-widest uppercase">Perímetro</th>
            </tr>
          </thead>
          <tbody>
            {rings.map((r) => (
              <tr key={r.talle} className="border-t border-border/70 odd:bg-muted/40">
                <td className="px-4 py-2.5 font-display text-base text-primary">{r.talle}</td>
                <td className="px-4 py-2.5 text-muted-foreground">{r.diametro}</td>
                <td className="px-4 py-2.5 text-muted-foreground">{r.circ}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SizeGuideDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Guía de talles</DialogTitle>
        </DialogHeader>
        <SizeGuideTable />
      </DialogContent>
    </Dialog>
  );
}
