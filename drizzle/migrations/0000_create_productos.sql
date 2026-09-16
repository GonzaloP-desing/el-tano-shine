CREATE TABLE public.productos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  descripcion text NOT NULL DEFAULT '',
  precio numeric NOT NULL DEFAULT 0,
  categoria text NOT NULL,
  subcategoria text NOT NULL DEFAULT 'Baño de Oro',
  url_imagen text NOT NULL DEFAULT '',
  disponible boolean NOT NULL DEFAULT true,
  es_destacado boolean NOT NULL DEFAULT false,
  etiqueta_talle text NOT NULL DEFAULT 'Talle',
  talles text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.productos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.productos TO authenticated;
GRANT ALL ON public.productos TO service_role;

ALTER TABLE public.productos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Catalogo publico visible"
ON public.productos FOR SELECT
TO anon, authenticated
USING (true);

INSERT INTO public.productos (nombre, descripcion, precio, categoria, subcategoria, url_imagen, disponible, es_destacado, etiqueta_talle, talles) VALUES
('Cadena Cubana 8mm','Eslabón cubano macizo con cierre mosquetón reforzado y terminación pulida espejo.',62900,'Cadenas','Baño de Oro','https://placehold.co/1000x1000/141414/c5a059?text=Producto+1',true,true,'Largo','{"45 cm","50 cm","55 cm","60 cm"}'),
('Cadena Veneciana 3mm','Trama cerrada de brillo continuo, sobria y resistente para uso diario.',39900,'Cadenas','Acero Quirúrgico','https://placehold.co/1000x1000/141414/c5a059?text=Producto+2',true,false,'Largo','{"40 cm","45 cm","50 cm"}'),
('Pulsera Cubana 6mm','Versión de muñeca del eslabón cubano, con cierre doble seguro.',41900,'Pulseras','Baño de Oro','https://placehold.co/1000x1000/141414/c5a059?text=Producto+3',true,true,'Largo','{"18 cm","19 cm","20 cm","21 cm"}'),
('Anillo Sello Cuadrado','Frente cuadrado pulido con hombros trabajados, una pieza con carácter.',33900,'Anillos','Baño de Oro','https://placehold.co/1000x1000/141414/c5a059?text=Producto+4',true,true,'Talle','{"16","18","20","22","24"}'),
('Alianza Martillada','Alianza de 4mm con textura martillada que multiplica los destellos.',24900,'Anillos','Acero Quirúrgico','https://placehold.co/1000x1000/141414/c5a059?text=Producto+5',true,false,'Talle','{"14","16","18","20","22"}'),
('Argollas 20mm','Tubo hueco con presencia visual sin peso en la oreja, cierre a presión.',22900,'Aritos','Baño de Oro','https://placehold.co/1000x1000/141414/c5a059?text=Producto+6',true,true,'Medida','{"15 mm","20 mm","30 mm"}');
