import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    let body: any = req.body;

    if (!body) {
      const chunks: Uint8Array[] = [];
      for await (const chunk of req) chunks.push(Buffer.from(chunk));
      const raw = Buffer.concat(chunks).toString('utf8');
      body = raw ? JSON.parse(raw) : {};
    } else if (typeof body === 'string') {
      body = JSON.parse(body);
    }

    const finalUserId = body.userId || 'anonymous';
    const secret = process.env.JWT_SECRET || 'no-secret-key';

    const payload = {
      username: finalUserId,
      userId: finalUserId,
      iat: Math.floor(Date.now() / 1000),
    };

    const token = jwt.sign(payload, secret);
    return res.status(200).json({ token });
  } catch (e) {
    console.error('generate-token error:', e);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}