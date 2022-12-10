import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { CryptoCurrencyApiResponse } from "../../types";

const Details = () => {
  const [isData, setData] = useState<any>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<CryptoCurrencyApiResponse>(
        `https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false`
      );
      setData(res.data);
      console.log(res.data)
    };
    getData();
    // id && getData();
  }, []);
  console.log(id);
  // const crypto = isData?.data[`${id}`];

  return (
    <div>
      <Navbar />
      <div>Details</div>
      {}
    </div>
  );
};

export default Details;
