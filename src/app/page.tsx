// src/app/page.tsx
import HeroSection from "./components/layout/HeroSection";
import Navigation from "./components/layout/Navigation";
// NewsSection ahora necesita recibir las noticias como prop o fetchearlas internamente
// Vamos a hacer que el componente en sí sea async
import NewsSection from "./components/layout/NewsSection";
import ServicesSection from "./components/layout/ServicesSection";
import EventsSection from "./components/layout/EventsSection";
// Footer ya no va aquí porque lo pusiste en layout.tsx
// import Footer from "./components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <HeroSection />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <NewsSection />
        <ServicesSection />
        <EventsSection />
      </main>
      {/* Footer se carga desde layout.tsx, no aquí */}
    </div>
  );
}