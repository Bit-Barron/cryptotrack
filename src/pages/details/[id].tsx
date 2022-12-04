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
      <div className="mb-10 mt-10 flex justify-start">
        <div className="relative mb-8 flex w-[900px] min-w-0 flex-col break-words rounded-lg bg-[#25262d] shadow-lg">
          <div className="mb-0 rounded-t bg-transparent px-4 py-3">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-1 flex-grow">
                <h6 className="text-blueGray-500 mb-1 text-xs font-semibold uppercase">
                  Performance
                </h6>
                <h2 className="text-blueGray-800 text-xl font-semibold text-white">
                  Total orders
                </h2>
              </div>
            </div>
          </div>
          <div className="flex-auto p-4">
            <div className="h-350-px relative">
              <canvas width="221" height="291" id="bar-chart"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Informations />
      </div>
    </>
  );
};

export default Details;
{
  /* {isData?.data[`${id}`].name} */
}
