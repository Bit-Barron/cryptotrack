import { useRouter } from 'next/router';
import React from 'react';

export const details = async () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <>
      <div className='container'></div>
    </>
  );
};

export default details;
