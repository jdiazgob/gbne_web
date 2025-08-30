// src/app/admin/noticias/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminNoticias() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Panel de Noticias</h1>
        <Button className="bg-green-600">+ Nueva Noticia</Button>
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
            <tr>
              <td className="px-6 py-4">Modernización del Puerto</td>
              <td className="px-6 py-4">Infraestructura</td>
              <td className="px-6 py-4">20/03/2024</td>
              <td className="px-6 py-4">
                <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                <Button variant="destructive" size="sm">Eliminar</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}