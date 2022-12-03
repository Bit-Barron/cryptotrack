// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const query = req.query;
    const { id, name } = query;
    console.log(query.id);
    console.log(query.name);
  }

  res.status(200).json({ message: 'test' });
}
