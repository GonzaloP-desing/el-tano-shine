import { useState } from "react";
import { CheckCircle2, CreditCard, Lock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/cart";

export function CheckoutDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { lines, subtotal, shipping, total, clear } = useCart();
  const [status, setStatus] = useState<"form" | "processing" | "done">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("processing");
    window.setTimeout(() => setStatus("done"), 1400);
  };

  const close = () => {
    if (status === "done") {
      clear();
      setStatus("form");
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? onOpenChange(true) : close())}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-2xl">
        {status === "done" ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-primary" aria-hidden />
            <DialogHeader className="mt-4">
              <DialogTitle className="text-center font-display text-3xl">
                ¡Pedido confirmado!
              </DialogTitle>
              <DialogDescription className="text-center">
                Te enviamos el detalle por email. Preparamos tu pedido y te
                avisamos cuando salga el envío.
              </DialogDescription>
            </DialogHeader>
            <Button variant="gold" className="mt-8" onClick={close}>
              Seguir comprando
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Finalizar compra</DialogTitle>
              <DialogDescription>
                Checkout de demostración, listo para conectar con Mercado Pago o
                Stripe.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="nombre">Nombre y apellido</Label>
                  <Input id="nombre" required placeholder="Juan Pérez" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="juan@email.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="direccion">Dirección de envío</Label>
                  <Input id="direccion" required placeholder="Av. Siempre Viva 742" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="ciudad">Ciudad</Label>
                    <Input id="ciudad" required placeholder="Buenos Aires" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cp">Código postal</Label>
                    <Input id="cp" required placeholder="1425" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tel">Teléfono</Label>
                  <Input id="tel" required placeholder="11 2233 4455" />
                </div>
              </div>

              <aside className="surface-card h-fit rounded-lg p-5">
                <p className="eyebrow">Tu pedido</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {lines.map((l) => (
                    <li key={`${l.productId}-${l.size}`} className="flex justify-between gap-3">
                      <span className="min-w-0 truncate text-muted-foreground">
                        {l.qty}× {l.product.name}
                      </span>
                      <span className="shrink-0">{formatPrice(l.product.price * l.qty)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Envío</span>
                    <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between pt-2 font-display text-xl text-primary">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  className="mt-5 w-full"
                  disabled={status === "processing" || lines.length === 0}
                >
                  <CreditCard className="h-4 w-4" aria-hidden />
                  {status === "processing" ? "Procesando..." : "Pagar ahora"}
                </Button>
                <div className="mt-3 flex items-center justify-center gap-3" aria-label="Medios de pago aceptados">
                  <svg className="h-5 max-h-5 text-muted-foreground/80" style={{ filter: "grayscale(1) opacity(0.85)" }} viewBox="0 0 48 32" role="img" aria-label="Visa" fill="currentColor">
                    <path d="M2 4h44a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="none"/>
                    <path d="M18.5 21.3h-3.2l2-12.6h3.2l-2 12.6zM9.7 8.7L6.6 17.1l-.4-1.9-.1-.3-1.2-6.1S4.7 8.7 3.6 8.7H0v.2C.2 9 4.3 21.3 4.3 21.3h3.3l5-12.6h-3zM35.7 21.3V8.7h-3v12.6h3zm-9.3-12.6l-4.9 12.6h-3.3L11.5 8.7h3.2l2.8 8.8.3 1.5.3-1.5 2.8-8.8h3.2z" />
                  </svg>
                  <svg className="h-5 max-h-5 text-muted-foreground/80" style={{ filter: "grayscale(1) opacity(0.85)" }} viewBox="0 0 48 32" role="img" aria-label="Mastercard" fill="currentColor">
                    <circle cx="19" cy="16" r="8" />
                    <circle cx="29" cy="16" r="8" fill="currentColor" opacity="0.65" />
                  </svg>
                  <svg className="h-5 max-h-5 text-muted-foreground/80" style={{ filter: "grayscale(1) opacity(0.85)" }} viewBox="0 0 48 32" role="img" aria-label="Mercado Pago" fill="currentColor">
                    <path d="M24 5c-5.5 0-10 4-10 9 0 4 3 7 7 7.5-1 1.5-2.5 2.5-4 3 2 .5 4 .5 6 0 5-1 9-5 9-10.5C32 9 28 5 24 5zm0 3c2.5 0 4.5 2.5 4.5 5.5S26.5 19 24 19s-4.5-2.5-4.5-5.5S21.5 8 24 8z" />
                  </svg>
                </div>
              </aside>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
