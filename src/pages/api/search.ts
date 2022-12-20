// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { query } = req.query;

    const response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': '81d66282-4692-4081-895d-49bf82ad9d8e',
          'Content-Type': 'application/json',
          'Accept-Encoding': 'application/json',
        },
      }
    );
    let { data, status } = response.data;

    let result = data.filter((item: any) => item.name.indexOf(query) > -1);

    return res.status(200).json(result);
  }
}
