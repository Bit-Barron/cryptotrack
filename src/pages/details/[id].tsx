import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CryptoDetails } from "../../types";

const Details = () => {
  const [isData, setData] = useState<CryptoDetails>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<CryptoDetails>(`/api/details/?id=${id}`);
      setData(res?.["data"]["2"]);
    };

    id && getData();
  }, [id]);

  console.log(isData?.["data"]["2"]);

  return (
    <div>
      <h1>Details</h1>
      <div>
        <h2>{isData && <div>{isData && (
          <div>{}</div>
        )}</div>}</h2>
      </div>
    </div>
  );
};

export default Details;
