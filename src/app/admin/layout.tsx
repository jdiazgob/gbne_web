// src/app/admin/layout.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const isAdmin = localStorage.getItem('gbne-admin') === 'true';
      if (!isAdmin) {
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        // Si el usuario está inactivo por 10 minutos, cierra la sesión.
        handleLogout();
      }, 10 * 60 * 1000); // 10 minutos
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Eventos que se consideran actividad del usuario
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    resetTimer(); // Inicia el temporizador cuando el componente se monta

    return () => {
      // Limpia los listeners y el temporizador cuando el componente se desmonta
      clearTimeout(inactivityTimer);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
    };
  }, []); // El array vacío asegura que esto se ejecute solo una vez

  const handleLogout = () => {
    localStorage.removeItem('gbne-admin');
    router.push('/admin/login');
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra superior */}
      <header className="bg-white shadow-sm h-16 flex items-center px-6">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold">GB</span>
          </div>
          <h1 className="text-lg font-semibold text-gray-800">Panel Administrativo GBNE</h1>
        </div>
        <div className="ml-auto flex items-center space-x-6">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">
            ← Volver al sitio
          </Link>
          <button
            onClick={handleLogout}
            className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Menú lateral */}
        <aside className="w-64 bg-white min-h-[calc(100vh-4rem)] shadow-sm">
          <nav className="mt-8 px-4 space-y-2">
            <Link
              href="/admin/prensa"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              📰 Panel de Prensa
            </Link>
          </nav>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}