import axios from "axios";
import router from "next/router";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { CryptoList } from "../types";

export default function Home() {
  const [coins, setCoins] = useState<CryptoList>();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const response = await axios.get("/api/nextpage");
    console.log(response.data);
  }

  if (loading) {
    return (
      <div className="mt-52 flex justify-center text-2xl font-bold text-white">
        Loading...
      </div>
    );
  }
  return (
    <form>
      <Navbar />
      <div>
        <h1 className="mt-5 text-center text-2xl font-bold">
          Today's Cryptocurrency Prices by Market track
        </h1>
      </div>

      <div className="container relative mx-auto mt-10 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 ">
          <thead className="text-bold text-xs uppercase text-white  ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Symbol
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>

              <th scope="col" className="py-3 px-6">
                1h %
              </th>
              <th scope="col" className="py-3 px-6">
                24%
              </th>
              <th scope="col" className="py-3 px-6">
                7d%
              </th>
              <th scope="col" className="py-3 px-6">
                Market Cap
              </th>
              <th scope="col" className="py-3 px-6">
                Volume(24h)
              </th>
            </tr>
          </thead>

          {coins?.data.map((coin) => (
            <>
              <tbody>
                <tr
                  className="border-b hover:bg-gray-700 dark:border-gray-700"
                  onClick={(e: any) => {
                    e.preventDefault();
                    return router.push(`/details/${coin.id}`);
                  }}
                >
                  <th
                    scope=""
                    className="py-4 px-6 font-medium  
                     text-white"
                  >
                    {coin.name}
                  </th>
                  <th scope="" className="py-4 px-6 font-medium text-white">
                    {coin.symbol}
                  </th>
                  <td className="py-4 px-6 ">
                    {coin.quote.USD.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-6">
                    {coin.quote.USD.percent_change_1h.toFixed(2)}%
                  </td>
                  <td className="py-4 px-6">
                    {coin.quote.USD.percent_change_24h.toFixed(2)}%
                  </td>
                  <td className="py-4 px-6">
                    {coin.quote.USD.percent_change_7d.toFixed(2)}%
                  </td>
                  <td className="py-4 px-6">
                    ${coin.quote.USD.market_cap.toFixed(2)}$
                  </td>
                  <td className="py-4 px-6">
                    ${coin.quote.USD.volume_24h.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
      <button
        className="mx-auto mt-2 flex rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => getData()}
        type="button"
      >
        Next
      </button>
    </form>
  );
}
