import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useStores } from "../stores";
import { CryptoCurrencyApiResponse } from "../types";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const cryptoStore = useStores().cryptoStore;

  const next = async () => {
    const response = await axios.get<CryptoCurrencyApiResponse>(
      "/api/nextpage",
      {
        params: {
          page,
        },
      }
    );
    setPage(page + 100);

    cryptoStore.cryptoCurrencies =
      response.data.data.cryptoCurrencyList || cryptoStore.cryptoCurrencies;
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await next();
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <form>
      <Navbar />

      <div className="relativ mr-10">
        <div className="mt-3 flex justify-end">
          <input
            id="search"
            name="search"
            className="flex justify-end rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <div>
        <h1 className="mt-5 text-center text-2xl font-bold text-white">
          Today's Cryptocurrency Prices by Market track
        </h1>
        <div className="mt-2 text-center text-white">
          the crypto market shoots higher and higher into the ceiling
        </div>
      </div>
      <div className="container relative mx-auto mt-10 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 ">
          <thead className="text-bold text-xs uppercase text-white ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Ranks
              </th>
              <th scope="col" className="py-3 px-6">
                Icons
              </th>
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
          {cryptoStore.cryptoCurrencies.map((coin) => (
            <>
              <tbody>
                <tr
                  className="border-b hover:bg-gray-700 dark:border-gray-700 "
                  onClick={(e: any) => {
                    e.preventDefault();
                    return router.push(`/details/${coin.id}`);
                  }}
                >
                  <th scope="" className="px-6 font-medium">
                    {coin.cmcRank}
                  </th>
                  <th className="px-5">
                    <img
                      className="h-8 rounded-full"
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                    />
                  </th>
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
                  <th
                    scope=""
                    className="py-4 px-6 font-medium  
                     text-white"
                  >
                    ${coin.quotes
                      .find((q) => q.name === "USD")
                      ?.price.toFixed(2)}
                  </th>
                  <td className="py-4 px-6 ">
                    {coin.quotes.find((q) => q.name === "USD")?.percentChange1h}
                  </td>
                  <td className="py-4 px-6">
                    {coin.quotes
                      .find((q) => q.name === "USD")
                      ?.percentChange1h.toFixed(2)}
                    %
                  </td>
                  <td className="py-4 px-6">
                    {coin.quotes
                      .find((q) => q.name === "USD")
                      ?.percentChange24h.toFixed(2)}
                    %
                  </td>
                  <td className="py-4 px-6">
                    {coin.quotes
                      .find((q) => q.name === "USD")
                      ?.percentChange7d.toFixed(2)}
                    %
                  </td>
                  <td className="py-4 px-6">
                    $
                    {coin.quotes
                      .find((q) => q.name === "USD")
                      ?.marketCap.toFixed(2)}
                    $
                  </td>
                  <td className="py-4 px-6">
                    $
                    {coin.quotes
                      .find((q) => q.name === "USD")
                      ?.volume24h.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
      {loading && (
        <div className="mt-52 flex justify-center text-3xl font-bold text-white">
          Loading...
        </div>
      )}

      <div className="mt-5 flex justify-center">
        <button
          type="button"
          className="mr-2 mb-2 rounded-lg border border-gray-200  py-2.5 px-5 text-sm font-medium text-white hover:bg-gray-400 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
          onClick={() => next()}
        >
          Next
        </button>
      </div>
    </form>
  );
}
