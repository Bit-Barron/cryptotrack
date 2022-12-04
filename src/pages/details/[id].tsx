import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
    <>
      <Navbar />
      <div className="flex">
        <div className="ml-10  mr-10 mt-5 w-full rounded-lg bg-[#25262d] p-5">
          <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
            <div className="mb-2 text-2xl font-bold text-white">Details</div>
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
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    Symbol
                  </th>
                  <td className="py-4 px-6">{isData?.data[`${id}`].symbol}</td>
                </tr>
                <th
                  scope="row"
                  className="whitespace-nowrap py-4 px-6 font-medium text-white"
                >
                  Max Supplay
                </th>
                <td className="py-4 px-6">
                  {isData?.data[`${id}`].max_supply}
                </td>
                <tr></tr>
              </tbody>
            </table>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="mb-2 mt-10 text-2xl font-bold text-white">
              Price
            </div>
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <tbody>
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
                    1h
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.percent_change_1h}EUR
                  </td>
                </tr>{" "}
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
                    24h Volumen
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.volume_24h}EUR
                  </td>
                </tr>{" "}
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    24h Volumen
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.volume_24h}EUR
                  </td>
                </tr>{" "}
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 px-6 font-medium text-white"
                  >
                    24h Volumen
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.volume_24h}EUR
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
{
  /* {isData?.data[`${id}`].name} */
}
