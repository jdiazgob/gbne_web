import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Clock, Users, ExternalLink, Plus } from "lucide-react"
import Link from "next/link"

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-6 md:space-x-8 overflow-x-auto">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">INICIO</Link>
              <Link href="/noticias" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">NOTICIAS</Link>
              <Link href="/directorio" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">DIRECTORIO</Link>
              <Link href="/eventos" className="text-blue-600 border-b-2 border-blue-600 font-medium whitespace-nowrap">EVENTOS</Link>
              <Link href="/galerias" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">GALERÍAS</Link>
              <Link href="/documentos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">DOCUMENTOS</Link>
              <Link href="/ciudadanos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">CIUDADANOS</Link>
              <Link href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">SERVICIOS</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eventos Oficiales</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Participe en las actividades programadas por el Gobierno del Estado Nueva Esparta para el desarrollo de nuestra comunidad
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700">Todos los Eventos</Button>
          <Button variant="outline">Gobierno</Button>
          <Button variant="outline">Cultura</Button>
          <Button variant="outline">Educación</Button>
          <Button variant="outline">Salud</Button>
          <Button variant="outline">Desarrollo Social</Button>
        </div>

        {/* Upcoming Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Próximos Eventos</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Event */}
            <Card className="lg:col-span-2 overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/4 h-48 lg:h-auto bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold">28</div>
                    <div className="text-sm">MAR</div>
                    <div className="text-xs mt-1">2024</div>
                  </div>
                </div>
                <div className="lg:w-3/4 p-6">
                  <Badge className="mb-3 bg-red-100 text-red-800">Gobierno</Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Consejo de Gobierno Estadal</h3>
                  <p className="text-gray-600 mb-4">
                    Sesión ordinaria del Consejo de Gobierno para evaluar proyectos de desarrollo regional.
                    Se tratarán temas importantes sobre infraestructura, educación y programas sociales para Nueva Esparta.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      14:00 - 18:00h
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Palacio de Gobierno, La Asunción
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Acceso restringido - Prensa acreditada
                    </span>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Más Información <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Regular Events */}
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">05</div>
                  <div className="text-sm">ABR</div>
                </div>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Empleo</Badge>
                <CardTitle className="text-xl">Feria de Empleo Neoespartano</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Oportunidades laborales para jóvenes y profesionales en sectores turismo, pesca y servicios.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>08:00 - 16:00h</span>
                  <MapPin className="w-4 h-4 ml-4 mr-1" />
                  <span>Centro de Convenciones</span>
                </div>
                <Button variant="outline" size="sm">
                  Ver Detalles <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-sm">ABR</div>
                </div>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-100 text-green-800">Cultura</Badge>
                <CardTitle className="text-xl">Festival "Perla del Caribe"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Celebración de la riqueza cultural, gastronómica y musical del Estado Nueva Esparta.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>10:00 - 22:00h</span>
                  <MapPin className="w-4 h-4 ml-4 mr-1" />
                  <span>Plaza Bolívar</span>
                </div>
                <Button variant="outline" size="sm">
                  Ver Programa <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">20</div>
                  <div className="text-sm">ABR</div>
                </div>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-purple-100 text-purple-800">Educación</Badge>
                <CardTitle className="text-xl">Inauguración Centros Educativos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ceremonia de inauguración de 5 nuevos centros educativos en comunidades rurales.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>09:00 - 12:00h</span>
                  <MapPin className="w-4 h-4 ml-4 mr-1" />
                  <span>Múltiples ubicaciones</span>
                </div>
                <Button variant="outline" size="sm">
                  Ver Ubicaciones <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">25</div>
                  <div className="text-sm">ABR</div>
                </div>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-100 text-orange-800">Salud</Badge>
                <CardTitle className="text-xl">Jornada de Salud Comunitaria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Jornada médica gratuita con consultas, vacunación y exámenes preventivos.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>07:00 - 15:00h</span>
                  <MapPin className="w-4 h-4 ml-4 mr-1" />
                  <span>Hospital Central</span>
                </div>
                <Button variant="outline" size="sm">
                  Registrarse <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Past Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Eventos Realizados</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="opacity-75">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gray-100 text-gray-600">Finalizado</Badge>
                <CardTitle className="text-lg">Entrega de Viviendas - Fase I</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-2">
                  200 familias recibieron las llaves de sus nuevas viviendas.
                </p>
                <div className="text-xs text-gray-500">
                  📅 10 de Marzo, 2024 | 📍 Urbanización Villa Esperanza
                </div>
              </CardContent>
            </Card>

            <Card className="opacity-75">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gray-100 text-gray-600">Finalizado</Badge>
                <CardTitle className="text-lg">Asamblea Ciudadana Regional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-2">
                  Diálogo directo entre gobierno y ciudadanos sobre proyectos 2024.
                </p>
                <div className="text-xs text-gray-500">
                  📅 05 de Marzo, 2024 | 📍 Teatro Municipal
                </div>
              </CardContent>
            </Card>

            <Card className="opacity-75">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-gray-100 text-gray-600">Finalizado</Badge>
                <CardTitle className="text-lg">Lanzamiento Plan Turístico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-2">
                  Presentación de la estrategia turística internacional 2024-2026.
                </p>
                <div className="text-xs text-gray-500">
                  📅 01 de Marzo, 2024 | 📍 Hotel Margarita Dynasty
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Organizas un Evento Comunitario?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Si representas una organización comunitaria y deseas incluir tu evento en nuestro calendario oficial,
            puedes enviar tu solicitud a través de nuestros canales oficiales.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Registrar Evento
            </Button>
            <Button variant="outline">
              Contactar Coordinación
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">Gobernación Bolivariana del Estado Nueva Esparta</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Promoviendo la participación ciudadana y el desarrollo comunitario a través de eventos que fortalecen nuestro estado.
          </p>
        </div>
      </footer>
    </div>
  )
}
