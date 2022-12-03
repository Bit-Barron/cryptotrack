import { COMPILER_INDEXES } from 'next/dist/shared/lib/constants';
import { useRouter } from 'next/router';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Details {}</h1>
    </div>
  );
};
export default Details;
