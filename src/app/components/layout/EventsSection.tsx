// src/app/components/layout/EventsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function EventsSection() {
  const events = [
    {
      day: "28",
      month: "MAR",
      title: "Consejo de Gobierno Estadal",
      desc: "Sesión ordinaria del Consejo de Gobierno para evaluar proyectos de desarrollo regional.",
      time: "14:00h",
      location: "Edif. Ejecutivo",
      color: "bg-red-600",
    },
    {
      day: "05",
      month: "ABR",
      title: "Feria de Empleo Neoespartano",
      desc: "Oportunidades laborales para jóvenes y profesionales en sectores turismo, pesca y servicios.",
      time: "08:00-16:00h",
      location: "Centro de Convenciones",
      color: "bg-blue-600",
    },
  ];

  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Próximos Eventos</h2>
        <p className="text-gray-600 text-lg">
          Participe en las actividades programadas por el Gobierno Bolivariano de Nueva Esparta
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-center">
                <div className={`${event.color} text-white rounded-lg p-3`}>
                  <div className="text-2xl font-bold">{event.day}</div>
                  <div className="text-xs">{event.month}</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-3">{event.desc}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {event.time}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}