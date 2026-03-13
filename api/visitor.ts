import { kv } from "@vercel/kv";

export default async function handler(req: any, res: any) {
  const country = req.headers["x-vercel-ip-country"] || "unknown";
  const userAgent = req.headers["user-agent"] || "unknown";

  const device = /mobile/i.test(userAgent) ? "mobile" : "desktop";

  try {
    if (req.method === "POST") {
      const { visitorId } =
        typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      if (!visitorId) {
        return res.status(400).json({ error: "visitorId missing" });
      }

      const exists = await kv.get(`visitor:${visitorId}`);

      if (!exists) {
        // tandai visitor sudah pernah datang
        await kv.set(`visitor:${visitorId}`, true);

        // tambah total visitor
        await kv.incr("total_visitors");

        // simpan log visitor
        await kv.lpush("visitor_logs", {
          country,
          device,
          date: new Date().toISOString()
        });
      }

      const total = await kv.get("total_visitors");

      return res.json({ visitors: total || 0 });
    }

    if (req.method === "GET") {
      const total = await kv.get("total_visitors");

      // ambil 10 visitor terakhir
      const logs = await kv.lrange("visitor_logs", 0, 9);

      return res.json({
        visitors: total || 0,
        recent_visitors: logs
      });
    }

    return res.status(405).json({ error: "Method not allowed" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}