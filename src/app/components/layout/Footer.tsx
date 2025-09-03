// src/app/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image"; // ← Importa Image
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Official Logos Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-700">
          {/* Logo Escudo de Armas NE */}
          <div className="flex items-center mb-6 md:mb-0">
            <Image
              src="/escudo_ne.png"
              alt="Escudo de Armas del Estado Nueva Esparta"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          {/* Logo Oficial Marisel */}
          <div className="flex items-center">
            <Image
              src="/logo_marisel.png"
              alt="Marisel, Gobernadora del Estado Nueva Esparta"
              width={250}
              height={250}
              className="rounded-lg object-contain"
            />
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
              <li><Link href="/tramites" className="hover:text-white">Trámites Estadales</Link></li>
              <li><Link href="/pagos" className="hover:text-white">Pagos Gubernamentales</Link></li>
              <li><Link href="/licencias" className="hover:text-white">Licencias y Permisos</Link></li>
              <li><Link href="/atencion" className="hover:text-white">Atención al Ciudadano</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/transparencia" className="hover:text-white">Transparencia</Link></li>
              <li><Link href="/normativas" className="hover:text-white">Normativas</Link></li>
              <li><Link href="/presupuesto" className="hover:text-white">Presupuesto Estadal</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
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
        <Separator className="my-8 bg-gray-700" />
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2025 Desarrollado por: Dirección del Poder Popular para la Tecnología de Comunicación e Informaciones GBNE.</p>
        </div>
      </div>
    </footer>
  );
}