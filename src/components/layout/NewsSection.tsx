import NewsCard from "@/components/ui/NewsCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getNoticias } from '@/lib/db';
import { getCardAttributes } from '@/lib/utils';

// Definimos un tipo para las noticias para mayor seguridad y claridad.
interface Noticia {
  id: string;
  slug: string;
  categoria: string;
  destacada: boolean;
  titulo: string;
  descripcion: string;
  fecha: string; // o Date
  autor: string;
  fotografo?: string;
  imagen_url?: string;
}

// Componente asíncrono para obtener noticias
export default async function NewsSection() {
  let noticias: Noticia[] = [];
  try {
    const fetchedNoticias = await getNoticias();
    if (Array.isArray(fetchedNoticias)) {
      noticias = fetchedNoticias.slice(0, 3); // Solo las 3 más recientes
    }
  } catch (error) {
    console.error("Error al obtener noticias para el home:", error);
    // noticias permanece como un array vacío, que se maneja a continuación.
  }

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Últimas Noticias</h2>
        <p className="text-gray-500">Conozca las actividades más recientes del Gobierno Bolivariano de Nueva Esparta.</p>
      </div>
      {noticias.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => {
            // Usamos la función de utilidad centralizada para mantener la consistencia visual.
            const { icon, gradient } = getCardAttributes(noticia.categoria, noticia.destacada);
            console.log(`NewsCard for ${noticia.titulo}: imageUrl = ${noticia.imagen_url}`); // ADD THIS LINE

            return (
              <NewsCard
                key={noticia.id}
                href={`/noticias/${noticia.slug}`}
                category={noticia.categoria}
                title={noticia.titulo}
                description={noticia.descripcion}
                date={new Date(noticia.fecha).toLocaleDateString('es-VE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                author={`${noticia.autor}${noticia.fotografo ? ` | Fotógrafo: ${noticia.fotografo}` : ""}`}
                icon={icon}
                gradient={gradient}
                imageUrl={noticia.imagen_url}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-500">No hay noticias recientes para mostrar.</p>
      )}
      <div className="flex justify-center mt-8">
        <Button asChild variant="outline">
          <Link href="/noticias">Ver todas las noticias</Link>
        </Button>
      </div>
    </section>
  );
}