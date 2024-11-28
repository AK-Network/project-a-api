import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getAllUsers } from '../../../lib/db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const users = await getAllUsers()
  res.json({ name: 'Project A API', version: 1, resource: 'User', data: users })
}
