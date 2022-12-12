import axios from "axios";
import { useRouter } from "next/router";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react";
import Navbar from "../../components/NavbarContainer";
import { CryptoCurrencyApiResponse } from "../../types";

const Details = () => {
  const [isData, setData] = useState<any>();
  const router = useRouter();
  const { id } = router.query;
  const [datas, setDatas] = useState<any[]>([]);

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
    <div>
      <Navbar />
      {datas.map((data) => (
        <div>{data}</div>
      ))}
    </div>
  );
};

export default Details;
{
  /* {isData?.data[`${id}`].name} */
}
