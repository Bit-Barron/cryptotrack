import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { CryptoDetails } from "../../types";

const Details = () => {
  const [symbol, setSymbol] = useState("");

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
  const crypto = isData?.data[`${id}`];

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Details;
