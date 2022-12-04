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
    <div>
      <Navbar />

      {/* {isData?.data[`${id}`].name} */}
      <div className="flex">
        <div className="mt-10 ml-4 w-[1800px] rounded-lg bg-[#16171b] ">
          <h1 className="text-2xl ml-4 mt-3">{isData?.data[`${id}`].name}</h1>
          <div className="relative mt-10">
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300"></div>
          </div>
          <div className="mt-9 ml-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            possimus qui sed ipsa molestias consequuntur <br />
            omnis natus, dolorum nisi
            <br />
            doloribus, in inventore veritatis ea a. Sunt temporibus nostrum
            <br />
            reprehenderit aliquid?
          </div>
        </div>
        <div className="mt-10 ml-4 w-[1000px] rounded-lg bg-[#16171b]">
          <h1 className="text-2xl">{isData?.data[`${id}`].name}</h1>

          <div className="mt-9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            possimus qui sed ipsa molestias consequuntur <br />
            omnis natus, dolorum nisi
            <br />
            doloribus, in inventore veritatis ea a. Sunt temporibus nostrum
            <br />
            reprehenderit aliquid?
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mt-10 ml-4 w-[1800px] rounded-lg bg-[#16171b] ">
          <h1 className="text-2xl">{isData?.data[`${id}`].name} Statics</h1>
          <div className="relative mt-10">
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300"></div>
          </div>
          <div className="mt-9">Price</div>
          <h1 className="text-xl">${isData?.data[`${id}`].quote.USD.price} </h1>
        </div>
        <div className="mt-10 ml-4 w-[1000px] rounded-lg bg-[#16171b] p-10">
          <div className="mt-9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            possimus qui sed ipsa molestias consequuntur <br />
            omnis natus, dolorum nisi
            <br />
            doloribus, in inventore veritatis ea a. Sunt temporibus nostrum
            <br />
            reprehenderit aliquid? Lorem
          </div>
          <th className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Details;
