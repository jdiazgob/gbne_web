// src/app/api/noticias/route.ts
import { NextResponse } from 'next/server';
import { createNoticia, getNoticias } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validación básica del lado del servidor (opcional pero recomendada)
    if (!data.titulo || !data.categoria || !data.fecha || !data.autor || !data.descripcion || !data.contenido) {
        return NextResponse.json(
            { error: 'Faltan campos requeridos' },
            { status: 400 }
        );
    }

    // Generar slug si no se proporciona
    if (!data.slug) {
        data.slug = data.titulo
            .toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
            .replace(/[^a-z0-9\s-]/g, '') // Quitar caracteres especiales
            .replace(/\s+/g, '-') // Reemplazar espacios por guiones
            .replace(/-+/g, '-') // Reemplazar múltiples guiones por uno solo
            .trim('-'); // Quitar guiones al inicio y al final
    }

    const noticia = await createNoticia(data);
    return NextResponse.json(noticia, { status: 201 });
  } catch (error: any) {
    console.error('Error al crear noticia en la API:', error);
    return NextResponse.json(
      { error: error.message || 'Error al crear noticia' },
      { status: 500 }
    );
  }
}

// También puedes exponer GET aquí si quieres una API pública para las noticias
export async function GET() {
  try {
    const noticias = await getNoticias();
    return NextResponse.json(noticias, { status: 200 });
  } catch (error: any) {
    console.error('Error al obtener noticias en la API:', error);
    return NextResponse.json(
      { error: error.message || 'Error al obtener noticias' },
      { status: 500 }
    );
  }
}