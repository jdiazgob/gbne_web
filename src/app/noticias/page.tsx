// src/app/noticias/page.tsx
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, ExternalLink } from "lucide-react";
import Link from "next/link";

// === SEO: generateMetadata ===
export const generateMetadata = (): Metadata => {
  return {
    title: "Noticias Oficiales | Gobierno Bolivariano de Nueva Esparta",
    description: "Últimas noticias del Gobierno Bolivariano de Nueva Esparta. Proyectos, eventos, anuncios oficiales y desarrollo regional.",
    keywords: ["Noticias Nueva Esparta", "GBNE", "Gobierno Estadal", "Desarrollo regional", "Poder Popular"],
    openGraph: {
      title: "Noticias Oficiales - GBNE",
      description: "Información oficial del Gobierno Bolivariano de Nueva Esparta.",
      url: "https://nuevaesparta.gob.ve/noticias",
      siteName: "GBNE",
      images: [
        {
          url: "/images/og-noticias.jpg",
          width: 1200,
          height: 630,
          alt: "Noticias del Gobierno Bolivariano de Nueva Esparta",
        },
      ],
      locale: "es_VE",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Noticias Oficiales - GBNE",
      description: "Últimas noticias del gobierno estadal.",
      images: ["/images/og-noticias.jpg"],
    },
    metadataBase: new URL("https://nuevaesparta.gob.ve"),
  };
};

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-6 md:space-x-8 overflow-x-auto">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">INICIO</Link>
              <Link href="/noticias" className="text-blue-600 border-b-2 border-blue-600 font-medium whitespace-nowrap">NOTICIAS</Link>
              <Link href="/directorio" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">DIRECTORIO</Link>
              <Link href="/eventos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">EVENTOS</Link>
              <Link href="/galerias" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">GALERÍAS</Link>
              <Link href="/documentos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">DOCUMENTOS</Link>
              <Link href="/ciudadanos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">CIUDADANOS</Link>
              <Link href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">SERVICIOS</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias Oficiales</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Manténgase informado sobre las últimas actividades y proyectos de la Gobernación de Nueva Esparta
          </p>
        </div>
      </div>

      {/* News Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured News */}
          <Link href="/noticias/modernizacion-puerto-la-guaira">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer lg:col-span-2">
              <div className="lg:flex">
                <div className="lg:w-1/3 h-48 lg:h-auto bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-2">20</div>
                    <div className="text-sm">MAR 2024</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>20 de Marzo, 2024</span>
                      <User className="w-4 h-4 ml-4" />
                      <span>Gobernación de Nueva Esparta</span>
                    </div>
                    <Badge variant="secondary" className="w-fit mb-2">Infraestructura</Badge>
                    <CardTitle className="text-2xl">Modernización del Puerto de La Guaira</CardTitle>
                    <CardDescription className="text-base">
                      El Gobierno Estadal anuncia importantes inversiones en la modernización portuaria para impulsar el comercio neoespartano. El proyecto incluye nuevas grúas, sistemas de carga y mejoras en la infraestructura logística.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Leer Artículo Completo <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </Link>

          {/* Regular News Grid */}
          <Link href="/noticias/festival-perla-del-caribe">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Cultura Neoespartana</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>18 de Marzo, 2024</span>
                </div>
                <Badge variant="secondary" className="w-fit mb-2">Cultura</Badge>
                <CardTitle className="text-xl">Festival "Perla del Caribe" 2024</CardTitle>
                <CardDescription>
                  Celebración de la riqueza cultural, gastronómica y musical del Estado Nueva Esparta con artistas locales e internacionales.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Leer Más <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/noticias/programa-vivienda-digna">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <User className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Programas Sociales</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>15 de Marzo, 2024</span>
                </div>
                <Badge variant="secondary" className="w-fit mb-2">Programas Sociales</Badge>
                <CardTitle className="text-xl">Programa "Vivienda Digna"</CardTitle>
                <CardDescription>
                  Nueva fase del programa habitacional que beneficiará a 500 familias neoespartanas con viviendas dignas y servicios básicos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Leer Más <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Additional News */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl font-bold mb-2">🏫</div>
                <p className="text-sm">Educación</p>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4" />
                <span>10 de Marzo, 2024</span>
              </div>
              <Badge variant="secondary" className="w-fit mb-2">Educación</Badge>
              <CardTitle className="text-xl">Inauguración de Nuevos Centros Educativos</CardTitle>
              <CardDescription>
                La Gobernación inaugura 5 nuevos centros educativos en comunidades rurales de Nueva Esparta, beneficiando a más de 800 estudiantes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm">
                Leer Más <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl font-bold mb-2">🌊</div>
                <p className="text-sm">Turismo</p>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4" />
                <span>05 de Marzo, 2024</span>
              </div>
              <Badge variant="secondary" className="w-fit mb-2">Turismo</Badge>
              <CardTitle className="text-xl">Plan de Promoción Turística Internacional</CardTitle>
              <CardDescription>
                Nueva estrategia para posicionar a Nueva Esparta como destino turístico caribeño de clase mundial, con inversiones en hotelería y servicios.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm">
                Leer Más <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Anterior</Button>
            <Button size="sm" className="bg-blue-600">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Siguiente</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          {/* Official Logos Section - Sin texto */}
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-700">
            {/* Logo República Bolivariana de Venezuela - Solo logo */}
            <div className="flex items-center">
              <div className="w-16 h-12 bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VEN</span>
              </div>
            </div>

            {/* Escudo de Armas - Solo escudo */}
            <div className="flex items-center">
              <div className="w-12 h-16 bg-gradient-to-b from-red-500 via-blue-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">🛡️</span>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Gobierno Bolivariano de Nueva Esparta</h3>
              <p className="text-gray-300 text-sm">
                Trabajando por el desarrollo integral del Estado Nueva Esparta y el bienestar de todos los neoespartanos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/tramites" className="hover:text-white">Trámites Estadales</Link></li>
                <li><Link href="/pagos" className="hover:text-white">Pagos Gubernamentales</Link></li>
                <li><Link href="/licencias" className="hover:text-white">Licencias y Permisos</Link></li>
                <li><Link href="/atencion" className="hover:text-white">Atención al Ciudadano</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/transparencia" className="hover:text-white">Transparencia</Link></li>
                <li><Link href="/normativas" className="hover:text-white">Normativas</Link></li>
                <li><Link href="/presupuesto" className="hover:text-white">Presupuesto Estadal</Link></li>
                <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p>Edif Administrativo, Edif Ejecutivo</p>
                <p>Avenida Simón Bolívar antigua Av. Constitución</p>
                <p>La Asunción 6311, Nueva Esparta</p>
                <p>Tel: 0295-2659915</p>
                <p>Email: info@nuevaesparta.gob.ve</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="text-center text-sm text-gray-400">
              <p>&copy; 2025 Dirección del Poder Popular para la Tecnología de Comunicación e Informaciones GBNE, Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}