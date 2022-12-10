import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createNoSubstitutionTemplateLiteral } from "typescript";
import Navbar from "../../components/Navbar/Navbar";
import { CryptoCurrencyApiResponse } from "../../types";

const Details = () => {
  const [isData, setData] = useState<any>();
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<CryptoCurrencyApiResponse>(
        `https://api.coingecko.com/api/v3/coins/${name}?localization=false&tickers=false&market_data=false&community_data=false        `
      );
      setData(res.data);
    };
    name && getData();
  }, [name]);

  console.log(name)
  console.log(name)
  
  const crypto = isData?.[`${name}`];

  return (
    <div>
      <Navbar />
      <div>{crypto?.name}</div>
    </div>
  );
};

export default Details;
