import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";
import router from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/NavbarContainer";
import { useStores } from "../stores";
import { CryptoCurrencyApiResponse } from "../types";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const cryptoStore = useStores().cryptoStore;
  const [query, setQuery] = useState<any>("");
  const [show, setIsShown] = useState(false);
  const [results, setResults] = useState<any[]>([]);

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

  const search = async (e: any) => {
    setLoading(true);
    e?.preventDefault();

    const { data }: any = await axios.get<any>(`/api/search`, {
      params: {
        query,
      },
    });

    console.log(data);

    setResults(data);
    setLoading(false);
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
      <div className="p-3">
        <div className="mt-3 flex justify-end">
          <Menu>
            <Menu.Button className="mr-5">
              <input
                onChange={(e) => setQuery(e.target.value)}
                id="search"
                name="search"
                className="flex justify-end rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </Menu.Button>
          </Menu>
          <button
            type="button"
            onClick={() => {
              search(undefined);
              setIsShown(!show);
            }}
            className="mr-3 rounded bg-gray-500 py-1 px-2 font-semibold text-white hover:bg-gray-700"
          >
            search
          </button>
        </div>
        <div className="flex justify-end">
          <Transition
            show={show}
            className="absolute mt-4 h-[600px] w-96 overflow-y-auto rounded-lg bg-[#181a1b] p-4 py-2 font-medium text-gray-400 md:mr-10"
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
                  onClick={() => router.push(`/details/${item.id}`)}
                >
                  <Image
                    className="h-8 rounded-full"
                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}
                    alt={""}
                    height={100}
                    width={30}
                  />
                  <div>{item.name}</div>
                  <div>{item.symbol}</div>
                  <div># {item.cmc_rank}</div>
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
                  <th className="px-6 font-medium">{coin.cmcRank}</th>
                  <th className="p-8 px-5">
                    <Image
                      height={100}
                      width={30}
                      className="h-8 rounded-full"
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                      alt={""}
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
                    className={
                      coin.quotes.find((q) => q.name === "USD")!.price > 0
                        ? "text-green-500 py-4 px-6"
                        : "text-red-500 py-4 px-6"
                    }
                  >
                    $
                    {coin.quotes
                      .find((q) => q.name === "USD")!
                      .price.toFixed(2)}
                  </th>
                  <td
                    className={
                      coin.quotes.find((q) => q.name === "USD")!
                        .percentChange1h > 0
                        ? "text-green-500 py-4 px-6"
                        : "text-red-500 py-4 px-6"
                    }
                  >
                    {coin.quotes.find((q) => q.name === "USD")?.percentChange1h.toFixed(2)}
                  </td>
                  <td
                    className={
                      coin.quotes.find((q) => q.name === "USD")!
                        .percentChange24h > 0
                        ? "text-green-500 py-4 px-6"
                        : "text-red-500 py-4 px-6"
                    }
                  >
                    {coin.quotes
                      .find((q) => q.name === "USD")
                      ?.percentChange24h.toFixed(2)}
                    %
                  </td>
                  <td
                    className={
                      coin.quotes.find((q) => q.name === "USD")!
                        .percentChange7d > 0
                        ? "text-green-500 py-4 px-6"
                        : "text-red-500 py-4 px-6"
                    }
                  >
                    {coin.quotes
                      .find((q) => q.name === "USD")
                      ?.percentChange7d.toFixed(2)}
                    %
                  </td>
                  <td className="py-4 px-6">
                    {coin.quotes
                      .find((q) => q.name === "USD")
                      ?.marketCap.toLocaleString()}$
                  </td>

                  <td className="py-4 px-6">
                    $
                    {coin.quotes
                      .find((q) => q.name === "USD")
                      ?.volume24h.toLocaleString()}
                  </td>
                  <td>
                    <Image
                      height={100}
                      width={150}
                      src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${coin.id}.svg`}
                      alt={""}
                    />
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
          className="mr-2 mb-2 rounded-lg border border-gray-200  py-2.5 px-5 text-sm font-medium text-white hover:bg-gray-400  focus:outline-none focus:ring-4 focus:ring-gray-200"
          onClick={() => next()}
        >
          Next
        </button>
      </div>
    </form>
  );
}
