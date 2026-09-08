import { useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CheckoutDialog } from "@/components/CheckoutDialog";
import { formatPrice, waLink } from "@/data/products";
import { useCart } from "@/context/cart";

export function CartDrawer() {
  const {
    lines,
    isOpen,
    setOpen,
    setQty,
    remove,
    subtotal,
    shipping,
    total,
    freeShippingFrom,
  } = useCart();
  const [checkout, setCheckout] = useState(false);

  const waMessage = [
    "¡Hola Bottega Oro! Quiero finalizar este pedido:",
    "",
    ...lines.map(
      (l) =>
        `• ${l.qty}× ${l.product.name} (${l.product.sizeLabel}: ${l.size}) — ${formatPrice(
          l.product.price * l.qty,
        )}`,
    ),
    "",
    `Subtotal: ${formatPrice(subtotal)}`,
    `Envío: ${shipping === 0 ? "Gratis" : formatPrice(shipping)}`,
    `Total: ${formatPrice(total)}`,
  ].join("\n");

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent className="flex w-full flex-col gap-0 border-border bg-background p-0 sm:max-w-md">
          <SheetHeader className="border-b border-border px-5 py-4 text-left">
            <SheetTitle className="font-display text-2xl">Tu carrito</SheetTitle>
            <SheetDescription>
              {lines.length === 0
                ? "Todavía no agregaste piezas."
                : subtotal >= freeShippingFrom
                  ? "¡Tenés envío gratis en este pedido!"
                  : `Te faltan ${formatPrice(freeShippingFrom - subtotal)} para el envío gratis.`}
            </SheetDescription>
          </SheetHeader>

          {lines.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" aria-hidden />
              <p className="text-sm text-muted-foreground">
                Explorá el catálogo y sumá tus favoritas.
              </p>
              <Button variant="outlineGold" onClick={() => setOpen(false)}>
                Ver catálogo
              </Button>
            </div>
          ) : (
            <>
              <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
                {lines.map((l) => (
                  <li key={`${l.productId}-${l.size}`} className="flex gap-4 py-4">
                    <img
                      src={l.product.images[0]}
                      alt={l.product.name}
                      loading="lazy"
                      className="h-20 w-20 shrink-0 rounded-sm border border-border object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{l.product.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {l.product.sizeLabel}: {l.size}
                      </p>
                      <p className="mt-1 font-display text-base text-primary">
                        {formatPrice(l.product.price * l.qty)}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center rounded-sm border border-border">
                          <button
                            onClick={() => setQty(l.productId, l.size, l.qty - 1)}
                            aria-label="Restar"
                            className="grid h-7 w-7 place-items-center text-muted-foreground hover:text-primary"
                          >
                            <Minus className="h-3 w-3" aria-hidden />
                          </button>
                          <span className="w-7 text-center text-xs">{l.qty}</span>
                          <button
                            onClick={() => setQty(l.productId, l.size, l.qty + 1)}
                            aria-label="Sumar"
                            className="grid h-7 w-7 place-items-center text-muted-foreground hover:text-primary"
                          >
                            <Plus className="h-3 w-3" aria-hidden />
                          </button>
                        </div>
                        <button
                          onClick={() => remove(l.productId, l.size)}
                          aria-label={`Eliminar ${l.product.name}`}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" aria-hidden />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border px-5 py-4">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Envío</span>
                    <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between pt-1 font-display text-2xl text-primary">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <Button
                  variant="gold"
                  className="mt-4 w-full"
                  onClick={() => {
                    setOpen(false);
                    setCheckout(true);
                  }}
                >
                  INICIAR COMPRA
                </Button>
                <Button variant="outlineGold" className="mt-2 w-full" asChild>
                  <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer">
                    Finalizar o consultar por WhatsApp
                  </a>
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutDialog open={checkout} onOpenChange={setCheckout} />
    </>
  );
}
