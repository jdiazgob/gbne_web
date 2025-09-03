// src/app/noticias/page.tsx
import type { Metadata } from 'next';
import { getNoticias } from '@/lib/db';
import NewsCard from "@/components/ui/NewsCard";
import { getCardAttributes } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Noticias Oficiales | GBNE',
  description: 'Manténgase informado sobre las últimas actividades y anuncios del Gobierno Bolivariano de Nueva Esparta.',
};

export default async function NoticiasPage() {
  let noticias = [];

  try {
    const fetchedNoticias = await getNoticias();
    if (Array.isArray(fetchedNoticias)) {
      noticias = fetchedNoticias;
    }
  } catch (error) {
    console.error("Error al obtener todas las noticias:", error);
    // 'noticias' permanece como un array vacío, que se maneja a continuación.
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias Oficiales</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Manténgase informado sobre las últimas actividades del Gobierno Bolivariano de Nueva Esparta
          </p>
        </div>
      </div>

      {/* Contenido de Noticias */}
      <main className="container mx-auto px-4 py-12">
        {noticias.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia) => {
              const { icon, gradient } = getCardAttributes(noticia.categoria, noticia.destacada);
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
                    day: 'numeric',
                  })}
                  author={`${noticia.autor} | Fotógrafo: ${noticia.fotografo}`}
                  icon={icon}
                  gradient={gradient}
                  imageUrl={noticia.imagen_url}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No hay noticias disponibles</h2>
            <p className="text-gray-500">Por favor, inténtelo de nuevo más tarde.</p>
          </div>
        )}
      </main>
    </div>
  );
}
