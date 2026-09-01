import { waLink } from "@/data/products";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("¡Hola El Tano Joyas! Tengo una consulta sobre...")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient shadow-[0_10px_30px_-8px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-primary-foreground" aria-hidden>
        <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.24.62 4.34 1.7 6.14L4 29l7.98-1.66a12.9 12.9 0 0 0 4.06.66c6.64 0 12.04-5.4 12.04-12.04S22.68 3 16.04 3Zm0 22.08c-1.3 0-2.56-.24-3.72-.7l-.5-.2-4.62.96.98-4.5-.24-.5a9.94 9.94 0 0 1-1.06-4.5c0-5.56 4.52-10.08 10.08-10.08s10.08 4.52 10.08 10.08-4.52 10.08-10.08 10.08Zm5.66-7.42c-.3-.16-1.86-.92-2.14-1.02-.28-.1-.5-.16-.7.16-.2.3-.8 1.02-.98 1.22-.18.2-.36.22-.66.08-.3-.16-1.3-.48-2.48-1.54-.92-.82-1.54-1.84-1.72-2.14-.18-.3-.02-.48.12-.64.16-.18.36-.42.54-.64.16-.2.22-.34.34-.56.12-.22.06-.42-.02-.6-.08-.16-.7-1.7-.96-2.32-.24-.6-.5-.5-.7-.52h-.6c-.2 0-.54.08-.82.38-.28.3-1.08 1.04-1.08 2.54s1.1 2.96 1.26 3.16c.16.2 2.14 3.4 5.2 4.64 2.56 1.04 3.08.84 3.64.78.56-.06 1.8-.74 2.06-1.46.26-.72.26-1.34.18-1.46-.08-.14-.28-.22-.58-.36Z" />
      </svg>
    </a>
  );
}
