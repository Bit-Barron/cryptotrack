import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";
import router from "next/router";
import { useEffect, useState } from "react";
import { NavbarContainer } from "../components/NavbarContainer";
import { CryptoCurrency } from "../types";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<string>("");
  const [exchange, setExchange] = useState<string>("EUR");
  const [data, setData] = useState<CryptoCurrency[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("/api/price", {
        params: {
          exchange,
          page,
        },
      });
      setData(response.data.data);
    };
    fetch();
  }, [page, exchange]);

  const next = async () => {
    await axios.get("/api/nextpage", {
      params: {
        page,
      },
    });
    setPage(page + 1);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.symbol.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <NavbarContainer />

      <div>
        <h1 className="mt-5 text-center text-2xl font-bold text-white">
          Todays Cryptocurrency Prices by <span>CryptoTrack</span>
        </h1>
        <div className="mt-2 p-2 text-center text-white">
          The crypto market shoots higher and higher into the ceiling
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for cryptocurrency..."
            className="mr-2 w-[600px] rounded-lg border bg-transparent p-2"
          />
        </div>
      </div>
      <div className="container relative mx-auto mt-10 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-bold text-xs uppercase text-white ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ranks
              </th>
              <th scope="col" className="px-6 py-3">
                Icons
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Symbol
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>

              <th scope="col" className="px-6 py-3">
                1h %
              </th>
              <th scope="col" className="px-6 py-3">
                24%
              </th>
              <th scope="col" className="px-6 py-3">
                7d%
              </th>
              <th scope="col" className="px-6 py-3">
                Market Cap
              </th>
              <th scope="col" className="px-6 py-3">
                Volume(24h)
              </th>
              <th scope="col" className="px-6 py-3">
                Last 7 Days
              </th>
            </tr>
          </thead>
          {filteredData.map((coin: any, idx) => (
            <tbody key={idx}>
              <tr
                className="border-b hover:bg-gray-700 dark:border-gray-700"
                onClick={(e: any) => {
                  e.preventDefault();
                  return router.push(`/details/${coin.id}`);
                }}
              >
                <th className="px-6 font-medium">{coin.cmc_rank}</th>
                <th className="p-8 px-5">
                  <Image
                    height={10}
                    width={30}
                    className="h-auto w-auto rounded-full"
                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                    alt={coin.name}
                  />
                </th>
                <th scope="" className="px-6 py-4 font-medium text-white">
                  {coin.name}
                </th>

                <th scope="" className="px-6 py-4 font-medium text-white">
                  {coin.symbol}
                </th>
                <th
                  className={
                    coin.quote?.[exchange]?.price > 0
                      ? "px-6 py-4 text-green-500"
                      : "px-6 py-4 text-red-500"
                  }
                >
                  <div>
                    {coin?.quote?.[exchange]?.price.toLocaleString() + "€"}
                  </div>
                </th>

                <td
                  className={
                    coin.quote?.[exchange]?.percent_change_1h > 0
                      ? "px-6 py-4 text-green-500"
                      : "px-6 py-4 text-red-500"
                  }
                >
                  {coin?.quote?.[exchange]?.percent_change_1h.toFixed(2)}
                </td>
                <td
                  className={
                    coin.quote?.[exchange]?.percent_change_24h > 0
                      ? "px-6 py-4 text-green-500"
                      : "px-6 py-4 text-red-500"
                  }
                >
                  {coin?.quote?.[exchange]?.percent_change_24h.toFixed(2)}%
                </td>
                <td
                  className={
                    coin.quote?.[exchange]?.percent_change_7d > 0
                      ? "px-6 py-4 text-green-500"
                      : "px-6 py-4 text-red-500"
                  }
                >
                  {coin?.quote?.[exchange]?.percent_change_7d.toFixed(2)}%
                </td>
                <td className="px-6 py-4">
                  {coin?.quote?.[exchange]?.market_cap.toLocaleString()}
                </td>

                <td className="px-6 py-4">
                  {coin?.quote?.[exchange]?.volume_24h.toLocaleString()}
                </td>
                <td>
                  <Image
                    height={100}
                    width={300}
                    className="h-auto w-auto"
                    src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${coin.id}.svg`}
                    alt={coin.name}
                  />
                </td>
              </tr>
            </tbody>
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
          className="mb-2 mr-2 rounded-lg border border-gray-200  px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-400  focus:outline-none focus:ring-4 focus:ring-gray-200"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}
