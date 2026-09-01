import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

export type CartLine = {
  productId: string;
  size: string;
  qty: number;
};

export type CartLineFull = CartLine & { product: Product };

const STORAGE_KEY = "eltano-cart-v1";
const SHIPPING_FLAT = 6500;
const FREE_SHIPPING_FROM = 90000;

type CartContextValue = {
  lines: CartLineFull[];
  count: number;
  subtotal: number;
  shipping: number;
  total: number;
  freeShippingFrom: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  add: (productId: string, size: string, qty?: number) => void;
  setQty: (productId: string, size: string, qty: number) => void;
  remove: (productId: string, size: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [raw, setRaw] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setRaw(JSON.parse(stored) as CartLine[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(raw));
    } catch {
      /* ignore */
    }
  }, [raw]);

  const add = useCallback((productId: string, size: string, qty = 1) => {
    setRaw((prev) => {
      const found = prev.find((l) => l.productId === productId && l.size === size);
      if (found) {
        return prev.map((l) =>
          l === found ? { ...l, qty: Math.min(l.qty + qty, 20) } : l,
        );
      }
      return [...prev, { productId, size, qty }];
    });
    setOpen(true);
  }, []);

  const setQty = useCallback((productId: string, size: string, qty: number) => {
    setRaw((prev) =>
      qty <= 0
        ? prev.filter((l) => !(l.productId === productId && l.size === size))
        : prev.map((l) =>
            l.productId === productId && l.size === size
              ? { ...l, qty: Math.min(qty, 20) }
              : l,
          ),
    );
  }, []);

  const remove = useCallback((productId: string, size: string) => {
    setRaw((prev) => prev.filter((l) => !(l.productId === productId && l.size === size)));
  }, []);

  const clear = useCallback(() => setRaw([]), []);

  const value = useMemo<CartContextValue>(() => {
    const lines: CartLineFull[] = raw
      .map((l) => {
        const product = products.find((p) => p.id === l.productId);
        return product ? { ...l, product } : null;
      })
      .filter((l): l is CartLineFull => l !== null);

    const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
    const shipping =
      subtotal === 0 || subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_FLAT;

    return {
      lines,
      count: lines.reduce((sum, l) => sum + l.qty, 0),
      subtotal,
      shipping,
      total: subtotal + shipping,
      freeShippingFrom: FREE_SHIPPING_FROM,
      isOpen,
      setOpen,
      add,
      setQty,
      remove,
      clear,
    };
  }, [raw, isOpen, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
