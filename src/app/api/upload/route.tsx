// src/app/api/upload/route.ts
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'Archivo requerido' }, 
        { status: 400 }
      );
    }
    
    // Validar tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Tipo de archivo no permitido. Solo se permiten imágenes JPG, PNG o WebP' }, 
        { status: 400 }
      );
    }
    
    // Validar tamaño (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'El archivo debe ser menor a 5MB' }, 
        { status: 400 }
      );
    }
    
    // Guardar archivo
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const filename = `${nanoid()}-${Date.now()}.${file.type.split('/')[1]}`;
    const filepath = join(process.cwd(), 'public', 'imagenes-noticias', filename);
    
    await writeFile(filepath, buffer);
    
    const url = `/imagenes-noticias/${filename}`;
    return NextResponse.json({ url });
  } catch (error) {
    console.error('Error al subir imagen:', error);
    return NextResponse.json(
      { error: 'Error al subir imagen' }, 
      { status: 500 }
    );
  }
}