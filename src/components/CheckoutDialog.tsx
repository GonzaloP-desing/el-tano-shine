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
                <p className="mt-3 flex items-center justify-center gap-1.5 text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                  <Lock className="h-3 w-3" aria-hidden /> Pago 100% seguro
                </p>
              </aside>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
