import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, CreditCard, Users, Calendar, MapPin, Clock, Phone, Mail, ExternalLink, Shield, Building, Car, Heart } from "lucide-react"
import Link from "next/link"

export default function ServiciosPage() {
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
              <Link href="/eventos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">EVENTOS</Link>
              <Link href="/galerias" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">GALERÍAS</Link>
              <Link href="/documentos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">DOCUMENTOS</Link>
              <Link href="/ciudadanos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">CIUDADANOS</Link>
              <Link href="/servicios" className="text-blue-600 border-b-2 border-blue-600 font-medium whitespace-nowrap">SERVICIOS</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-green-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios Gubernamentales</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            La Gobernación de Nueva Esparta pone a su disposición servicios eficientes y transparentes para todos los ciudadanos neoespartanos
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Servicios Principales</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trámites Estadales */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trámites Estadales</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Gestiones gubernamentales del estado Nueva Esparta disponibles 24/7
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Acceder
                </Button>
              </CardContent>
            </Card>

            {/* Pagos Gubernamentales */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pagos Seguros</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Pague tasas, multas y servicios del gobierno estadal
                </p>
                <Button className="bg-green-600 hover:bg-green-700 w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Pagar
                </Button>
              </CardContent>
            </Card>

            {/* Atención al Ciudadano */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Atención Ciudadana</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Canal directo para consultas y sugerencias
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contactar
                </Button>
              </CardContent>
            </Card>

            {/* Citas Previas */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cita Previa</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Reserve su cita para atención personalizada
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Reservar
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services by Category */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Servicios por Categoría</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Administrative Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building className="w-6 h-6 mr-3 text-blue-600" />
                  Servicios Administrativos
                </CardTitle>
                <CardDescription>
                  Trámites y procedimientos del gobierno estadal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Certificaciones Oficiales</h4>
                      <p className="text-sm text-gray-600">Certificados de residencia, solvencia, etc.</p>
                    </div>
                    <Button size="sm" variant="outline">Solicitar</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Registros Públicos</h4>
                      <p className="text-sm text-gray-600">Consulta de registros oficiales</p>
                    </div>
                    <Button size="sm" variant="outline">Consultar</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Apostillas y Legalizaciones</h4>
                      <p className="text-sm text-gray-600">Documentos para uso internacional</p>
                    </div>
                    <Button size="sm" variant="outline">Tramitar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Car className="w-6 h-6 mr-3 text-green-600" />
                  Transporte y Tránsito
                </CardTitle>
                <CardDescription>
                  Servicios relacionados con vehículos y transporte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Licencias de Conducir</h4>
                      <p className="text-sm text-gray-600">Renovación y obtención</p>
                    </div>
                    <Button size="sm" variant="outline">Gestionar</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Registro Vehicular</h4>
                      <p className="text-sm text-gray-600">Traspaso y matriculación</p>
                    </div>
                    <Button size="sm" variant="outline">Registrar</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Permisos de Transporte</h4>
                      <p className="text-sm text-gray-600">Comercial y de carga</p>
                    </div>
                    <Button size="sm" variant="outline">Solicitar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Heart className="w-6 h-6 mr-3 text-red-600" />
                  Servicios de Salud
                </CardTitle>
                <CardDescription>
                  Programas de salud pública y bienestar social
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Vacunación Gratuita</h4>
                      <p className="text-sm text-gray-600">Calendarios infantil y adulto</p>
                    </div>
                    <Button size="sm" variant="outline">Agendar</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Consultas Médicas</h4>
                      <p className="text-sm text-gray-600">Medicina general y especializada</p>
                    </div>
                    <Button size="sm" variant="outline">Reservar</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Medicamentos Subsidiados</h4>
                      <p className="text-sm text-gray-600">Programa de medicinas esenciales</p>
                    </div>
                    <Button size="sm" variant="outline">Consultar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="w-6 h-6 mr-3 text-purple-600" />
                  Seguridad Ciudadana
                </CardTitle>
                <CardDescription>
                  Servicios de protección y seguridad comunitaria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Denuncias Ciudadanas</h4>
                      <p className="text-sm text-gray-600">Reporte de incidentes y delitos</p>
                    </div>
                    <Button size="sm" variant="outline">Reportar</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Certificados Penales</h4>
                      <p className="text-sm text-gray-600">Antecedentes policiales</p>
                    </div>
                    <Button size="sm" variant="outline">Solicitar</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Seguridad Comunitaria</h4>
                      <p className="text-sm text-gray-600">Programas de prevención</p>
                    </div>
                    <Button size="sm" variant="outline">Participar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Canales de Atención</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Atención Telefónica</h3>
                <p className="text-gray-600 mb-4">
                  Línea gratuita de atención al ciudadano
                </p>
                <p className="text-lg font-bold text-blue-600">
                  0800-NUEVA-ES
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Lunes a Viernes: 7:00 AM - 6:00 PM
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Correo Electrónico</h3>
                <p className="text-gray-600 mb-4">
                  Envíe sus consultas y solicitudes
                </p>
                <p className="text-lg font-bold text-green-600">
                  servicios@nuevaesparta.gob.ve
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Respuesta en 24-48 horas hábiles
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Atención Presencial</h3>
                <p className="text-gray-600 mb-4">
                  Oficinas de atención al ciudadano
                </p>
                <p className="text-lg font-bold text-purple-600">
                  Palacio de Gobierno
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Av. Santiago Mariño, La Asunción
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="bg-red-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">Servicios de Emergencia</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-red-600 text-lg">🚨 Emergencias</h4>
              <p className="text-2xl font-bold">911</p>
              <p className="text-sm text-gray-600">Policía, Bomberos, Ambulancia</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-blue-600 text-lg">🚑 Salud</h4>
              <p className="text-2xl font-bold">171</p>
              <p className="text-sm text-gray-600">Emergencias Médicas</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-orange-600 text-lg">🔥 Bomberos</h4>
              <p className="text-2xl font-bold">122</p>
              <p className="text-sm text-gray-600">Incendios y Rescates</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-green-600 text-lg">💧 Servicios</h4>
              <p className="text-2xl font-bold">123</p>
              <p className="text-sm text-gray-600">Agua, Electricidad, Gas</p>
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
