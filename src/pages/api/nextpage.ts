// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { page } = req.query;
    console.log(page);

    const response = await axios.get(
      `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=${page}&limit=100`
    );
    console.log(response.data	)
    return res.status(200).json(response.data);

  }
}
