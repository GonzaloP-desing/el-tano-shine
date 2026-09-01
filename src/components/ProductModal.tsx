import { useEffect, useState } from "react";
import { Minus, Plus, Ruler, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SizeGuideDialog } from "@/components/SizeGuide";
import { formatPrice, waLink, type Product } from "@/data/products";
import { useCart } from "@/context/cart";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { add } = useCart();
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (product) {
      setSize(product.sizes[0] ?? "Único");
      setQty(1);
      setActive(0);
    }
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    add(product.id, size, qty);
    toast.success("Agregado al carrito", {
      description: `${product.name} — ${product.sizeLabel}: ${size} (x${qty})`,
    });
    onClose();
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-4xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img
                src={product.images[active]}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="mt-3 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActive(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  className={`h-16 w-16 overflow-hidden rounded-sm border transition-colors ${
                    active === i ? "border-primary" : "border-border hover:border-primary/60"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-col">
            <span className="eyebrow">Baño de oro 18k</span>
            <h2 className="mt-2 text-3xl leading-tight">{product.name}</h2>
            <p className="mt-2 font-display text-3xl text-primary">
              {formatPrice(product.price)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              3 y 6 cuotas sin interés · Envíos a todo el país
            </p>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <p className="mt-3 border-l-2 border-primary/60 pl-4 text-xs leading-relaxed text-muted-foreground">
              {product.material}
            </p>

            <div className="mt-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {product.sizeLabel}
                </span>
                {product.category === "anillos" && (
                  <SizeGuideDialog>
                    <button className="inline-flex shrink-0 items-center gap-1.5 text-[0.65rem] tracking-widest text-primary uppercase hover:underline">
                      <Ruler className="h-3 w-3" aria-hidden /> Guía de talles
                    </button>
                  </SizeGuideDialog>
                )}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                    className={`rounded-sm border px-3 py-1.5 text-sm transition-colors ${
                      size === s
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                Cantidad
              </span>
              <div className="flex items-center gap-1 rounded-sm border border-border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Restar cantidad"
                  className="grid h-8 w-8 place-items-center text-muted-foreground hover:text-primary"
                >
                  <Minus className="h-3.5 w-3.5" aria-hidden />
                </button>
                <span className="w-8 text-center text-sm">{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(20, q + 1))}
                  aria-label="Sumar cantidad"
                  className="grid h-8 w-8 place-items-center text-muted-foreground hover:text-primary"
                >
                  <Plus className="h-3.5 w-3.5" aria-hidden />
                </button>
              </div>
            </div>

            <div className="mt-auto space-y-2 pt-8">
              <Button variant="gold" className="w-full" onClick={handleAdd}>
                <ShoppingBag className="h-4 w-4" aria-hidden /> Añadir al carrito
              </Button>
              <Button variant="outlineGold" className="w-full" asChild>
                <a
                  href={waLink(
                    `¡Hola El Tano Joyas! Quiero consultar por ${product.name} (${product.sizeLabel}: ${size}) — ${formatPrice(product.price)}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar por WhatsApp sobre este producto
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
