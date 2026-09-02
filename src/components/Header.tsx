import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/cart";
import { categories } from "@/data/products";

const navLinks = [
  { label: "Inicio", to: "/" as const },
  ...categories.map((c) => ({ label: c.name, to: "/categoria/$slug" as const, slug: c.slug })),
  { label: "Guía de Talles", to: "/guia-de-talles" as const },
  { label: "Contacto", to: "/contacto" as const },
];

export function Header() {
  const { count, setOpen } = useCart();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [term, setTerm] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setMenu(false);
    navigate({ to: "/catalogo", search: { q: term || undefined } });
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/95 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3.5">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-gradient font-display text-lg font-bold text-primary-foreground">
            T
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-lg tracking-[0.14em] sm:text-xl">
              EL TANO
            </span>
            <span className="block text-[0.6rem] tracking-[0.42em] text-primary">JOYAS</span>
          </span>
        </Link>

        <nav className="hidden justify-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              params={"slug" in link ? { slug: link.slug } : undefined}
              activeProps={{ className: "text-primary" }}
              className="text-[0.72rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <form onSubmit={submit} className="hidden items-center md:flex">
            <label htmlFor="buscador" className="sr-only">
              Buscar productos
            </label>
            <div className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 transition-colors focus-within:border-primary">
              <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
              <input
                id="buscador"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Buscar joyas..."
                className="w-32 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none xl:w-44"
              />
            </div>
          </form>

          <button
            onClick={() => setOpen(true)}
            aria-label={`Abrir carrito (${count} productos)`}
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <ShoppingBag className="h-4.5 w-4.5" aria-hidden />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold-gradient px-1 text-[0.65rem] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenu((m) => !m)}
            aria-label="Abrir menú"
            aria-expanded={menu}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {menu ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {menu && (
        <div className="border-t border-border bg-background px-4 pb-5 lg:hidden">
          <form onSubmit={submit} className="flex items-center gap-2 py-4">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-border px-3 py-2 focus-within:border-primary">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
              <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Buscar joyas..."
                aria-label="Buscar productos"
                className="min-w-0 flex-1 bg-transparent text-sm focus:outline-none"
              />
            </div>
          </form>
          <nav className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                params={"slug" in link ? { slug: link.slug } : undefined}
                onClick={() => setMenu(false)}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/60 py-3 text-sm tracking-[0.14em] text-muted-foreground uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
