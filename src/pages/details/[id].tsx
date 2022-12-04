import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Informations from "../../components/elements/Detail/Informations";
import Table from "../../components/elements/Detail/Table";
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
      <div className="flex justify-start mb-10 mt-10">
        <div className="bg-[#25262d] p-10">
          <div className="text-2xl">
            Bitcoin 
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
