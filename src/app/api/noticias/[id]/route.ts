// src/app/api/noticias/[id]/route.ts
import { NextResponse } from 'next/server';
import { deleteNoticia } from '@/lib/db';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    if (!id) {
      return NextResponse.json({ error: 'ID de noticia no proporcionado' }, { status: 400 });
    }

    const noticiaEliminada = await deleteNoticia(id);

    if (!noticiaEliminada) {
      return NextResponse.json({ error: 'Noticia no encontrada' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Noticia eliminada con éxito' }, { status: 200 });
  } catch (error: any) {
    console.error('Error al eliminar noticia en la API:', error);
    return NextResponse.json(
      { error: error.message || 'Error al eliminar la noticia' },
      { status: 500 }
    );
  }
}
