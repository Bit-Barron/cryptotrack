import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";
import router from "next/router";
import { useEffect, useState } from "react";
import { NavbarContainer } from "../components/NavbarContainer";
import { CryptoCurrency } from "../types";
import { Button } from "../components/Button";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<string>("");
  const [show, setIsShown] = useState(false);
  const [results, setResults] = useState<CryptoCurrency[]>([]);
  const [exchange, setExchange] = useState<string>("EUR");
  const [data, setData] = useState<any[]>([]);

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
    setPage(page + 1); // change to increment by 1 page instead of 100
  };

  const Search = async (e: any) => {
    console.log("daddy");
    setLoading(true);
    e.preventDefault();

    const { data }: any = await axios.get<any>(`/api/search`, {
      params: {
        query,
      },
    });

    setResults(
      data.filter(
        (item: CryptoCurrency) =>
          item.name.includes(query) || item.symbol.includes(query)
      )
    );
    setLoading(false);
  };

  return (
    <form onSubmit={Search}>
      <NavbarContainer />
      <div className="p-3">
        <div className="mt-3 flex items-center justify-center">
          <Menu>
            <Menu.Button className="mr-5">
              <input
                onChange={(e) => setQuery(e.target.value)}
                id="search"
                name="search"
                className="block w-[900px] rounded-md border border-inputBord bg-inputBg p-3 placeholder:text-inputPlaceholder focus:outline-none"
                placeholder="Search"
                type="search"
              />
            </Menu.Button>
          </Menu>
          <Button onClick={Search as any} text="Search" />
        </div>

        <div className="flex justify-end">
          <Transition
            show={show}
            className="mt-4 h-[600px] w-96 overflow-y-auto rounded-lg bg-[#181a1b] p-4 py-2 font-medium text-gray-400 md:absolute md:mr-10"
          >
            {loading && (
              <div className="mt-52 text-center text-xl font-bold">
                Loading...
              </div>
            )}
            <div>
              <div className="mt-5 text-center">Cryptoassets</div>

              {results?.map((item, idx) => (
                <div
                  key={idx}
                  className="mt-10 flex gap-3 p-2 hover:rounded-lg hover:bg-gray-700"
                  onClick={() =>
                    router.push(
                      `https://coinmarketcap.com/de/currencies/${item.name}/`
                    )
                  }
                >
                  <Image
                    className="h-auto w-auto rounded-full"
                    src={`https://s2.coinmarketcap.com/static/img/coins/${item.id}.png`}
                    alt={item.name}
                  />
                  <div>{item.name}</div>
                  <div>{item.symbol}</div>
                </div>
              ))}
            </div>
          </Transition>
        </div>
      </div>

      <div>
        <h1 className="mt-5 text-center text-2xl font-bold text-white">
          Today is Cryptocurrency Prices by <span>CryptoTrack</span>
        </h1>
        <div className="mt-2 p-2 text-center text-white">
          the crypto market shoots higher and higher into the ceiling
        </div>
      </div>
      <div className="container relative mx-auto mt-10 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
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
              <th scope="col" className="py-3 px-6">
                Last 7 Days
              </th>
            </tr>
          </thead>
          {data.map((coin, idx) => (
            <tbody key={idx}>
              <tr
                className="border-b hover:bg-gray-700 dark:border-gray-700"
                onClick={(e: any) => {
                  e.preventDefault();
                  return router.push(
                    `https://coinmarketcap.com/de/currencies/${coin.name}/`
                  );
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
                <th scope="" className="py-4 px-6 font-medium text-white">
                  {coin.name}
                </th>

                <th scope="" className="py-4 px-6 font-medium text-white">
                  {coin.symbol}
                </th>
                <th
                  className={
                    coin.quote?.[exchange]?.price > 0
                      ? "py-4 px-6 text-green-500"
                      : "py-4 px-6 text-red-500"
                  }
                >
                  <div>
                    {coin?.quote?.[exchange]?.price.toLocaleString() + "€"}
                  </div>
                </th>

                <td
                  className={
                    coin.quote?.[exchange]?.percent_change_1h > 0
                      ? "py-4 px-6 text-green-500"
                      : "py-4 px-6 text-red-500"
                  }
                >
                  {coin?.quote?.[exchange]?.percent_change_1h.toFixed(2)}
                </td>
                <td
                  className={
                    coin.quote?.[exchange]?.percent_change_24h > 0
                      ? "py-4 px-6 text-green-500"
                      : "py-4 px-6 text-red-500"
                  }
                >
                  {coin?.quote?.[exchange]?.percent_change_24h.toFixed(2)}%
                </td>
                <td
                  className={
                    coin.quote?.[exchange]?.percent_change_7d > 0
                      ? "py-4 px-6 text-green-500"
                      : "py-4 px-6 text-red-500"
                  }
                >
                  {coin?.quote?.[exchange]?.percent_change_7d.toFixed(2)}%
                </td>
                <td className="py-4 px-6">
                  {coin?.quote?.[exchange]?.market_cap.toLocaleString()}
                </td>

                <td className="py-4 px-6">
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
          className="mr-2 mb-2 rounded-lg border border-gray-200  py-2.5 px-5 text-sm font-medium text-white hover:bg-gray-400  focus:outline-none focus:ring-4 focus:ring-gray-200"
          onClick={next}
        >
          Next
        </button>
      </div>
    </form>
  );
}
