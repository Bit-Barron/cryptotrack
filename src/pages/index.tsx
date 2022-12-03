import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CryptoData } from '../types';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Menu, Transition } from '@headlessui/react';
import Profile from './components/Profile';
import Link from 'next/link';
import router from 'next/router';

export default function Home() {
  const [coins, setCoins] = useState<CryptoData>();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<CryptoData>('/api/crypto');
      setCoins(res.data);
    };
    getData();
  }, []);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <form>
      <Navbar />
      <div>
        <h1 className='font-bold text-2xl text-center mt-5 '>
          Today's Cryptocurrency Prices by Market track
        </h1>
      </div>
      <div></div>
      <div className='flex justify-center gap-2'>
        <div className='w-[400px] h-20 mx-automt mt-10 bg-[#181a1b] '>
          <div className='mt-2 ml-4 flex'>
            <span className='mt-1 text-red-500'></span>
            Trending
          </div>
        </div>
        <div className='w-[400px]  h-20 mx-automt mt-10 bg-[#181a1b] '>
          <div className='mt-2 ml-4 flex'>
            <span className='mt-1 text-blue-500'></span>
            Recently added
          </div>
        </div>
        <div className='w-[400px]  h-20 mx-automt mt-10 bg-[#181a1b] '>
          <div className='mt-2 ml-4 flex'>
            <span className='mt-1 '>Top Community artivle</span>
          </div>
        </div>
      </div>

      <div className='overflow-x-auto relative container mt-10 mx-auto'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
          <thead className='text-xs text-white text-bold uppercase  '>
            <tr>
              <th scope='col' className='py-3 px-6'>
                Name
              </th>
              <th scope='col' className='py-3 px-6'>
                Symbol
              </th>
              <th scope='col' className='py-3 px-6'>
                Price
              </th>

              <th scope='col' className='py-3 px-6'>
                1h %
              </th>
              <th scope='col' className='py-3 px-6'>
                24%
              </th>
              <th scope='col' className='py-3 px-6'>
                7d%
              </th>
              <th scope='col' className='py-3 px-6'>
                Market Cap
              </th>
              <th scope='col' className='py-3 px-6'>
                Volume(24h)
              </th>
              {/* <th scope='col' className='py-3 px-6'>
                Lash 7 Days
              </th> */}
            </tr>
          </thead>

          {coins?.data.map((coin) => (
            <>
              <tbody key={coin.id}>
                <tr className='border-b dark:border-gray-700'>
                  <th
                    scope=''
                    className='py-4 px-6 font-medium 
                     text-white'
                  >
                    {coin.name}
                  </th>
                  <th scope='' className='py-4 px-6 font-medium text-white'>
                    {coin.symbol}
                  </th>
                  <td className='py-4 px-6 '>
                    {coin.quote.USD.price.toFixed(2)}
                  </td>
                  <td className='py-4 px-6'>
                    {coin.quote.USD.percent_change_1h.toFixed(2)}%
                  </td>
                  <td className='py-4 px-6'>
                    {coin.quote.USD.percent_change_24h.toFixed(2)}%
                  </td>
                  <td className='py-4 px-6'>
                    {coin.quote.USD.percent_change_7d.toFixed(2)}%
                  </td>
                  <td className='py-4 px-6'>
                    ${coin.quote.USD.market_cap.toFixed(2)}$
                  </td>
                  <td className='py-4 px-6'>
                    ${coin.quote.USD.volume_24h.toFixed(2)}
                  </td>
                  <td>
                    <div className='flex justify-end'>
                      <Menu>
                        <Menu.Button
                          className='ml-10 flex justify-end rounded-md bg-[#25282A] py-2 px-4 text-main'
                          onClick={(e: any) => {
                            e.preventDefault();
                            router.push(`/details/${coin.id}`);
                          }}
                        >
                          details
                        </Menu.Button>
                      </Menu>
                    </div>
                  </td>

                  {/* text-white hover:rounded-full hover:text-white   px-3 py-2 rounded-md text-sm font-medium */}
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </form>
  );
}
