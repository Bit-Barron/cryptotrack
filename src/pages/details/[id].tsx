import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Informations from "../../components/elements/Detail/Informations";
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
        <div className="ml-10 mt-5 w-1/2 rounded-lg bg-[#25262d] p-5">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="mb-2 text-2xl font-bold text-white">Details</div>
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 "
                  >
                    Product name
                  </th>
                  <th
                    scope="col"
                    className=" py-3 px-6"
                  >
                    Symbol
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6"
                  >
                    24h
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 "
                  >
                    7d
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 text-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap  py-4 px-6 font-medium text-gray-900 "
                  >
                    <span className="text-white">
                      {isData?.data[`${id}`].name}
                    </span>
                  </th>
                  <td className="py-4 px-6"> {isData?.data[`${id}`].symbol}</td>
                  <td className=" py-4 px-6 ">
                    {isData?.data[`${id}`].quote.USD.percent_change_24h}
                  </td>
                  <td className=" py-4 px-6 ">
                    {isData?.data[`${id}`].quote.USD.percent_change_7d}
                  </td>
                </tr>
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
                    24 Volumen
                  </th>
                  <td className="py-4 px-6">
                    {isData?.data[`${id}`].quote.USD.volume_24h}EUR
                  </td>
                </tr>
                <th
                  scope="row"
                  className="whitespace-nowrap py-4 px-6 font-medium text-white"
                >
                  Market Cap
                </th>
                <td className="py-4 px-6">
                  {isData?.data[`${id}`].quote.USD.last_updated}
                </td>
              </tbody>
            </table>
          </div>
        </div>
        <div className="ml-52">
          <Informations />
        </div>
      </div>
    </>
  );
};

export default Details;
{
  /* {isData?.data[`${id}`].name} */
}
