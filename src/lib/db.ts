// src/lib/db.ts
import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL;

let pool: Pool | null = null;

if (databaseUrl) {
  pool = new Pool({
    connectionString: databaseUrl,
    ssl: process.env.NODE_ENV === 'production' ? {
      rejectUnauthorized: false
    } : false,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
  });
  console.log("ℹ️ Intentando conectar a la base de datos...");
} else {
  console.warn("⚠️ Advertencia: DATABASE_URL no está definida. Algunas funciones no estarán disponibles.");
}

export async function getNoticias() {
  if (!pool) {
    console.warn("⚠️ Sin conexión a BD: Usando datos simulados para noticias.");
    return [
      {
        id: 'sim-1',
        titulo: 'Noticia Simulada 1 (Sin BD)',
        categoria: 'Simulación',
        fecha: new Date().toISOString().split('T')[0],
        autor: 'Sistema',
        fotografo: 'N/A',
        descripcion: 'Esta noticia es un ejemplo porque no hay conexión a la base de datos.',
        contenido: 'Contenido de la noticia simulada...',
        destacada: true,
        slug: 'noticia-simulada-1',
        imagen_url: null,
      },
    ];
  }
  try {
    const client = await pool.connect();
    console.log("✅ Conectado a la base de datos para obtener noticias.");
    const result = await client.query(
      'SELECT * FROM noticias ORDER BY fecha DESC'
    );
    client.release();
    console.log(`ℹ️ Se encontraron ${result.rows.length} noticias.`);
    return result.rows;
  } catch (error) {
    console.error('❌ Error al obtener noticias de la base de datos:', error);
    return [];
  }
}

export async function createNoticia(data: any) {
  if (!pool) {
    throw new Error("❌ Sin conexión a BD: No se puede crear la noticia.");
  }
  try {
    const client = await pool.connect();
    const result = await client.query(
      `INSERT INTO noticias (
        titulo, categoria, fecha, autor, fotografo, 
        descripcion, contenido, destacada, slug, imagen_url
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *`,
      [
        data.titulo,
        data.categoria,
        data.fecha,
        data.autor,
        data.fotografo,
        data.descripcion,
        data.contenido,
        data.destacada || false,
        data.slug,
        data.imagen_url || null
      ]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Error al crear noticia:', error);
    throw error;
  }
}

export async function getNoticiaBySlug(slug: string) {
  if (!pool) {
    console.warn("⚠️ Sin conexión a BD: Buscando en datos simulados.");
    // Fallback to mock data if there is no DB connection
    const noticias = (await import('@/data/noticias.json')).default;
    return noticias.find((noticia) => noticia.slug === slug) || null;
  }
  try {
    const client = await pool.connect();
    const result = await client.query(
      'SELECT * FROM noticias WHERE slug = $1',
      [slug]
    );
    client.release();
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error al obtener noticia por slug:', error);
    return null;
  }
}

export async function deleteNoticia(id: string) {
  if (!pool) {
    throw new Error("❌ Sin conexión a BD: No se puede eliminar la noticia.");
  }
  try {
    const client = await pool.connect();
    const result = await client.query(
      'DELETE FROM noticias WHERE id = $1 RETURNING *',
      [id]
    );
    client.release();
    return result.rows[0];
  } catch (error) {
    console.error('Error al eliminar noticia:', error);
    throw error;
  }
}

// Funciones para usuarios administradores
export async function getUserByEmail(email: string) {
  if (!pool) {
    console.warn("⚠️ Sin conexión a BD: getUserByEmail no disponible.");
    return null;
  }
  try {
    const client = await pool.connect();
    // Asegúrate de que la tabla 'usuarios_admin' tenga estas columnas
    const result = await client.query(
      'SELECT id, email, password, nombre FROM usuarios_admin WHERE email = $1',
      [email]
    );
    client.release();
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error al obtener usuario por email:', error);
    return null;
  }
}
