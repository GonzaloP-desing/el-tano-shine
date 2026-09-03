import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { formatPrice, listPrice, type Product } from "@/data/products";
import { useCart } from "@/context/cart";

export function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (product: Product) => void;
}) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0] ?? "Único");
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product.id, size);
    setAdded(true);
    toast.success("Agregado al carrito", {
      description: `${product.name} — ${product.sizeLabel}: ${size}`,
    });
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="glow-hover surface-card group flex flex-col overflow-hidden rounded-lg">
      <button
        onClick={() => onOpen(product)}
        className="relative block aspect-square overflow-hidden text-left"
        aria-label={`Ver detalle de ${product.name}`}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-full bg-gold-gradient px-2.5 py-1 text-[0.6rem] font-semibold tracking-widest text-primary-foreground uppercase">
          Baño Oro 18k
        </span>
        {product.featured && (
          <span className="absolute top-3 right-3 rounded-full border border-primary/50 bg-background/80 px-2.5 py-1 text-[0.6rem] tracking-widest text-primary uppercase backdrop-blur">
            Destacado
          </span>
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-background/85 px-2.5 py-1 text-[0.6rem] font-semibold tracking-widest text-primary uppercase backdrop-blur">
          -20% OFF
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg leading-tight">{product.name}</h3>
        <p className="mt-1 flex items-baseline gap-2">
          <span className="text-sm text-muted-foreground line-through">
            {formatPrice(listPrice(product))}
          </span>
          <span className="font-display text-xl text-primary">
            {formatPrice(product.price)}
          </span>
        </p>

        <div className="mt-4">
          <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
            {product.sizeLabel}
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={`rounded-sm border px-2.5 py-1 text-xs transition-colors ${
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

        <Button onClick={handleAdd} variant="gold" className="mt-5 w-full">
          {added ? (
            <>
              <Check className="h-4 w-4" aria-hidden /> Agregado
            </>
          ) : (
            <>
              <ShoppingBag className="h-4 w-4" aria-hidden /> Añadir al carrito
            </>
          )}
        </Button>
      </div>
    </article>
  );
}
