import NewsCard from "@/components/ui/NewsCard";
import { FileText, Calendar, Users, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getNoticias } from '@/lib/db';

export default async function NewsSection() {
  let noticias: any[] = [];
  try {
    noticias = await getNoticias();
    if (!Array.isArray(noticias)) {
      noticias = [];
      console.error("getNoticias no devolvió un array:", noticias);
    }
    noticias = noticias.slice(0, 3); // Solo las 3 más recientes
  } catch (error) {
    console.error("Error al obtener noticias para el home:", error);
    noticias = [];
  }

  // Determina ícono y color según categoría/destacada
  const getCardAttributes = (categoria: string, destacada: boolean) => {
    let icon = <FileText className="w-6 h-6" />;
    let gradient = "from-blue-500 to-blue-700";
    if (destacada) {
      icon = <ExternalLink className="w-6 h-6" />;
      gradient = "from-orange-500 to-red-600";
    } else {
      switch (categoria) {
        case "Cultura":
          icon = <Users className="w-6 h-6" />;
          gradient = "from-purple-500 to-pink-500";
          break;
        case "Educación":
          icon = <Calendar className="w-6 h-6" />;
          gradient = "from-green-500 to-green-700";
          break;
        // Puedes agregar más categorías aquí
        default:
          break;
      }
    }
    return { icon, gradient };
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Últimas Noticias</h2>
        <p className="text-gray-500">Conozca las actividades más recientes del Gobierno Bolivariano de Nueva Esparta.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {noticias.map((noticia: any) => {
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
                day: 'numeric'
              })}
              author={`${noticia.autor}${noticia.fotografo ? ` | Fotógrafo: ${noticia.fotografo}` : ""}`}
              icon={icon}
              gradient={gradient}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <Button asChild variant="outline">
          <Link href="/noticias">Ver todas las noticias</Link>
        </Button>
      </div>
    </section>
  );
}