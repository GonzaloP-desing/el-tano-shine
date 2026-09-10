import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, ShieldCheck, Truck, BadgeCheck, RefreshCw } from "lucide-react";
import { categories, waLink } from "@/data/products";

const policies = [
  { icon: Truck, title: "Envíos", text: "A todo el país en 3 a 7 días hábiles. Gratis desde $90.000." },
  { icon: BadgeCheck, title: "Garantía del baño", text: "Garantía de 3 meses en el baño de oro 18k." },
  { icon: RefreshCw, title: "Cambios", text: "Cambios sin cargo dentro de los 15 días de recibido." },
  { icon: ShieldCheck, title: "Compra segura", text: "Pagos protegidos y datos encriptados." },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {policies.map((p) => (
            <div key={p.title} className="flex gap-3">
              <p.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div className="min-w-0">
                <h3 className="text-base">{p.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hairline my-12" aria-hidden />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1.3fr]">
          <div>
            <p className="font-display text-2xl tracking-[0.14em]">BOTTEGA ORO</p>
            <p className="text-[0.6rem] tracking-[0.42em] text-primary">
              ORO 18K · ARGENTINA
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Joyas y accesorios con baño de oro 18k de triple capa. Terminaciones
              de alta gama, pensadas para durar y para usarse todos los días.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={waLink("¡Hola Bottega Oro! Tengo una consulta sobre...")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <span className="font-display text-sm">Wa</span>
              </a>
            </div>
          </div>

          <nav aria-label="Categorías">
            <p className="eyebrow">Categorías</p>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/categoria/$slug"
                    params={{ slug: c.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/catalogo"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Catálogo completo
                </Link>
              </li>
              <li>
                <Link
                  to="/guia-de-talles"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Guía de talles
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Contacto y políticas
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Medios de pago</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Visa", "Mastercard", "Amex", "Mercado Pago", "Transferencia"].map((m) => (
                <span
                  key={m}
                  className="rounded-sm border border-border px-2.5 py-1 text-[0.65rem] tracking-widest text-muted-foreground uppercase"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-[0.7rem] text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Bottega Oro. Todos los derechos reservados.</p>
          <p>Sitio protegido · Compra 100% segura</p>
        </div>
      </div>
    </footer>
  );
}
