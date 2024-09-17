/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';

export default function TopSection({ data, setData, API_KEY }) {
  const [searchValue, setSearchValue] = useState('');
  const REQUEST_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${searchValue}`;
  const arrayData = [
    {
      name: 'IP address',
      value: data?.ip,
    },
    {
      name: 'Location',
      value: `${data?.location.region}, ${data?.location.country} ${data?.location.postalCode}`,
    },
    {
      name: 'Timezone',
      value: `GMT ${data?.location.timezone}`,
    },
    {
      name: 'ISP',
      value: `${data?.isp || 'ISP Not Found'}`,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(REQUEST_URL).then((response) => {
      setData(() => response.data);
    });
  };

  return (
    <section className='top lg:h-[35vh] h-[50vh] overflow-visible w-full p-8 space-y-6 lg:px-0'>
      <h1 className='lg:text-3xl text-2xl text-center font-semibold text-white'>
        IP Address Tracker
      </h1>

      <form
        className='relative lg:mx-auto overflow-hidden lg:w-[40%] rounded-2xl'
        onSubmit={(e) => handleSubmit(e)}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className=' p-4 pr-0 lg:pl-6 lg:pr-[4.8rem] w-full'
          placeholder='Search for any IP address or domain'
        />
        <button
          className='absolute p-6 bg-black hover:bg-[#2e2e2e] right-0 top-0 bottom-0'
          type='submit'>
          <img src='/icon-arrow.svg' alt='arrow icon' />
        </button>
      </form>

      <div className='parent bg-white absolute left-1/2 -translate-x-1/2 w-[70%] lg:mt-16 mt-20 flex flex-col flex-wrap lg:flex-row lg:items-center lg:justify-between rounded-2xl p-6 lg:py-10 md:w-[80%] mx-auto z-30 lg:gap-8 gap-6'>
        {arrayData.map((item) => (
          <span
            key={item.name}
            className='text-center lg:text-left lg:p-4 space-y-1'>
            <p className='text-xs uppercase font-semibold text-[#969696]'>
              {item.name}
            </p>
            <p className='text-xl lg:text-2xl font-medium'>
              {data ? item.value : 'Loading...'}
            </p>
          </span>
        ))}
      </div>
    </section>
  );
}
