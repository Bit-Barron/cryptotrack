import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Navbar from "../../components/NavbarContainer";
import { CryptoCurrencyApiResponse } from "../../types";

const Details = () => {
  const [isData, setData] = useState<any>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<CryptoCurrencyApiResponse>(
        `/api/details/?id=${id}`
      );
      setData(res.data);
    };

    id && getData();
  }, [id]);

  const crypto = isData?.data[`${id}`];

  return (
    <div className="">
      <Navbar/>
      <div className="container mx-auto mt-5 p-5">
        <div className="mb-4 flex">
          <span className="flex font-semibold text-[#87b55d]">
            Cryptocurrencies <AiOutlineArrowRight className="mt-1 ml-2" />
          </span>
          <span className="ml-4 font-semibold text-gray-600">
            {crypto?.name} Price
          </span>
        </div>
        <div className="mb-4 text-sm">Rank #{crypto?.cmc_rank}</div>
        <div className=" flex">
          <div className="">
            <img
              className="h-8 rounded-full mr-2"
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto?.id}.png`}
            />
          </div>

          <div className="font-bold  mt-1">
            {crypto?.name}
          </div>
          <div className="mt-1">({crypto?.symbol})</div>
        </div>
        <div className="mt-3 text-2xl font-bold">
          ${crypto?.quote.USD.price.toFixed(2)}
        </div>
        <div className="">
          <div className="mt-5 flex">
            <div className="text-white">Market Cap</div>
            <div className="ml-36">
              {crypto?.quote.USD.market_cap.toFixed(2)}
            </div>
          </div>
          <hr className="h-px w-96 border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="mt-5 flex">
            <div className="text-white">24 Hour Trading Vol</div>
            <div className="ml-[83px]">
              {crypto?.quote.USD.volume_24h.toFixed(5)}
            </div>
          </div>
          <hr className="h-px w-96 border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="mt-5 flex">
            <div className="text-white">Fully Diluted Valuation</div>
            <div className="ml-16">
              {crypto?.quote.USD.fully_diluted_market_cap.toFixed(2)}
            </div>
          </div>
          <hr className="h-px w-96 border-0 bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="mt-16">
          <div className="mt-5 flex">
            <div className="text-white">Market Cap</div>
            <div className="ml-36">
              {crypto?.circulating_supply?.toFixed(4)}
            </div>
          </div>
          <hr className="h-px w-96 border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="mt-5 flex">
            <div className="text-white">24 Hour Trading Vol</div>
            <div className="ml-[83px]">{crypto?.total_supply.toFixed(5)}</div>
          </div>
          <hr className="h-px w-96 border-0 bg-gray-200 dark:bg-gray-700" />
          <div className="mt-5 flex">
            <div className="text-white">Fully Diluted Valuation</div>
            <div className="ml-16">
              {crypto?.max_supply ? (
                <div>{crypto?.max_supply}</div>
              ) : (
                <div>0</div>
              )}
            </div>
          </div>
          <hr className="h-px w-96 border-0 bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="mt-10  w-96">
          <div className="rounded-lg bg-[#1a1c1d] p-9 text-2xl font-bold">
            {crypto?.name} Price Statics
            <div className="mt-10 flex text-sm font-medium">
              <div className="flex">Price</div>
              <div className="ml-40">{crypto?.quote.USD.price.toFixed(2)}</div>
            </div>
            <hr className="mt-5 h-px w-80 border-0 bg-gray-200 dark:bg-gray-700" />
            <div className="mt-10 flex text-sm font-medium">
              <div className="flex">24</div>
              <div className="ml-44">
                {crypto?.quote.USD.percent_change_24h?.toFixed(4)}
              </div>
            </div>
            <hr className="mt-5 h-px w-80 border-0 bg-gray-200 dark:bg-gray-700" />
            <div className="mt-10 flex text-sm font-medium">
              <div className="flex">7d</div>
              <div className="ml-44">
                {crypto?.quote.USD.percent_change_7d.toFixed(4)}
              </div>
            </div>
            <hr className="mt-5 h-px w-80 border-0 bg-gray-200 dark:bg-gray-700" />
            <div className="mt-10 flex text-sm font-medium">
              <div className="flex">Vol</div>
              <div className="ml-[162px]">
                {crypto?.quote.USD.volume_24h.toFixed(2)}
              </div>
            </div>
            <hr className="mt-5 h-px w-80 border-0 bg-gray-200 dark:bg-gray-700" />{" "}
            <div className="mt-10 flex text-sm font-medium">
              <div className="flex">Market_Cap</div>
              <div className="ml-[98px]">
                {crypto?.quote.USD.market_cap.toFixed(2)}
              </div>
            </div>
            <hr className="mt-5 h-px w-80 border-0 bg-gray-200 dark:bg-gray-700" />{" "}
            <div className="mt-10 flex text-sm font-medium">
              <div className="flex">Dominance</div>

              <div className="ml-28">
                {crypto?.quote.USD.market_cap_dominance.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="mt-9 ml-5 text-sm">
            <div className="text-2xl font-bold ">Info</div>
            <div className="mt-9 flex">
              <div>Websites</div>
              <a href={`https://www.${crypto?.name}.org/`} className="ml-8">
                <span className="rounded-lg bg-gray-600 p-2">
                  {crypto?.name}.Org
                </span>
              </a>
              <a
                href={`https://bitcoin.org/${crypto?.name}.pdf`}
                className="ml-2"
              >
                <span className="rounded-lg bg-gray-600 p-2">Whitepaper</span>
              </a>
            </div>
            <div className="mt-16 flex">
              <div>Explorers</div>
              <a
                href={`https://blockchair.com/${crypto?.name.toLowerCase}/`}
                className="ml-8"
              >
                <span className="rounded-lg bg-gray-600 p-2">
                  {crypto?.name}.Org
                </span>
              </a>
            </div>
            <div className="mt-20 flex">
              <div>Community</div>
              <a href={`https://reddit.com/r/${crypto?.name}`} className="ml-5">
                <span className="rounded-lg bg-gray-600 p-2">Reddit</span>
              </a>
              <a href={`https://twitter.com/${crypto?.name}`} className="ml-2">
                <span className="rounded-lg bg-gray-600 p-2">Twitter</span>
              </a>
            </div>
            <div className="mt-16 flex">
              <div>Source code</div>

              <a href={`https://github.com/${crypto?.name}`} className="ml-4">
                <span className="rounded-lg bg-gray-600 p-2">Github</span>
              </a>
            </div>
            <div className="flex mt-9">
              <div>Tags</div>
              <div className="ml-16 rounded-lg bg-gray-600 p-2">Cryptocurrencies</div>
            </div>
          </div> 
         
        </div>
      </div>
    </div>
  );
};

export default Details;
{
  /* {isData?.data[`${id}`].name} */
}
