import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CryptoDetails } from '../../types';

const Details = () => {
  const [isData, setData] = useState<CryptoDetails>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/api/details`);
      setData(res.data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Details</h1>
      <div></div>
    </div>
  );
};

export default Details;
