'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function NuevaNota() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  // Maneja la subida de imagen
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setPreviewImage(data.url);
        // Actualiza el input hidden con la URL
        const hiddenInput = document.getElementById('imagen_url') as HTMLInputElement;
        if (hiddenInput) {
          hiddenInput.value = data.url;
        }
      } else {
        alert(data.error || 'Error al subir imagen');
      }
    } catch (error) {
      alert('Error de conexión al subir imagen');
    } finally {
      setUploading(false);
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    // Convertir destacada a string "true" o "false"
    data.destacada = data.destacada ? "true" : "false";

    try {
      const res = await fetch('/api/noticias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Noticia creada con éxito');
        router.push('/admin/prensa');
        router.refresh();
      } else {
        const error = await res.json();
        alert(error.error || 'Error al crear la noticia');
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
        <CardTitle>Nueva Nota de Prensa</CardTitle>
        <CardDescription>Complete todos los campos para publicar una nota oficial.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título</Label>
                <Input
                  id="titulo"
                  name="titulo"
                  placeholder="Ej: Inauguración de nuevo centro educativo"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="categoria">Categoría</Label>
                <select
                  id="categoria"
                  name="categoria"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="Infraestructura">Infraestructura</option>
                  <option value="Cultura">Cultura</option>
                  <option value="Salud">Salud</option>
                  <option value="Educación">Educación</option>
                  <option value="Economía">Economía</option>
                  <option value="Programas Sociales">Programas Sociales</option>
                  <option value="Turismo">Turismo</option>
                  <option value="Seguridad">Seguridad</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fecha">Fecha</Label>
                <Input
                  id="fecha"
                  name="fecha"
                  type="date"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="autor">Autor</Label>
                <Input
                  id="autor"
                  name="autor"
                  placeholder="Nombre del periodista o redactor"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fotografo">Fotógrafo</Label>
              <Input
                id="fotografo"
                name="fotografo"
                placeholder="Nombre del fotógrafo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imagen">Imagen de Portada</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {uploading && (
                <p className="text-sm text-blue-600">Subiendo imagen...</p>
              )}
              {previewImage && (
                <div className="mt-2">
                  <img
                    src={previewImage}
                    alt="Vista previa"
                    className="w-32 h-32 object-cover rounded-md border"
                  />
                </div>
              )}
              <input type="hidden" id="imagen_url" name="imagen_url" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripción (resumen)</Label>
              <Textarea
                id="descripcion"
                name="descripcion"
                placeholder="Resumen breve de la nota (máx. 500 caracteres)"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contenido">Contenido completo</Label>
              <Textarea
                id="contenido"
                name="contenido"
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
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? 'Guardando...' : 'Publicar Nota'}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}