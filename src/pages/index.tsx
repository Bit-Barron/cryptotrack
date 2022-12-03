import Header from './components/Header';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CryptoData } from '../types';
import {AiFillFire} from 'react-icons/ai'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'

export default function Home() {
  const [coins, setCoins] = useState<CryptoData>();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get<CryptoData>('/api/hello');
      console.log(res.data);
      setCoins(res.data);
    };
    getData();
  }, []);

  return (
    <form>
      <Header />
      <div className='bg-[#191a1e]'>
        <Navbar />
      </div>
      <div>
        <h1 className='font-bold text-2xl text-center mt-5'>
          Today's Cryptocurrency Prices by Market track
        </h1>
      </div>

      <div className='flex gap-3 rounded-lg  justify-center'>
        <div className='w-72 h-20 mx-automt mt-10 bg-[#181a1b] '>
          <div className='mt-2 ml-4 flex'><span className='mt-1 text-red-500'><AiFillFire /></span>Trending</div>
        </div>
        <div className='w-72 h-20 mx-automt mt-10 bg-[#181a1b] '>
        <div className='mt-2 ml-4 flex'><span className='mt-1 text-blue-500'><AiOutlineClockCircle /></span>Recently added</div>
        </div>
        <div className='w-72 h-20 mx-automt mt-10 bg-[#181a1b] '>
        <div className='mt-2 ml-4 flex'><span className='mt-1 text-yellow-500'><AiFillStar /></span>Top Community artivle</div>
        </div>
      </div>

      <div className='overflow-x-auto relative container mt-96 mx-auto '>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-white text-bold uppercase  '>
            <tr>
              <th scope='col' className='py-3 px-6'>
                Name
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
              <th scope='col' className='py-3 px-6'>
                Lash 7 Days
              </th>
            </tr>
          </thead>

          {coins?.data.map((coin) => (
            <>
              <tbody>
                <tr className='border-b dark:border-gray-700'>
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {coin.name}
                  </th>
                  <td className='py-4 px-6'>{coin.quote.USD.price}</td>
                  <td className='py-4 px-6'>
                    {coin.quote.USD.percent_change_1h}
                  </td>
                  <td className='py-4 px-6'>
                    {coin.quote.USD.percent_change_24h}
                  </td>
                  <td className='py-4 px-6'>
                    {coin.quote.USD.percent_change_7d}
                  </td>
                  <td className='py-4 px-6'>{coin.quote.USD.market_cap}</td>
                  <td className='py-4 px-6'>{coin.quote.USD.volume_24h}</td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </form>
  );
}
