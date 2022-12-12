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
      `https://api.coinmarketcap.com/dexer/v3/dexer/search/record?keyword=${query}`
    );
    return res.status(200).json(response.data);

  }
}
