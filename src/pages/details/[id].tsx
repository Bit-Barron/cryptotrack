import axios from 'axios';
import { useRouter } from 'next/router';

const Details = async () => {
  const router = useRouter();
  const { data } = await axios.get('/api/details', {
    params: {
      id: router.query.id,
    },
  });
  console.log(data)

  return (
    <>
    <div>
    </div>
    </>
  )
};

export default Details;
