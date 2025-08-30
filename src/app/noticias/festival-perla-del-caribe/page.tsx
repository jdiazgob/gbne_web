import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Share2, Music, MapPin, Clock, Ticket } from "lucide-react"
import Link from "next/link"

export default function FestivalPerlaDelCaribePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-6 md:space-x-8 overflow-x-auto">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">INICIO</Link>
              <Link href="/noticias" className="text-blue-600 hover:text-blue-600 font-medium whitespace-nowrap">NOTICIAS</Link>
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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>
            <span>›</span>
            <Link href="/noticias" className="hover:text-blue-600">Noticias</Link>
            <span>›</span>
            <span className="text-blue-600">Festival "Perla del Caribe" 2024</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/noticias" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Noticias
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">Cultura</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Festival "Perla del Caribe" 2024: Celebrando la Cultura Neoespartana
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>18 de Marzo, 2024</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Secretaría de Cultura - Nueva Esparta</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Lectura: 4 min</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="h-64 md:h-96 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🎭</div>
                <p className="text-xl">Festival Perla del Caribe 2024</p>
                <p className="text-sm opacity-90">Celebrando Nuestra Identidad Cultural</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              El Festival Perla del Caribe reunirá lo mejor de la cultura, música y gastronomía neoespartana en una celebración única.
            </p>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="text-lg font-semibold text-green-900 mb-2">
                🎪 Evento Destacado
              </p>
              <p className="text-green-800">
                Del 15 al 17 de abril de 2024, Nueva Esparta se vestirá de fiesta con el Festival "Perla del Caribe",
                el evento cultural más importante del año que celebra la rica tradición artística, musical y gastronómica
                de nuestro estado insular.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Un Festival para Toda la Familia</h2>

            <p className="text-gray-700 mb-6">
              El Festival "Perla del Caribe" 2024 promete ser una experiencia inolvidable que reunirá a artistas locales
              e internacionales en una celebración de tres días llena de música, arte, gastronomía y tradiciones neoespartanas.
              Este año, el festival expandirá su programación para incluir actividades para todas las edades.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Programación Artística</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Music className="w-5 h-5 mr-2 text-green-600" />
                    Escenario Principal
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Conciertos de música caribeña</li>
                    <li>• Presentaciones de folklore venezolano</li>
                    <li>• Espectáculos de baile tradicional</li>
                    <li>• Artistas invitados internacionales</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Ticket className="w-5 h-5 mr-2 text-blue-600" />
                    Actividades Familiares
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Talleres de artesanía local</li>
                    <li>• Zona infantil con juegos tradicionales</li>
                    <li>• Exposiciones de arte neoespartano</li>
                    <li>• Mercado gastronómico regional</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Gastronomía Neoespartana</h3>

            <p className="text-gray-700 mb-6">
              Uno de los atractivos principales del festival será la Feria Gastronómica "Sabores del Caribe",
              donde los visitantes podrán degustar los platos típicos más representativos de Nueva Esparta,
              preparados por los mejores chefs y cocineros tradicionales del estado.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-amber-900 mb-3">🍽️ Platos Destacados</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Pescados y Mariscos:</strong>
                  <ul className="mt-1 text-amber-800">
                    <li>• Pargo rojo a la plancha</li>
                    <li>• Langosta al ajillo</li>
                    <li>• Cazuela de mariscos</li>
                  </ul>
                </div>
                <div>
                  <strong>Platos Tradicionales:</strong>
                  <ul className="mt-1 text-amber-800">
                    <li>• Arepa de chicharrón</li>
                    <li>• Empanadas de cazón</li>
                    <li>• Sancocho de mariscos</li>
                  </ul>
                </div>
                <div>
                  <strong>Postres Típicos:</strong>
                  <ul className="mt-1 text-amber-800">
                    <li>• Dulce de lechosa</li>
                    <li>• Conserva de coco</li>
                    <li>• Majarete neoespartano</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Información Práctica</h3>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-red-600" />
                      Ubicación y Fechas
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Lugar:</strong> Plaza Bolívar de La Asunción</p>
                      <p><strong>Fechas:</strong> 15, 16 y 17 de Abril 2024</p>
                      <p><strong>Horarios:</strong> 10:00 AM - 10:00 PM</p>
                      <p><strong>Entrada:</strong> Completamente GRATUITA</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-green-600" />
                      Cronograma Daily
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>10:00-12:00:</strong> Talleres infantiles</p>
                      <p><strong>12:00-15:00:</strong> Feria gastronómica</p>
                      <p><strong>15:00-18:00:</strong> Presentaciones culturales</p>
                      <p><strong>18:00-22:00:</strong> Conciertos principales</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Impacto Cultural y Turístico</h3>

            <p className="text-gray-700 mb-6">
              El Festival "Perla del Caribe" no solo celebra nuestra identidad cultural, sino que también impulsa
              significativamente el turismo regional. Se espera la participación de más de 50,000 visitantes durante
              los tres días del evento, generando un importante impacto económico para hoteles, restaurantes y
              comerciantes locales.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Testimonio Oficial</h4>
              <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                "El Festival Perla del Caribe representa lo mejor de nuestra cultura neoespartana. Es una oportunidad
                única para mostrar al mundo la riqueza artística, musical y gastronómica de nuestro hermoso estado insular."
              </blockquote>
              <p className="text-sm text-gray-600 mt-2">— Secretario de Cultura del Estado Nueva Esparta</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Cómo Participar</h3>

            <p className="text-gray-700 mb-4">
              La participación en el festival es completamente gratuita. Los ciudadanos interesados en participar
              como artistas, artesanos o vendedores gastronómicos pueden registrarse a través de:
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2 text-blue-800">
                <li>• <strong>Email:</strong> cultura@nuevaesparta.gob.ve</li>
                <li>• <strong>Teléfono:</strong> +58 295 242-1234 ext. 150</li>
                <li>• <strong>Oficina:</strong> Secretaría de Cultura - Palacio de Gobierno</li>
              </ul>
            </div>
          </article>

          {/* Related News */}
          <section className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Noticias Relacionadas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/noticias/modernizacion-puerto-la-guaira">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">Infraestructura</Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">Modernización del Puerto de La Guaira</h4>
                    <p className="text-sm text-gray-600">Proyecto que fortalecerá la economía y el turismo neoespartano...</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/noticias/programa-vivienda-digna">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">Programas Sociales</Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">Programa "Vivienda Digna"</h4>
                    <p className="text-sm text-gray-600">Iniciativa social para el bienestar de las familias neoespartanas...</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          {/* Official Logos Section - Sin texto */}
          <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-16 h-12 bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VEN</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-16 bg-gradient-to-b from-red-500 via-blue-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">🛡️</span>
              </div>
            </div>
          </div>

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
                <li><a href="/tramites" className="hover:text-white">Trámites Estadales</a></li>
                <li><a href="/pagos" className="hover:text-white">Pagos Gubernamentales</a></li>
                <li><a href="/licencias" className="hover:text-white">Licencias y Permisos</a></li>
                <li><a href="/atencion" className="hover:text-white">Atención al Ciudadano</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/transparencia" className="hover:text-white">Transparencia</a></li>
                <li><a href="/normativas" className="hover:text-white">Normativas</a></li>
                <li><a href="/presupuesto" className="hover:text-white">Presupuesto Estadal</a></li>
                <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
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
  )
}
