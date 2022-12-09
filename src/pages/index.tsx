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

  const prev = async () => {
    const response = await axios.get<CryptoCurrencyApiResponse>(
      "/api/nextpage",
      {
        params: {
          page,
        },
      }
    );
    setPage(page - 100);

    cryptoStore.cryptoCurrencies =
      response.data.data.cryptoCurrencyList || cryptoStore.cryptoCurrencies;
  };

  console.log(page)

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await prev();
      await next();
      setLoading(false);
    };
    getData();
  }, []);

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

          {cryptoStore.cryptoCurrencies.map((coin) => (
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
          className="mr-2 mb-2 rounded-lg border border-gray-200 py-2.5 px-5 text-sm font-medium text-white hover:bg-gray-400 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
          onClick={() => prev()}
        >
          Previous
        </button>
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
