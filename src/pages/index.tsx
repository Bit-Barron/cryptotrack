import Header from './components/Header';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [isData, setData] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=fe979189-cae7-490e-8cbd-66158a83141d'
      )
      setData(result.data);
      console.log(result.status);
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
          <span dir='auto'>Today's Cryptocurrency Prices by Market Cap</span>
        </h1>
      </div>
      <div>
        <div>{isData.map((coin) => (
          <div>{coin.name.BellIcon}</div>
        )
      )}</div>
      </div>
    </form>
  );
}
