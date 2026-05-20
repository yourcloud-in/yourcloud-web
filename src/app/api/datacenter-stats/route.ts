import { NextResponse } from 'next/server';

// Cache solar + datacenter stats for 15 seconds to avoid hammering the API
let cache: { data: unknown; ts: number } | null = null;
const CACHE_TTL = 15_000;

export async function GET() {
  try {
    if (cache && Date.now() - cache.ts < CACHE_TTL) {
      return NextResponse.json(cache.data);
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.yourcloud.in';

    const [solarRes, statusRes] = await Promise.allSettled([
      fetch(`${apiUrl}/api/v1/datacenter/solar`, { next: { revalidate: 15 } }),
      fetch(`${apiUrl}/api/v1/datacenter/status`, { next: { revalidate: 15 } }),
    ]);

    const solar  = solarRes.status  === 'fulfilled' && solarRes.value.ok
      ? await solarRes.value.json()
      : null;
    const status = statusRes.status === 'fulfilled' && statusRes.value.ok
      ? await statusRes.value.json()
      : null;

    const data = {
      solar:    solar?.data  ?? null,
      nodes:    status?.data ?? null,
      fetchedAt: new Date().toISOString(),
    };

    cache = { data, ts: Date.now() };

    return NextResponse.json(data);
  } catch (err) {
    console.error('Datacenter stats route error:', err);
    return NextResponse.json({ solar: null, nodes: null, error: true }, { status: 200 });
  }
}
