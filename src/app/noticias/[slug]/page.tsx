// src/app/noticias/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getNoticiaBySlug, getNoticias } from '@/lib/db';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const noticia = await getNoticiaBySlug(params.slug);

    if (!noticia) {
      return {
        title: 'Noticia no encontrada',
      };
    }

    return {
      title: `${noticia.titulo} | GBNE`,
      description: noticia.descripcion,
    };
  } catch (error) {
    return {
      title: 'Error',
      description: 'No se pudo cargar la noticia.',
    };
  }
}

export default async function NoticiaDetalle({ params }: Props) {
  let noticia;
  try {
    noticia = await getNoticiaBySlug(params.slug);
  } catch (error) {
    console.error("Error al obtener noticia por slug:", error);
  }

  if (!noticia) {
    notFound(); // Muestra la página 404
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/noticias">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Noticias
          </Link>
        </Button>

        <header className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            {noticia.categoria}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{noticia.titulo}</h1>
          <p className="text-gray-600 mb-2">
            <strong>Fecha:</strong> {new Date(noticia.fecha).toLocaleDateString('es-VE')}
          </p>
          <p className="text-gray-600">
            <strong>Autor:</strong> {noticia.autor} | <strong>Fotógrafo:</strong> {noticia.fotografo}
          </p>
        </header>

        {noticia.imagen_url && (
          <div className="relative mb-8 w-full aspect-video overflow-hidden rounded-lg shadow-md">
            <Image
              src={noticia.imagen_url}
              alt={`Imagen de la noticia: ${noticia.titulo}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 italic">{noticia.descripcion}</p>
          <div className="whitespace-pre-line text-gray-800">{noticia.contenido}</div>
        </div>
      </article>
    </div>
  );
}

// Para `output: 'export'`, necesitas generar rutas estáticas
// Asegúrate de tener esta función si usas exportación estática
export async function generateStaticParams() {
  try {
    const noticias = await getNoticias();
    if (!Array.isArray(noticias)) {
      return [];
    }
    return noticias.map((noticia) => ({ slug: noticia.slug }));
  } catch (error) {
    console.error("Error al generar slugs estáticos:", error);
    return [];
  }
}