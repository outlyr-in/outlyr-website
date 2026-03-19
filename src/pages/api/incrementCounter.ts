import type { APIRoute } from 'astro';

export const POST: APIRoute = async () => {
  const url = import.meta.env.PUBLIC_SUPABASE_URL;
  const key = import.meta.env.SUPABASE_SERVICE_KEY;

  if (!url || !key) {
    return new Response(JSON.stringify({ error: 'Missing env vars' }), { status: 500 });
  }

  try {
    const res = await fetch(`${url}/rest/v1/rpc/increment_counter`, {
      method: 'POST',
      headers: {
        'apikey': key,
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('Supabase error:', body);
      return new Response(JSON.stringify({ error: 'Supabase failed' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    console.error('Increment error:', e);
    return new Response(JSON.stringify({ error: 'Network error' }), { status: 500 });
  }
};