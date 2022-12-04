import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { CryptoList } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CryptoList>
) {
  if (req.method === "GET") {
    const result = await axios.get<CryptoList>(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "fe979189-cae7-490e-8cbd-66158a83141d",
          "Content-Type": "application/json",
          "Accept-Encoding": "application/json",
        },
      }
    );

    res.status(200).json(result.data);
  }
}
