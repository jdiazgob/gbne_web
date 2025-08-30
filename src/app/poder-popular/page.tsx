import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PoderPopular() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="bg-slate-800 text-white py-4">
          <div className="container mx-auto px-4 flex justify-center items-center space-x-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              {/* Logo space */}
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              {/* Shield space */}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Gobierno Bolivariano de Nueva Esparta
          </h1>
          <p className="text-slate-600 text-lg">
            Portal Oficial de la Gobernación del estado Bolivariano de Nueva Esparta
          </p>
        </div>

        {/* Navigation */}
        <nav className="bg-slate-800 text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-8 py-4">
              <Link href="/" className="hover:text-blue-300 transition-colors">INICIO</Link>
              <Link href="/noticias" className="hover:text-blue-300 transition-colors">NOTICIAS</Link>
              <Link href="/directorio" className="hover:text-blue-300 transition-colors">DIRECTORIO</Link>
              <Link href="/entes-adscritos" className="hover:text-blue-300 transition-colors">ENTES ADSCRITOS</Link>
              <Link href="/galerías" className="hover:text-blue-300 transition-colors">GALERÍAS</Link>
              <Link href="/documentos" className="hover:text-blue-300 transition-colors">DOCUMENTOS</Link>
              <span className="text-blue-300 font-semibold">PODER POPULAR</span>
              <Link href="/servicios" className="hover:text-blue-300 transition-colors">SERVICIOS</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
            Poder Popular
          </h1>
          <p className="text-lg text-slate-600 mb-8 text-center">
            Participación ciudadana y ejercicio del poder popular en Nueva Esparta
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Consejos Comunales</CardTitle>
                <CardDescription>
                  Registro y gestión de consejos comunales activos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Los consejos comunales son la instancia de participación más cercana al pueblo,
                  donde se planifican proyectos para el desarrollo de las comunidades.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Consejos Comunales
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Comunas</CardTitle>
                <CardDescription>
                  Unión de consejos comunales en territorio común
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Las comunas agrupan varios consejos comunales en un territorio determinado
                  para desarrollar proyectos de mayor envergadura.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Comunas Registradas
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Salas de Batalla Social</CardTitle>
                <CardDescription>
                  Coordinación de políticas sociales territoriales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Instancias de articulación entre el poder popular y las instituciones
                  para la ejecución de políticas públicas.
                </p>
                <Button variant="outline" className="w-full">
                  Contactar Salas
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Participación Ciudadana</CardTitle>
                <CardDescription>
                  Mecanismos de consulta y participación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Espacios para que la ciudadanía participe activamente en la gestión
                  pública y el desarrollo del estado.
                </p>
                <Button variant="outline" className="w-full">
                  Participar
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Marco Legal del Poder Popular
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Constitución Nacional</h3>
                <p className="text-sm text-slate-600">Artículos 70, 184, 185</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Ley de los Consejos Comunales</h3>
                <p className="text-sm text-slate-600">Gaceta Oficial N° 39.335</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Ley Orgánica de las Comunas</h3>
                <p className="text-sm text-slate-600">Gaceta Oficial N° 6.011</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              {/* Logo space */}
            </div>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              {/* Shield space */}
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2">Gobierno Bolivariano de Nueva Esparta</h3>
            <p className="text-slate-300 mb-6">
              Trabajando por el desarrollo integral del Estado Nueva Esparta y el bienestar de todos los neoespartanos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Trámites Estadales</li>
                <li>Pagos Gubernamentales</li>
                <li>Licencias y Permisos</li>
                <li>Atención al Ciudadano</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Transparencia</li>
                <li>Normativas</li>
                <li>Presupuesto Estadal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="text-slate-300 space-y-2">
                <p>Edif Administrativo, Edif Ejecutivo</p>
                <p>Avenida Simón Bolívar antigua Av. Constitución</p>
                <p>La Asunción 6311, Nueva Esparta</p>
                <p>Tel: 0295-2659915</p>
                <p>Email: info@nuevaesparta.gob.ve</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6 text-center text-slate-400">
            <p>© 2025 Dirección del Poder Popular para la Tecnología de Comunicación e Informaciones GBNE, Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
