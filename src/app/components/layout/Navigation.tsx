// src/app/components/layout/Navigation.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-6 md:space-x-8 overflow-x-auto">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">INICIO</Link>
            <Link href="/noticias" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">NOTICIAS</Link>
            <Link href="/directorio" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">DIRECTORIO</Link>
            <Link href="/entes-adscritos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">ENTES ADSCRITOS</Link>
            <Link href="/galerias" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">GALERÍAS</Link>
            <Link href="/documentos" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">DOCUMENTOS</Link>
            <Link href="/poder-popular" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">PODER POPULAR</Link>
            <Link href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap">SERVICIOS</Link>
          </div>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700" aria-label="Buscar">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}