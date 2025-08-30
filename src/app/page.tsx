// src/app/page.tsx
import HeroSection from "./components/layout/HeroSection";
import Navigation from "./components/layout/Navigation";
import NewsSection from "./components/layout/NewsSection";
import ServicesSection from "./components/layout/ServicesSection";
import EventsSection from "./components/layout/EventsSection";
import Footer from "./components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <main className="container mx-auto px-4 py-12">
        <NewsSection />
        <ServicesSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}