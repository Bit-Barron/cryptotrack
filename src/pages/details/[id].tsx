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
        `/api/details/?id=${id}`
      );
      setData(res.data);
    };

    id && getData();
  }, [id]);

  const crypto = isData?.data[`${id}`];

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="ml-10 mr-10 mt-20 w-full rounded-lg bg-[#151518] p-5">
          <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
            <div className="mb-2 text-2xl font-bold text-white">Details</div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrappy-4 px-6 font-medium text-white"
                  >
                    Name
                  </th>

                  <td className="py-4 px-6">{isData?.data[`${id}`].name}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrappy-4 px-6 font-medium text-white"
                  >
                    Symbol
                  </th>

                  <td className="py-4 px-6">{isData?.data[`${id}`].symbol}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrappy-4 px-6 font-medium text-white"
                  >
                    Price
                  </th>

                  <td className="py-4 px-6">
                    ${isData?.data[`${id}`].quote.USD.price.toFixed(2)}
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    Last Udpdated
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.last_updated}EUR
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    Market Cap
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.market_cap}EUR
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    Volume 24h
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.volume_24h}EUR
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    Volume Change
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.volume_change_24h}EUR
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    fully diluted market cap
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.fully_diluted_market_cap}
                    EUR
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    TVL
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.tvl}EUR
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    1h
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.percent_change_1h}EUR
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    24h
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.percent_change_24h}EUR
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    30d
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.percent_change_30d}EUR
                  </td>
                </tr>{" "}
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    60d
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.percent_change_60d}EUR
                  </td>
                </tr>{" "}
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    7d
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.percent_change_7d}EUR
                  </td>
                </tr>{" "}
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    90d
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.percent_change_90d}EUR
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Details;
{
  /* {isData?.data[`${id}`].name} */
}
