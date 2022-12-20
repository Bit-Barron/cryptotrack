import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { click } = req.query;

    const result = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=${click}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": "81d66282-4692-4081-895d-49bf82ad9d8e",
          "Content-Type": "application/json",
          "Accept-Encoding": "application/json",
        },
      }
    );
    console.log(click);

    return res.status(200).json(result.data);
  }
}
