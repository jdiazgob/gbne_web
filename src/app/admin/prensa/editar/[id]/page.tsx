// src/app/admin/prensa/editar/[id]/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditarNota({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const res = await fetch(`/api/noticias/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        router.push('/admin/prensa');
        router.refresh();
      } else {
        alert('Error al editar la noticia');
      }
    } catch (error) {
      alert('Error de conexión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Editar Nota de Prensa</CardTitle>
        <CardDescription>Modifica los campos necesarios y guarda los cambios.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título</Label>
                <Input id="titulo" name="titulo" placeholder="Ej: Inauguración de nuevo centro educativo" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="categoria">Categoría</Label>
                <select id="categoria" name="categoria" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="Infraestructura">Infraestructura</option>
                  <option value="Cultura">Cultura</option>
                  <option value="Salud">Salud</option>
                  <option value="Educación">Educación</option>
                  <option value="Economía">Economía</option>
                  <option value="Programas Sociales">Programas Sociales</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fecha">Fecha</Label>
                <Input id="fecha" name="fecha" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="autor">Autor</Label>
                <Input id="autor" name="autor" placeholder="Nombre del periodista o redactor" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripción (resumen)</Label>
              <Textarea
                id="descripcion"
                name="descripcion"
                placeholder="Resumen breve de la nota (máx. 200 caracteres)"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contenidos">Contenido completo</Label>
              <Textarea
                id="contenidos"
                name="contenidos"
                placeholder="Desarrollo completo de la nota..."
                rows={8}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="destacada" name="destacada" className="w-4 h-4" />
              <Label htmlFor="destacada">Marcar como noticia destacada</Label>
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <Button variant="outline" asChild type="button">
                <Link href="/admin/prensa">Cancelar</Link>
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                {isLoading ? 'Guardando...' : 'Guardar Cambios'}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}