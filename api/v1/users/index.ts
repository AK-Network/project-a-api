import type { RequestContext } from '@vercel/edge';

export const config = {
  runtime: 'edge'
}

export default async function handler(req: Request, ctx: RequestContext) {
  // const users = await getAllUsers()

  return new Response(JSON.stringify({ name: 'Project A API', version: 1, resource: 'User' }), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
