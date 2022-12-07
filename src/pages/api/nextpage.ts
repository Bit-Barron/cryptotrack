// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { page } = req.body
    const response = await axios.get("https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=100")
    console.log(response.data)
    return res.status(200).json({ data: response.data })  
  }
}
