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
