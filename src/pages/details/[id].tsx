import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import Navbar from "../../components/Navbar/Navbar";
import { CryptoDetails } from "../../types";

const Details = () => {
  const [isData, setData] = useState<CryptoDetails>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<CryptoDetails>(`/api/details/?id=${id}`);
      setData(res.data);
    };

    id && getData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="ml-52 mt-10 mb-4">
        Cryptocurrencies {">"} Coins {">"}
        <span className="text-white"> {isData?.data[`${id}`].name}</span>
      </div>
      <div className="flex">
        <div className="ml-52 text-4xl font-bold text-white">
          {isData?.data[`${id}`].name}
        </div>
        <div className="ml-4 rounded-lg bg-[#25282A] py-2 px-4 font-bold">
          {isData?.data[`${id}`].symbol}
        </div>
      </div>
      <div className="ml-52 mt-3 flex gap-4">
        <div className="mt-2 rounded-lg bg-[#25282A] p-2 py-1 text-center text-white">
          Rank #1
        </div>
        <div className="mt-2 rounded-lg bg-[#25282A] p-2 py-1 text-center text-white">
          Coin
        </div>
        <div className="mt-2 rounded-lg bg-[#25282A] p-2 py-1 text-center text-white">
          On 3,612,490 watchlists
        </div>
      </div>
      <div className="flex justify-center">
        <div>Bitcoin Price ({isData?.data[`${id}`].symbol})</div>
      </div>
      <div className="flex justify-center">
        <div className="mt-2 ml-32 text-4xl font-bold text-white">
          ${isData?.data[`${id}`].quote.USD.price.toFixed(4)}
        </div>
        <button className="ml-6 mt-4 h-8 rounded bg-red-500 px-4 font-bold text-white hover:bg-red-700">
          {isData?.data[`${id}`].quote.USD.percent_change_1h.toFixed(2)}
        </button>
      </div>
      <div className="mr-10 mt-2 flex justify-center">
        <div className="mr-2">13.37 ETH</div>
        <div className="mt-1 text-red-700">0.94%</div>
      </div>
      <hr />
      <div className="flex text-white">
        <div className="flex">
          Market Cap <BsInfoCircle className="mt-1 mr-32" />
        </div>
        <div className=""> {isData?.data[`${id}`].quote.USD.market_cap}</div>
      </div>
      <div className="ml-24 mt-10 flex justify-center">
        <div>24h Volumen / Market Cap </div>
        <div className=" text-white">
          {isData?.data[`${id}`].quote.USD.volume_24h.toFixed(2)}
        </div>
      </div>
      <hr className="" />
      <div className="flex p-4 font-bold  text-white">
        <div className="ml-40 rounded-lg p-2 hover:bg-gray-700">Overwiev</div>
        <div className="ml-40 rounded-lg p-2 hover:bg-gray-700">Markets</div>
        <div className="ml-40 rounded-lg p-2 hover:bg-gray-700">
          Historical Data
        </div>
        <div className="ml-40 rounded-lg p-2 hover:bg-gray-700">News</div>
        <div className="ml-40 rounded-lg p-2 hover:bg-gray-700">
          Price Estimates
        </div>
        <div className="ml-40 rounded-lg p-2 hover:bg-gray-700">More Info</div>
      </div>
      <hr />

      <div className="mr-10 flex justify-end">
        <button
          className="mt-5 flex justify-end rounded bg-[#25262d] py-2 px-6 font-bold text-white hover:bg-blue-700"
          onClick={(e) => {
            e.preventDefault();
            return router.push("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Details;
{
  /* {isData?.data[`${id}`].name} */
}
