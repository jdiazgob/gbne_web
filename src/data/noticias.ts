// src/data/noticias.ts
export type Noticia = {
  id: string;
  titulo: string;
  categoria: string;
  fecha: string;
  autor: string;
  fotografo: string;
  imagenPortada: string;
  descripcion: string;
  contenido: string;
  destacada: boolean;
  slug: string;
};

export const noticias: Noticia[] = [
  {
    id: "1",
    titulo: "Modernización del Puerto de laGuaira",
    categoria: "Infraestructura",
    fecha: "2024-03-20",
    autor: "MaríaGonzález",
    fotografo: "CarlosMartínez",
    imagenPortada: "/imagenes-noticias/puerto-guaira.jpg",
    descripcion: "El gobiernoEstadal anuncia importantes inversiones en la modernización portuaria.",
    contenido: "el proyecto incluye nuevas grúas, sistemas de carga y mejoras en la infraestructura logística...",
    destacada: true,
    slug: "modernizacion-puerto-la-guaira"
  },
  {
    id: "2",
    titulo: "Festival \"Perla del Caribe\" 2024",
    categoria: "Cultura",
    fecha: "2024-03-18",
    autor: "Ana López",
    fotografo: "Luis Pérez",
    imagenPortada: "/imagenes-noticias/festival-perla.jpg",
    descripcion: "Celebración de la riqueza cultural, gastronómica y musical delEstado NuevaEsparta.",
    contenido: "el festival reúne a reconocidos artistas nacionales e internacionales en una muestra de la diversidad cultural de la región.",
    destacada: false,
    slug: "festival-perla-del-caribe"
  }
];