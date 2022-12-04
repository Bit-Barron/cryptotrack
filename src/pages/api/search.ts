// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { CryptoDetails } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CryptoDetails>
) {
  if (req.method === "GET") {
    const query = req.query;
    const { id } = query;
    console.log(id)    

  }
}
