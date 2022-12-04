import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CryptoDetails } from "../../types";

const Details = () => {
  const [isData, setData] = useState<CryptoDetails>();
  const router = useRouter();
  const { id } = router.query;
  let sum = 1;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<CryptoDetails>(`/api/details/?id=${id}`);
      setData(res.data);
    };

    id && getData();
  }, [id]);

  console.log(isData?.["data"][sum++]);

  return (
    <div>
      <h1>Details</h1>
      <div>
        <h1>{isData?.["data"][sum++]}</h1>
      </div>
    </div>
  );
};

export default Details;
