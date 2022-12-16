// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { query } = req.query;

    const response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": "fe979189-cae7-490e-8cbd-66158a83141d",
          "Content-Type": "application/json",
          "Accept-Encoding": "application/json",
        },
      }
    );
    console.log(response.data);

    return res.status(200).json(response.data);
  }
}