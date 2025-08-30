import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, User, Building, Anchor, Plane, GraduationCap, Heart, Shield, Waves } from "lucide-react"
import Link from "next/link"

export default function EntesAdscritosPage() {
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
              <Link href="/entes-adscritos" className="text-blue-600 border-b-2 border-blue-600 font-medium whitespace-nowrap">ENTES ADSCRITOS</Link>
              <Link href="/galerias" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">GALERÍAS</Link>
              <Link href="/documentos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">DOCUMENTOS</Link>
              <Link href="/poder-popular" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">PODER POPULAR</Link>
              <Link href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">SERVICIOS</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-indigo-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entes Adscritos</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Institutos y organismos adscritos al Gobierno Bolivariano de Nueva Esparta
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button className="bg-indigo-600 hover:bg-indigo-700">Todos los Entes</Button>
          <Button variant="outline">Puertos y Transporte</Button>
          <Button variant="outline">Educación Superior</Button>
          <Button variant="outline">Salud y Bienestar</Button>
          <Button variant="outline">Seguridad</Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Instituto de Puertos */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Anchor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Instituto de Puertos de Nueva Esparta</CardTitle>
                  <Badge variant="secondary" className="mt-1">Infraestructura Portuaria</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">Pedro Pérez</p>
                    <p className="text-sm text-gray-600">Presidente</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-250-30-20</p>
                    <p className="text-sm text-gray-600">Lunes a Viernes: 7:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">presidencia@puertosne.gob.ve</p>
                    <p className="text-sm text-gray-600">Gestión portuaria estadal</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Twitter</Button>
                    <Button size="sm" variant="outline">Instagram</Button>
                    <Button size="sm" variant="outline">LinkedIn</Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Servicios:</strong> Administración portuaria, licencias marítimas, control de embarcaciones, desarrollo de infraestructura portuaria.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instituto de Aeronáutica */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-sky-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Instituto de Aeronáutica Civil de Nueva Esparta</CardTitle>
                  <Badge variant="secondary" className="mt-1">Transporte Aéreo</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">María González</p>
                    <p className="text-sm text-gray-600">Presidenta</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-251-40-15</p>
                    <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">presidencia@aerocivil-ne.gob.ve</p>
                    <p className="text-sm text-gray-600">Aviación civil estadal</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Twitter</Button>
                    <Button size="sm" variant="outline">Facebook</Button>
                    <Button size="sm" variant="outline">Instagram</Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Servicios:</strong> Licencias de piloto, registro de aeronaves, control de vuelos regionales, mantenimiento aeroportuario.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instituto de Educación Superior */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-green-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Instituto Universitario de Nueva Esparta</CardTitle>
                  <Badge variant="secondary" className="mt-1">Educación Superior</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">Dr. Carlos Rodríguez</p>
                    <p className="text-sm text-gray-600">Rector - Presidente</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-252-18-90</p>
                    <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">rectoria@iune.edu.ve</p>
                    <p className="text-sm text-gray-600">Educación universitaria</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Facebook</Button>
                    <Button size="sm" variant="outline">Instagram</Button>
                    <Button size="sm" variant="outline">YouTube</Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Carreras:</strong> Turismo, Administración, Ingeniería, Ciencias Marinas, Tecnología de Alimentos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instituto de Salud */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-red-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Instituto de Salud Pública de Nueva Esparta</CardTitle>
                  <Badge variant="secondary" className="mt-1">Salud Estadal</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">Dra. Ana Martínez</p>
                    <p className="text-sm text-gray-600">Directora Presidenta</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-253-25-10</p>
                    <p className="text-sm text-gray-600">24 horas - Emergencias</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">direccion@salud-ne.gob.ve</p>
                    <p className="text-sm text-gray-600">Salud pública estadal</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Twitter</Button>
                    <Button size="sm" variant="outline">Facebook</Button>
                    <Button size="sm" variant="outline">WhatsApp</Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Servicios:</strong> Programas de vacunación, medicina preventiva, epidemiología, salud materno-infantil.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instituto de Seguridad */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-purple-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Instituto de Seguridad Ciudadana de Nueva Esparta</CardTitle>
                  <Badge variant="secondary" className="mt-1">Seguridad Pública</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">Cnel. Luis Morales</p>
                    <p className="text-sm text-gray-600">Director Presidente</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-254-32-00</p>
                    <p className="text-sm text-gray-600">Línea de emergencia: 911</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">direccion@seguridad-ne.gob.ve</p>
                    <p className="text-sm text-gray-600">Seguridad ciudadana</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Twitter</Button>
                    <Button size="sm" variant="outline">Instagram</Button>
                    <Button size="sm" variant="outline">Telegram</Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Servicios:</strong> Patrullaje ciudadano, prevención del delito, seguridad vial, protección turística.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instituto Marítimo */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-teal-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Instituto de Desarrollo Marítimo y Pesquero</CardTitle>
                  <Badge variant="secondary" className="mt-1">Recursos Marinos</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">Ing. Elena Vargas</p>
                    <p className="text-sm text-gray-600">Directora Presidenta</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-255-41-70</p>
                    <p className="text-sm text-gray-600">Lunes a Viernes: 7:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">presidencia@maritimo-ne.gob.ve</p>
                    <p className="text-sm text-gray-600">Desarrollo pesquero y marítimo</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Facebook</Button>
                    <Button size="sm" variant="outline">Instagram</Button>
                    <Button size="sm" variant="outline">YouTube</Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Servicios:</strong> Licencias pesqueras, capacitación marítima, desarrollo acuícola, protección ambiental marina.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* General Information */}
        <section className="mt-16 bg-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Coordinación de Entes Adscritos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Oficina de Coordinación</h4>
              <div className="space-y-2 text-gray-700">
                <p>📞 Central de Coordinación: 0295-2659915 ext. 300</p>
                <p>📧 coordinacion.entes@nuevaesparta.gob.ve</p>
                <p>📍 Edificio Administrativo - Piso 3</p>
                <p>🕐 Lunes a Viernes: 8:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Información Adicional</h4>
              <div className="space-y-2 text-gray-700">
                <p>📋 Todos los entes están adscritos al GBNE</p>
                <p>🤝 Coordinación interinstitucional permanente</p>
                <p>📊 Supervisión y evaluación continua</p>
                <p>🌐 Transparencia en la gestión pública</p>
              </div>
            </div>
          </div>
        </section>
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
