// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { search } = req.query;

    const response = await axios.post(
      `https://api.coinmarketcap.com/dexer/v3/dexer/search/record?keyword=${search}`
    );
    console.log(response.data);
    return res.status(200).json({ name: response.data });
  }
}
