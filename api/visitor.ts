import { kv } from "@vercel/kv";

export default async function handler(req: any, res: any) {
  try {
    if (req.method === "POST") {
      const { visitorId } =
        typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      if (!visitorId) {
        return res.status(400).json({ error: "visitorId missing" });
      }

      const exists = await kv.get(`visitor:${visitorId}`);

      if (!exists) {
        await kv.set(`visitor:${visitorId}`, true);
        await kv.incr("total_visitors");
      }

      const total = await kv.get("total_visitors");

      return res.json({ visitors: total || 0 });
    }

    if (req.method === "GET") {
      const total = await kv.get("total_visitors");
      return res.json({ visitors: total || 0 });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}