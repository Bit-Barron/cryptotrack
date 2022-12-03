import Header from './components/Header';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/hello');
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
          <span dir='auto'>Today's Cryptocurrency Prices by Market Cap</span>
        </h1>
      </div>
      <div>
        <div>
          {coins.map((coin) => (
            <div>{coin.name}</div>
          ))}  
        </div>
      </div>
    </form>
  );
}
