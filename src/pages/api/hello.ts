// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { useEffect, useState } from 'react';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const result = await axios.get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=fe979189-cae7-490e-8cbd-66158a83141d', {
        responseType: 'json'
      }
    );
    console.log(result.data);
    res.status(200).json(result.data);
  }

}
