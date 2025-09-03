// src/app/admin/prensa/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Noticia } from '@/data/noticias';

export default function PanelPrensa() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await fetch('/api/noticias');
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        setNoticias(data);
      } catch (err) {
        setError('No se pudieron cargar las noticias.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar esta noticia?')) {
      return;
    }

    try {
      const res = await fetch(`/api/noticias/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setNoticias(noticias.filter((noticia) => noticia.id !== id));
        alert('Noticia eliminada con éxito.');
      } else {
        const data = await res.json();
        alert(data.error || 'Error al eliminar la noticia.');
      }
    } catch (err) {
      alert('Error de conexión al eliminar la noticia.');
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gestión de Notas de Prensa</h1>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/admin/prensa/nueva">+ Nueva Nota</Link>
        </Button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Título</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Categoría</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan={4} className="text-center py-8">
                  Cargando noticias...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={4} className="text-center py-8 text-red-600">
                  {error}
                </td>
              </tr>
            ) : noticias.length > 0 ? (
              noticias.map((noticia) => (
                <tr key={noticia.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{noticia.titulo}</td>
                  <td className="px-6 py-4">{noticia.categoria}</td>
                  <td className="px-6 py-4">
                    {new Date(noticia.fecha).toLocaleDateString('es-VE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/prensa/editar/${noticia.id}`}>Editar</Link>
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(noticia.id)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-8">
                  No hay noticias para mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
