import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Details = () => {
  const [isData, setData] = useState<any[]>([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const getData = async () => {
      const res = await axios.post(`/api/details`, {
        id,
      });
      console.log(res.data);
      setData(res.data);
    };
  });

  return (
    <div>
      <h1>Details</h1>
      <div></div>
    </div>
  );
};

export default Details;
