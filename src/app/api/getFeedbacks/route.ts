
import { Pool } from 'pg';

// Create a new PostgreSQL pool using Neon credentials
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Your Neon database URL
});

export async function GET(request: Request) {
  try {
    // Check if the request method is GET
    if (request.method !== 'GET') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const client = await pool.connect();
    try {
      // Fetch data from the database
      const result = await client.query('SELECT * FROM responses');
      return new Response(JSON.stringify(result.rows), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
