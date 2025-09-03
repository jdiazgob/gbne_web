// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { getUserByEmail } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email y contraseña son requeridos' }, { status: 400 });
    }

    const user = await getUserByEmail(email);

    if (!user) {
      return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 });
    }

    // *** ADVERTENCIA DE SEGURIDAD ***
    // La comparación de contraseñas en texto plano es insegura.
    // En un entorno de producción, deberías usar una librería como bcrypt para
    // hashear las contraseñas al crearlas y compararlas aquí.
    // Ejemplo con bcrypt: const isValid = await bcrypt.compare(password, user.password);
    const isValid = password === user.password;

    if (!isValid) {
      return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 });
    }

    // No devuelvas la contraseña en la respuesta
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword }, { status: 200 });

  } catch (error: any) {
    console.error('Error en el login:', error);
    return NextResponse.json(
      { error: error.message || 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
