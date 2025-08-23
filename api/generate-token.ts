import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { userId } = req.body;  // Get userId from request
    const finalUserId = userId || 'anonymous';
    const secret = process.env.JWT_SECRET || 'no-secret-key';
    
    const payload = {
      username: finalUserId,
      userId: finalUserId,
      iat: Math.floor(Date.now() / 1000),
    };
    
    const token = jwt.sign(payload, secret);
    res.status(200).json({ token });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
