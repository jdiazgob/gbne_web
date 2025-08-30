import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Share2, Home, MapPin, Clock, Users, Phone } from "lucide-react"
import Link from "next/link"

export default function ProgramaViviendaDignaPage() {
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
            <span className="text-blue-600">Programa "Vivienda Digna"</span>
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
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">Programas Sociales</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Programa "Vivienda Digna": 500 Familias Neoespartanas Tendrán Casa Propia
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>15 de Marzo, 2024</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Secretaría de Vivienda - Nueva Esparta</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Lectura: 6 min</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="h-64 md:h-96 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🏘️</div>
                <p className="text-xl">Programa Vivienda Digna</p>
                <p className="text-sm opacity-90">Construyendo Sueños, Fortaleciendo Familias</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              El Programa "Vivienda Digna" transformará la vida de 500 familias neoespartanas con viviendas modernas y servicios básicos completos.
            </p>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <p className="text-lg font-semibold text-purple-900 mb-2">
                🏠 Programa Social Destacado
              </p>
              <p className="text-purple-800">
                La Gobernación Bolivariana del Estado Nueva Esparta lanza la nueva fase del Programa "Vivienda Digna"
                que beneficiará directamente a 500 familias neoespartanas con viviendas completas, modernas y dotadas
                de todos los servicios básicos. Una inversión social de 25 millones de dólares.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Un Derecho Fundamental Hecho Realidad</h2>

            <p className="text-gray-700 mb-6">
              El acceso a una vivienda digna es un derecho fundamental consagrado en la Constitución venezolana.
              Con esta nueva fase del programa, el gobierno estadal reafirma su compromiso con las familias neoespartanas
              más necesitadas, proporcionando no solo un techo, sino un hogar completo donde puedan desarrollar
              su proyecto de vida con dignidad y seguridad.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Características de las Viviendas</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Home className="w-5 h-5 mr-2 text-purple-600" />
                    Especificaciones Técnicas
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Área:</strong> 65 metros cuadrados</li>
                    <li>• <strong>Habitaciones:</strong> 3 dormitorios</li>
                    <li>• <strong>Baños:</strong> 2 baños completos</li>
                    <li>• <strong>Áreas comunes:</strong> Sala, comedor, cocina</li>
                    <li>• <strong>Extras:</strong> Patio y área de lavado</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Servicios Incluidos
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Agua potable las 24 horas</li>
                    <li>• Sistema eléctrico completo</li>
                    <li>• Conexión de gas doméstico</li>
                    <li>• Internet banda ancha</li>
                    <li>• Recolección de desechos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Ubicaciones y Distribución</h3>

            <p className="text-gray-700 mb-6">
              Las 500 viviendas se construirán en 5 urbanizaciones estratégicamente ubicadas en diferentes municipios
              del estado Nueva Esparta, garantizando el acceso a servicios educativos, de salud y comerciales para
              todas las familias beneficiarias.
            </p>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                  Distribución por Municipios
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">200</div>
                    <div className="text-sm font-medium">Arismendi</div>
                    <div className="text-xs text-gray-600">Urbanización "Villa Esperanza"</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">150</div>
                    <div className="text-sm font-medium">Mariño</div>
                    <div className="text-xs text-gray-600">Conjunto "Nuevo Amanecer"</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">150</div>
                    <div className="text-sm font-medium">Maneiro</div>
                    <div className="text-xs text-gray-600">Residencias "Costa Bella"</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Proceso de Selección y Requisitos</h3>

            <p className="text-gray-700 mb-4">
              El proceso de selección de beneficiarios se realizará de manera transparente y justa,
              priorizando a las familias en situación de mayor vulnerabilidad social. Los criterios incluyen:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Situación Socioeconómica</h4>
                  <p className="text-gray-600 text-sm">Familias en condición de pobreza o pobreza extrema</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Condiciones de Vivienda Actual</h4>
                  <p className="text-gray-600 text-sm">Familias sin vivienda propia o en condiciones inadecuadas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Composición Familiar</h4>
                  <p className="text-gray-600 text-sm">Prioridad a familias con niños, adultos mayores o personas con discapacidad</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Residencia en el Estado</h4>
                  <p className="text-gray-600 text-sm">Mínimo 5 años de residencia continua en Nueva Esparta</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Cronograma de Construcción</h3>

            <p className="text-gray-700 mb-4">
              El proyecto se ejecutará en fases consecutivas durante 18 meses, con entregas parciales
              cada 6 meses para agilizar el proceso de reubicación de las familias beneficiarias.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fase I</h4>
                  <p className="text-sm text-gray-600 mb-1"><strong>Período:</strong> Abril - Sept 2024</p>
                  <p className="text-sm text-gray-600 mb-1"><strong>Viviendas:</strong> 200 unidades</p>
                  <p className="text-sm text-gray-600"><strong>Ubicación:</strong> Arismendi</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fase II</h4>
                  <p className="text-sm text-gray-600 mb-1"><strong>Período:</strong> Oct 2024 - Mar 2025</p>
                  <p className="text-sm text-gray-600 mb-1"><strong>Viviendas:</strong> 150 unidades</p>
                  <p className="text-sm text-gray-600"><strong>Ubicación:</strong> Mariño</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fase III</h4>
                  <p className="text-sm text-gray-600 mb-1"><strong>Período:</strong> Abr - Sept 2025</p>
                  <p className="text-sm text-gray-600 mb-1"><strong>Viviendas:</strong> 150 unidades</p>
                  <p className="text-sm text-gray-600"><strong>Ubicación:</strong> Maneiro</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Cómo Postularse</h3>

            <p className="text-gray-700 mb-4">
              Las familias interesadas pueden iniciar su proceso de postulación a partir del 1 de abril de 2024.
              El proceso es completamente gratuito y debe realizarse personalmente en las oficinas designadas.
            </p>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  Información y Postulaciones
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Oficina Principal</h5>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>📍 Secretaría de Vivienda</p>
                      <p>📍 Av. Santiago Mariño, La Asunción</p>
                      <p>📞 +58 295 242-1234 ext. 200</p>
                      <p>📧 vivienda@nuevaesparta.gob.ve</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Horario de Atención</h5>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>🕘 Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                      <p>🕘 Sábados: 8:00 AM - 12:00 PM</p>
                      <p>💳 Documentos: Cédula, constancia de trabajo</p>
                      <p>💳 Planilla de postulación gratuita</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Mensaje del Gobernador</h4>
              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700">
                "Una vivienda digna es mucho más que cuatro paredes y un techo. Es el fundamento sobre el cual
                las familias construyen sus sueños, educan a sus hijos y fortalecen los lazos comunitarios.
                Este programa representa nuestro compromiso inquebrantable con el bienestar de todos los neoespartanos."
              </blockquote>
              <p className="text-sm text-gray-600 mt-2">— Gobernador del Estado Nueva Esparta</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Impacto Social Esperado</h3>

            <p className="text-gray-700 mb-6">
              El Programa "Vivienda Digna" no solo proporcionará techo a 500 familias, sino que generará
              un impacto multiplicador en toda la economía local. Se estima la creación de 1,200 empleos directos
              durante la construcción y el fortalecimiento del tejido social en las comunidades beneficiarias.
            </p>
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
                    <p className="text-sm text-gray-600">Desarrollo económico que complementa los programas sociales...</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/noticias/festival-perla-del-caribe">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">Cultura</Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">Festival "Perla del Caribe" 2024</h4>
                    <p className="text-sm text-gray-600">Celebración cultural que fortalece la identidad neoespartana...</p>
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
