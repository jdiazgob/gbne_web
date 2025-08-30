// src/app/components/layout/ServicesSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, Users, Calendar } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Trámites Estadales",
      description: "Realice sus gestiones gubernamentales del estado Nueva Esparta en línea.",
      link: "/tramites",
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Pagos Gubernamentales",
      description: "Pague tasas, multas y servicios del gobierno estadal de forma segura.",
      link: "/pagos",
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Atención al Ciudadano",
      description: "Canal directo con el gobierno estadal para consultas y sugerencias.",
      link: "/atencion",
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-600" />,
      title: "Cita Previa",
      description: "Reserve su cita para atención personalizada en oficinas gubernamentales.",
      link: "/citas",
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Servicios Gubernamentales</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          El Gobierno Bolivariano de Nueva Esparta pone a disposición de los ciudadanos neoespartanos servicios eficientes y transparentes.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <div className={`w-16 h-16 ${service.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <Button variant="outline" size="sm" asChild>
                <Link href={service.link}>Acceder</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}