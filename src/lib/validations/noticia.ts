// src/lib/validations/noticia.ts
import { z } from 'zod';

export const noticiaSchema = z.object({
  titulo: z.string()
    .min(5, 'El título debe tener al menos 5 caracteres')
    .max(200, 'El título no puede exceder 200 caracteres'),
  
  categoria: z.enum([
    'Infraestructura',
    'Cultura',
    'Salud',
    'Educación',
    'Economía',
    'Programas Sociales',
    'Turismo',
    'Seguridad'
  ], {
    errorMap: () => ({ message: 'Categoría no válida' })
  }),
  
  fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Formato de fecha inválido'),
  
  autor: z.string()
    .min(3, 'El autor debe tener al menos 3 caracteres')
    .max(100, 'El autor no puede exceder 100 caracteres'),
  
  fotografo: z.string()
    .min(3, 'El fotógrafo debe tener al menos 3 caracteres')
    .max(100, 'El fotógrafo no puede exceder 100 caracteres'),
  
  descripcion: z.string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(500, 'La descripción no puede exceder 500 caracteres'),
  
  contenido: z.string()
    .min(50, 'El contenido debe tener al menos 50 caracteres'),
  
  destacada: z.boolean().default(false),
  
  imagen_url: z.string().url('URL de imagen inválida').optional().nullable()
});

export type NoticiaInput = z.infer<typeof noticiaSchema>;