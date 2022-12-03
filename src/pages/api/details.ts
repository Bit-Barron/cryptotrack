// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CryptoData } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CryptoData>
) {
    if(req.method === "GET") {
        
    }

}
