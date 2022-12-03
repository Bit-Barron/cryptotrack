import { useRouter } from 'next/router';
import React from 'react';

export const details = async () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div className='container'>
        asd {id} asd
      </div>
    </>
  );
};

export default details;
