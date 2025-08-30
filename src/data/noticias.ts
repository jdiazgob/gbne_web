// src/data/noticias.ts
export type Noticia = {
  id: string;
  slug: string;
  titulo: string;
  categoria: string;
  fecha: string;
  autor: string;
  descripcion: string;
  imagenFondo: string; // Clase de gradiente o nombre de imagen
  contenidoCompleto?: string;
  destacada?: boolean;
};

export const noticias: Noticia[] = [
  {
    id: "1",
    slug: "modernizacion-puerto-la-guaira",
    titulo: "Modernización del Puerto de La Guaira",
    categoria: "Infraestructura",
    fecha: "20 de Marzo, 2024",
    autor: "Redactor: María González | Fotógrafo: Carlos Martínez",
    descripcion: "El Gobierno Estadal anuncia importantes inversiones en la modernización portuaria para impulsar el comercio neoespartano.",
    imagenFondo: "bg-gradient-to-br from-blue-500 to-blue-700",
    destacada: true,
  },
  {
    id: "2",
    slug: "festival-perla-del-caribe",
    titulo: "Festival 'Perla del Caribe' 2024",
    categoria: "Cultura",
    fecha: "18 de Marzo, 2024",
    autor: "Periodista: Ana López | Redactor: Luis Pérez",
    descripcion: "Celebración de la riqueza cultural, gastronómica y musical del Estado Nueva Esparta con artistas locales e internacionales.",
    imagenFondo: "bg-gradient-to-br from-green-500 to-green-700",
    destacada: false,
  },
  {
    id: "3",
    slug: "programa-vivienda-digna",
    titulo: "Programa 'Vivienda Digna'",
    categoria: "Programas Sociales",
    fecha: "15 de Marzo, 2024",
    autor: "Periodista: Roberto Silva | Fotógrafo: Elena Morales",
    descripcion: "Nueva fase del programa habitacional que beneficiará a 500 familias neoespartanas con viviendas dignas y servicios básicos.",
    imagenFondo: "bg-gradient-to-br from-purple-500 to-purple-700",
    destacada: false,
  },
];