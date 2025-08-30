import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Share2, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ModernizacionPuertoPage() {
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
            <span className="text-blue-600">Modernización del Puerto de La Guaira</span>
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
            <Badge variant="secondary" className="mb-4">Infraestructura</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Modernización del Puerto de La Guaira: Impulsando el Comercio Neoespartano
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>20 de Marzo, 2024</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Gobernación de Nueva Esparta</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Lectura: 5 min</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="h-64 md:h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🚢</div>
                <p className="text-xl">Puerto de La Guaira - Nueva Esparta</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Vista del Puerto de La Guaira, que será modernizado con una inversión histórica del gobierno estadal.
            </p>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-lg font-semibold text-blue-900 mb-2">
                Resumen Ejecutivo
              </p>
              <p className="text-blue-800">
                La Gobernación Bolivariana del Estado Nueva Esparta anuncia una inversión histórica de 50 millones de dólares
                para la modernización integral del Puerto de La Guaira, proyecto que transformará la infraestructura portuaria
                y posicionará al estado como hub logístico del Caribe.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Detalles del Proyecto</h2>

            <p className="text-gray-700 mb-6">
              El ambicioso plan de modernización portuaria incluye la construcción de nuevas grúas de alta capacidad,
              sistemas automatizados de carga y descarga, y una completa renovación de la infraestructura logística.
              Este proyecto estratégico fortalecerá significativamente la capacidad comercial del estado Nueva Esparta.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Componentes Principales</h3>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Nuevas Grúas Pórtico:</strong> 4 grúas de última generación con capacidad para contenedores de gran tamaño</li>
              <li><strong>Sistema Automatizado:</strong> Tecnología de punta para optimizar los tiempos de carga y descarga</li>
              <li><strong>Expansión de Muelles:</strong> Ampliación de 300 metros lineales de muelles especializados</li>
              <li><strong>Centro Logístico:</strong> Nuevo centro de distribución con capacidad para 10,000 contenedores</li>
              <li><strong>Vías de Acceso:</strong> Modernización completa de las vías terrestres de acceso al puerto</li>
            </ul>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Impacto Económico Esperado
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">2,500</div>
                    <div className="text-sm text-gray-600">Empleos directos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-sm text-gray-600">Aumento capacidad</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">$120M</div>
                    <div className="text-sm text-gray-600">Ingresos anuales estimados</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Cronograma de Ejecución</h3>

            <p className="text-gray-700 mb-4">
              El proyecto se ejecutará en tres fases durante los próximos 24 meses:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fase I (Abril - Agosto 2024)</h4>
                  <p className="text-gray-600">Preparación del terreno y construcción de nueva infraestructura básica</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fase II (Septiembre 2024 - Marzo 2025)</h4>
                  <p className="text-gray-600">Instalación de grúas y sistemas automatizados</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fase III (Abril - Agosto 2025)</h4>
                  <p className="text-gray-600">Pruebas, capacitación y puesta en marcha completa</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Beneficios para Nueva Esparta</h3>

            <p className="text-gray-700 mb-6">
              Este proyecto transformador posicionará a Nueva Esparta como el principal puerto de entrada al Caribe venezolano,
              generando un efecto multiplicador en toda la economía regional. Se espera que el proyecto genere más de 2,500
              empleos directos y 8,000 empleos indirectos, contribuyendo significativamente al desarrollo económico del estado.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Declaraciones Oficiales</h4>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                "Esta inversión histórica reafirma nuestro compromiso con el desarrollo económico de Nueva Esparta.
                El nuevo puerto será un motor de crecimiento que beneficiará a todos los neoespartanos y fortalecerá
                nuestra posición como puerta de entrada al Caribe."
              </blockquote>
              <p className="text-sm text-gray-600 mt-2">— Gobernador de Nueva Esparta</p>
            </div>
          </article>

          {/* Related News */}
          <section className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Noticias Relacionadas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/noticias/festival-perla-del-caribe">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">Cultura</Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">Festival "Perla del Caribe" 2024</h4>
                    <p className="text-sm text-gray-600">Celebración cultural que complementa el desarrollo turístico del estado...</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/noticias/programa-vivienda-digna">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">Programas Sociales</Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">Programa "Vivienda Digna"</h4>
                    <p className="text-sm text-gray-600">Iniciativa social que acompaña el desarrollo económico del estado...</p>
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
