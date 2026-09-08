import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { waLink } from "@/data/products";

const info = [
  { icon: MessageCircle, title: "WhatsApp", text: "+54 9 11 2233-4455" },
  { icon: Mail, title: "Email", text: "hola@bottegaoro.com.ar" },
  { icon: Clock, title: "Atención", text: "Lunes a sábados de 10 a 19 h" },
  { icon: MapPin, title: "Envíos", text: "A todo el país por correo y moto en CABA" },
];

const policies = [
  {
    title: "Política de envíos",
    text: "Despachamos en 24/48 h hábiles. Correo Argentino y Andreani a todo el país (3 a 7 días hábiles). Envío gratis en compras desde $90.000. Moto en CABA y GBA en el día.",
  },
  {
    title: "Garantía del baño de oro",
    text: "Garantía de 3 meses en el baño de oro 18k siguiendo las indicaciones de cuidado. Si el baño falla por defecto de fabricación, reponemos la pieza sin cargo.",
  },
  {
    title: "Cambios y devoluciones",
    text: "Cambios sin cargo dentro de los 15 días de recibido el pedido, con la pieza sin uso y en su packaging original. El talle equivocado de un anillo se cambia sin costo la primera vez.",
  },
];

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto, envíos y garantía | Bottega Oro" },
      {
        name: "description",
        content:
          "Escribinos por WhatsApp o email. Conocé nuestras políticas de envío, la garantía del baño de oro 18k y cómo hacer cambios.",
      },
      { property: "og:title", content: "Contacto | Bottega Oro" },
      {
        property: "og:description",
        content: "Atención personalizada, envíos a todo el país y garantía sobre el baño de oro 18k.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <p className="eyebrow">Estamos para ayudarte</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">
        Hablemos de tu <span className="text-gold-gradient">próxima joya</span>
      </h1>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {info.map((i) => (
              <div key={i.title} className="surface-card rounded-lg p-5">
                <i.icon className="h-5 w-5 text-primary" aria-hidden />
                <h2 className="mt-3 text-base">{i.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{i.text}</p>
              </div>
            ))}
          </div>

          <Button variant="gold" className="mt-6 w-full sm:w-auto" asChild>
            <a
              href={waLink("¡Hola Bottega Oro! Tengo una consulta sobre...")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribinos por WhatsApp
            </a>
          </Button>

          <div className="mt-12 space-y-6">
            {policies.map((p) => (
              <section key={p.title}>
                <h2 className="text-xl">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </section>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Mensaje enviado", {
              description: "Te respondemos dentro de las próximas 24 h hábiles.",
            });
            (e.target as HTMLFormElement).reset();
          }}
          className="surface-card h-fit rounded-lg p-6"
        >
          <h2 className="font-display text-2xl">Envianos tu consulta</h2>
          <div className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="c-nombre">Nombre</Label>
              <Input id="c-nombre" required placeholder="Tu nombre" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-email">Email</Label>
              <Input id="c-email" type="email" required placeholder="tu@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-msg">Mensaje</Label>
              <Textarea
                id="c-msg"
                required
                rows={6}
                placeholder="Contanos qué pieza te interesa o qué duda tenés."
              />
            </div>
            <Button type="submit" variant="gold" className="w-full">
              Enviar consulta
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
