import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, User, Building, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

const directoryData = [
  {
    title: "Dirección del Poder Popular para las Finanzas",
    badge: "Administración Financiera",
    director: "Pedro Pérez",
    phone: "0295-265-99-15 ext. 101",
    email: "finanzas@nuevaesparta.gob.ve",
    emailDesc: "Correspondencia oficial",
    icon: <Building className="w-6 h-6 text-white" />,
    color: "blue",
    socials: [
      { name: "Twitter", url: "#" },
      { name: "Instagram", url: "#" },
    ],
  },
  {
    title: "Dirección del Poder Popular para el Talento y Desarrollo Humano",
    badge: "Recursos Humanos",
    director: "María González",
    phone: "0295-265-99-15 ext. 102",
    email: "talentohumano@nuevaesparta.gob.ve",
    emailDesc: "Gestión del personal",
    icon: <Users className="w-6 h-6 text-white" />,
    color: "green",
    socials: [
      { name: "LinkedIn", url: "#" },
      { name: "Facebook", url: "#" },
    ],
  },
  {
    title: "Secretaría General de Gobierno",
    badge: "Coordinación Ejecutiva",
    director: "Carlos Rodríguez",
    phone: "0295-265-99-15 ext. 100",
    email: "secretaria@nuevaesparta.gob.ve",
    emailDesc: "Coordinación gubernamental",
    icon: <Building className="w-6 h-6 text-white" />,
    color: "purple",
    socials: [
      { name: "Twitter", url: "#" },
      { name: "Telegram", url: "#" },
    ],
  },
  // ... Agrega aquí las demás direcciones
  {
    title: "Dirección del Poder Popular para la Tecnología de Comunicación e Informaciones",
    badge: "GBNE - Comunicaciones",
    director: "Elena Vargas",
    phone: "0295-265-99-15 ext. 105",
    email: "comunicaciones@nuevaesparta.gob.ve",
    emailDesc: "Prensa y comunicaciones oficiales",
    icon: <Building className="w-6 h-6 text-white" />,
    color: "red",
    socials: [
      { name: "Twitter", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "Facebook", url: "#" },
    ],
  },
];

export default function DirectorioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
 {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center text-indigo-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Directorio Gubernamental</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Institutos y organismos adscritos al Gobierno Bolivariano de Nueva Esparta
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {directoryData.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className={`bg-${item.color}-50`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-${item.color}-600 rounded-full flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">{item.badge}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-semibold">{item.director}</p>
                      <p className="text-sm text-gray-600">Director(a)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{item.phone}</p>
                      <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{item.email}</p>
                      <p className="text-sm text-gray-600">{item.emailDesc}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Redes Sociales:</h4>
                    <div className="flex space-x-2">
                      {item.socials.map(social => (
                        <Button key={social.name} size="sm" variant="outline" asChild>
                          <a href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
    </div>
  )
}
