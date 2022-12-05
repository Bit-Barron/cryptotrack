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
