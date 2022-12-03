import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

interface headerProps {}

const Header: React.FC<headerProps> = ({}) => {
  return (
    <>
      <header className='p-3 text-center'>
        <div className='gap-4 flex justify-center text-xs'>
          <p className=''>
            Crypto: <code className='text-blue-600'>21,910</code>
          </p>
          <p className=''>
            Exchange: <code className='text-blue-600'>528</code>
          </p>
          <p className=''>
            Market Cap: <code className='text-blue-600'>$859,203,646,495</code>
          </p>
          <p className=''>
            24 Vol: <code className='text-blue-600'>$38,450,640,209</code>
          </p>
          <p className=''>
            Domince:{' '}
            <code className='text-blue-600'>BTC: 38.1% ETH: 18.4%</code>
          </p>
          <p className=''>
            ETH Gas: <code className='text-blue-600'>12 Gewei</code>
          </p>
          <div className='flex text-sm'>
            <div className='ml-20 font-semibold'>English</div>
            <AiOutlineArrowDown className='mt-1' />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;