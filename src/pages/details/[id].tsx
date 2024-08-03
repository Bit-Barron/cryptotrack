import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CryptoCurrencyApiResponse } from "../../types";
import { NavbarContainer } from "../../components/NavbarContainer";

const Details = () => {
  const [isData, setData] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);

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

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <NavbarContainer />
      <div className="container mt-5 p-4 md:container md:mx-auto">
        <div className="mb-4 flex  md:flex ">
          <span className="flex font-semibold text-[#87b55d]">
            Cryptocurrencies <AiOutlineArrowRight className="ml-2 mt-1" />
            <span className="ml-2 flex text-white">
              Coins <AiOutlineArrowRight className="ml-2 mt-1" />
            </span>
          </span>
          <span className="ml-4 font-semibold text-white">
            {crypto?.name} Price
          </span>
        </div>
        <div className="mb-6 mt-10 md:flex">
          <div className="flex">
            <Image
              width={60}
              height={80}
              className="mr-2 h-auto w-auto rounded-full"
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto?.id}.png`}
              alt={""}
            />

            <div className="mt-2 text-4xl font-bold">{crypto?.name}</div>
            <div className="ml-3 p-4">
              <span className="rounded-lg bg-[#25282A] p-3">
                ({crypto?.symbol})
              </span>
            </div>
          </div>
          <div className="text-4xl font-bold md:ml-96">
            <div className="text-sm">
              {crypto?.name} ({crypto?.symbol})
            </div>

            <div className="flex">
              ${crypto?.quote.USD.price.toLocaleString()}
              <button
                className={
                  crypto?.quotes?.find((q: any) => q.name === "USD")!
                    .percentChange1h < 0
                    ? "ml-4 rounded  bg-red-500 px-4 text-lg font-bold "
                    : "ml-4 rounded bg-green-500 px-4 text-lg font-bold"
                }
              >
                {crypto?.quote.USD.percent_change_1h.toLocaleString()}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-10 md:flex">
          <div className="flex">
            <div className="rounded-lg bg-[#25282A] p-2">
              Rank #{crypto?.cmc_rank}
            </div>
            <div className="ml-1 rounded-lg bg-[#25282A] p-2">Coin</div>
          </div>
        </div>
        <span className="flex font-bold">
          <Link href={`https://www.${crypto?.name}.org/`} className="">
            <span className="rounded-lg bg-[#25282A] p-2">
              {crypto?.name}.org
            </span>
          </Link>
          <Link
            href={`https://blockchair.com/${crypto?.name.toLowerCase}/`}
            className="8"
          >
            <span className="ml-5 rounded-lg bg-[#25282A] p-2">Explorers</span>
          </Link>
          <Link href={`https://reddit.com/r/${crypto?.name}`} className="ml-5">
            <span className="rounded-lg bg-[#25282A] p-2">Community</span>
          </Link>
        </span>
        <span className="mt-5 flex font-bold">
          <Link href={`https://github.com/${crypto?.name}`}>
            <span className="rounded-lg bg-[#25282A] p-2">Source Code</span>
          </Link>
          <Link
            href={`https://bitcoin.org/${crypto?.name}.pdf`}
            className="ml-5"
          >
            <span className="rounded-lg bg-[#25282A] p-2">Whitepaper</span>
          </Link>
        </span>

        <div className="md:flex">
          <div className="">
            <div className="flex">
              <div className="mt-5 flex">
                <div className="text-white">Market Cap</div>
                <div className="ml-36">
                  {crypto?.quote.USD.market_cap.toLocaleString()}
                </div>
              </div>
            </div>
            <hr className="h-px w-96 border-0 bg-gray-200 dark:bg-gray-700" />
            <div className="mt-5 flex">
              <div className="text-white">24 Hour Trading Vol</div>
              <div className="ml-[83px]">
                {crypto?.quote.USD.volume_24h.toLocaleString()}
              </div>
            </div>
            <hr className="h-px w-96 border-0 bg-gray-200 dark:bg-gray-700" />
            <div className="mt-5 flex">
              <div className="text-white">Fully Diluted Valuation</div>
              <div className="ml-16">
                {crypto?.quote.USD.fully_diluted_market_cap.toLocaleString()}
              </div>
            </div>
            <hr className="mb-5 h-px w-96 border-0 bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>

        <div className="mb-4 mt-4">Tags</div>
        <div className="flex">
          <span className="rounded-full bg-[#25282A] p-2 ">
            {/* {crypto?.tags.splice(0, 1).join(" ")} */}
            mineable
          </span>
          <div className="ml-2 rounded-full bg-[#25282A] p-2">
            {/* {crypto?.tags.splice(1, 1).join(" ")} */}
            pow
          </div>
          <div className="ml-2 rounded-full bg-[#25282A] p-2">
            {/* {crypto?.tags.splice(1, 1).join(" ")} */}
            sh1-256
          </div>
          <div className="ml-4 flex items-center justify-center ">
            <button
              type="button"
              onClick={openModal}
              className=" rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white "
            >
              More
            </button>
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-[#17171a] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    {crypto?.name} Tags
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="border-t pt-2 text-sm text-gray-500">
                      Category
                    </p>
                    <div className="ml-2 p-2 text-white ">
                      {crypto?.tags.join(" ").replace("-", " ")}
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm text-red-900 duration-300 hover:bg-red-200"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default Details;
{
  /* {isData?.data[`${id}`].name} */
}
