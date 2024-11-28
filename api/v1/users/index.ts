import type { RequestContext } from '@vercel/edge';
import { getAllUsers } from '../../../src/lib/db';

export const config = {
  runtime: 'edge'
}

export default async function handler(req: Request, ctx: RequestContext) {
  const users = await getAllUsers()

  return new Response(JSON.stringify({ name: 'Project A API', version: 1, resource: 'User', data: users }), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
