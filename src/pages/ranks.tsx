import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useStores } from "../stores";
import { CryptoCurrencyApiResponse } from "../types";

interface ranksProps {}

const ranks: React.FC<ranksProps> = ({}) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<CryptoCurrencyApiResponse>("/api/list");
      setData(res.data.data.cryptoCurrencyList || data);
      console.log(res.data);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="mt-10 flex justify-center text-3xl font-bold text-white">
        Popularity
      </h1>
      <div className="flex justify-center">
        <div className="mt-10 ml-3 w-1/4 rounded-full bg-[#171616] p-5">
          asd
        </div>
        <div className="mt-10 ml-3 w-1/4 rounded-full bg-[#171616] p-5">
          asd
        </div>
        <div className="mt-10 ml-3 w-1/4 rounded-full bg-[#171616] p-5">
          asd
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="mt-10 ml-3 w-1/4 rounded-full bg-[#171616] p-5">
          asd
        </div>
        <div className="mt-10 ml-3 w-1/4 rounded-full bg-[#171616] p-5">
          asd
        </div>
        <div className="mt-10 ml-3 w-1/4 rounded-full bg-[#171616] p-5">
          asd
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="mt-10 ml-3 w-1/4 rounded-full bg-[#171616] p-5">
          asd
        </div>
        <div className="mt-10 ml-3 w-1/4 rounded-full bg-[#171616] p-5">
          asd
        </div>
        <div className="mt-10 ml-3 w-1/4 rounded-full bg-[#171616] p-5">
          asd
        </div>
      </div>
      {data?.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        <div className="text-2xl text-white">{item.name}</div>
      ))}
    </div>
  );
};

export default ranks;
