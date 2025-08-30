import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, User, Building, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function DirectorioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-6 md:space-x-8 overflow-x-auto">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">INICIO</Link>
              <Link href="/noticias" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">NOTICIAS</Link>
              <Link href="/directorio" className="text-blue-600 border-b-2 border-blue-600 font-medium whitespace-nowrap">DIRECTORIO</Link>
              <Link href="/entes-adscritos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">ENTES ADSCRITOS</Link>
              <Link href="/galerias" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">GALERÍAS</Link>
              <Link href="/documentos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">DOCUMENTOS</Link>
              <Link href="/poder-popular" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">PODER POPULAR</Link>
              <Link href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">SERVICIOS</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Directorio Gubernamental</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Direcciones del Poder Popular del Gobierno Bolivariano de Nueva Esparta
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dirección de Finanzas */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Dirección del Poder Popular para las Finanzas</CardTitle>
                  <Badge variant="secondary" className="mt-1">Administración Financiera</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">Pedro Pérez</p>
                    <p className="text-sm text-gray-600">Director</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-265-99-15 ext. 101</p>
                    <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">finanzas@nuevaesparta.gob.ve</p>
                    <p className="text-sm text-gray-600">Correspondencia oficial</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Twitter</Button>
                    <Button size="sm" variant="outline">Instagram</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dirección de Talento Humano */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-green-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Dirección del Poder Popular para el Talento y Desarrollo Humano</CardTitle>
                  <Badge variant="secondary" className="mt-1">Recursos Humanos</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">María González</p>
                    <p className="text-sm text-gray-600">Directora</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-265-99-15 ext. 102</p>
                    <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">talentohumano@nuevaesparta.gob.ve</p>
                    <p className="text-sm text-gray-600">Gestión del personal</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">LinkedIn</Button>
                    <Button size="sm" variant="outline">Facebook</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Secretaría General de Gobierno */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-purple-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Secretaría General de Gobierno</CardTitle>
                  <Badge variant="secondary" className="mt-1">Coordinación Ejecutiva</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">Carlos Rodríguez</p>
                    <p className="text-sm text-gray-600">Secretario General</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-265-99-15 ext. 100</p>
                    <p className="text-sm text-gray-600">Lunes a Viernes: 7:30 AM - 4:30 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">secretaria@nuevaesparta.gob.ve</p>
                    <p className="text-sm text-gray-600">Coordinación gubernamental</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Twitter</Button>
                    <Button size="sm" variant="outline">Telegram</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dirección de Planificación */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-orange-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Dirección del Poder Popular para la Planificación</CardTitle>
                  <Badge variant="secondary" className="mt-1">Planificación Estratégica</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">Ana Martínez</p>
                    <p className="text-sm text-gray-600">Directora</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-265-99-15 ext. 103</p>
                    <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">planificacion@nuevaesparta.gob.ve</p>
                    <p className="text-sm text-gray-600">Proyectos estratégicos</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">LinkedIn</Button>
                    <Button size="sm" variant="outline">Instagram</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dirección de Educación */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-teal-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Dirección del Poder Popular para la Educación</CardTitle>
                  <Badge variant="secondary" className="mt-1">Educación Estadal</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">Luis Morales</p>
                    <p className="text-sm text-gray-600">Director</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-265-99-15 ext. 104</p>
                    <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">educacion@nuevaesparta.gob.ve</p>
                    <p className="text-sm text-gray-600">Coordinación educativa</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Facebook</Button>
                    <Button size="sm" variant="outline">YouTube</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dirección de Comunicación */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="bg-red-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Dirección del Poder Popular para la Tecnología de Comunicación e Informaciones</CardTitle>
                  <Badge variant="secondary" className="mt-1">GBNE - Comunicaciones</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-semibold">Elena Vargas</p>
                    <p className="text-sm text-gray-600">Directora</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">0295-265-99-15 ext. 105</p>
                    <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">comunicaciones@nuevaesparta.gob.ve</p>
                    <p className="text-sm text-gray-600">Prensa y comunicaciones oficiales</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">Twitter</Button>
                    <Button size="sm" variant="outline">Instagram</Button>
                    <Button size="sm" variant="outline">Facebook</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <section className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Información General de Contacto</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Sede Principal</h4>
              <div className="space-y-2 text-gray-700">
                <p>📍 Edificio Administrativo</p>
                <p>📍 Edificio Ejecutivo</p>
                <p>📍 Avenida Simón Bolívar (antigua Av. Constitución)</p>
                <p>📍 La Asunción 6311, Nueva Esparta</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Horarios y Contacto</h4>
              <div className="space-y-2 text-gray-700">
                <p>🕐 Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                <p>📞 Central Telefónica: 0295-2659915</p>
                <p>📧 Email General: info@nuevaesparta.gob.ve</p>
                <p>🌐 Portal Web: www.nuevaesparta.gob.ve</p>
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
