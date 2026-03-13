import { kv } from "@vercel/kv";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method === "POST") {
    const { visitorId } = JSON.parse(req.body);

    const exists = await kv.get(`visitor:${visitorId}`);

    if (!exists) {
      await kv.set(`visitor:${visitorId}`, true);
      await kv.incr("total_visitors");
    }

    const total = await kv.get("total_visitors");

    return res.json({ visitors: total });
  }

  if (req.method === "GET") {
    const total = await kv.get("total_visitors");
    return res.json({ visitors: total || 0 });
  }
}