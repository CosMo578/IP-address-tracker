/* eslint-disable react-hooks/exhaustive-deps */
import './index.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import TopSection from './components/TopSection';
import BottomSection from './components/BottomSection';

const App = () => {
  const [data, setData] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const REQUEST_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

  useEffect(() => {
    axios.get(REQUEST_URL).then((response) => {
      console.log(response.data);
      setData(() => response.data);
    });
  }, []);

  return (
    <main className='lg:w-screen lg:h-screen overflow-hidden flex flex-col'>
      <TopSection data={data} setData={setData} API_KEY={API_KEY} />
      <BottomSection data={data} />
    </main>
  );
};

export default App;
