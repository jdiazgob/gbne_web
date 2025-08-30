// src/app/components/layout/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <header className="relative h-96 bg-cover bg-center">
      <Image
        src="/images/hero-bg.jpg"
        alt="Gobierno Bolivariano de Nueva Esparta"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Capa oscura para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        {/* Logo GBNE */}
        <div className="mb-6">
  <Image
    src="/images/gbne-logo.png"
    alt="Logo Oficial del Gobierno Bolivariano de Nueva Esparta"
    width={250}
    height={250}
    className="w-49 h-49 rounded-full object-contain shadow-lg overflow-visible"
    priority
  />
</div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
          Gobierno Bolivariano de Nueva Esparta
        </h1>
        <p className="text-lg md:text-xl max-w-4xl">
          Portal Oficial de la Gobernación del estado Bolivariano de Nueva Esparta
        </p>
      </div>
    </header>
  );
}