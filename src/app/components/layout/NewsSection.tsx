// src/app/components/layout/NewsSection.tsx
import NewsCard from "@/components/ui/NewsCard";
import { FileText, Calendar, Users, ExternalLink, Search, Clock, MapPin  } from "lucide-react"; // ← ExternalLink agregado
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NewsSection() {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Últimas Noticias</h2>
        <p className="text-gray-600 text-lg">
          Manténgase informado sobre las actividades del Gobierno Bolivariano de Nueva Esparta y los proyectos para nuestro estado
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <NewsCard
          href="/noticias/modernizacion-puerto-la-guaira"
          category="Infraestructura"
          title="Modernización del Puerto de La Guaira"
          description="El Gobierno Estadal anuncia importantes inversiones en la modernización portuaria para impulsar el comercio neoespartano."
          date="20 de Marzo, 2024"
          author="Redactor: María González | Fotógrafo: Carlos Martínez"
          icon={<FileText className="w-12 h-12 mx-auto mb-2" />}
          gradient="bg-gradient-to-br from-blue-500 to-blue-700"
        />
        <NewsCard
          href="/noticias/festival-perla-del-caribe"
          category="Cultura"
          title="Festival 'Perla del Caribe' 2024"
          description="Celebración de la riqueza cultural, gastronómica y musical del Estado Nueva Esparta con artistas locales e internacionales."
          date="18 de Marzo, 2024"
          author="Periodista: Ana López | Redactor: Luis Pérez"
          icon={<Calendar className="w-12 h-12 mx-auto mb-2" />}
          gradient="bg-gradient-to-br from-green-500 to-green-700"
        />
        <NewsCard
          href="/noticias/programa-vivienda-digna"
          category="Programas Sociales"
          title="Programa 'Vivienda Digna'"
          description="Nueva fase del programa habitacional que beneficiará a 500 familias neoespartanas con viviendas dignas y servicios básicos."
          date="15 de Marzo, 2024"
          author="Periodista: Roberto Silva | Fotógrafo: Elena Morales"
          icon={<Users className="w-12 h-12 mx-auto mb-2" />}
          gradient="bg-gradient-to-br from-purple-500 to-purple-700"
        />
      </div>

      <div className="text-center mt-8">
        <Link href="/noticias">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8">
            Ver Todas las Noticias <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}