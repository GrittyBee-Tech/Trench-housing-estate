'use client';

import { categories } from '@/app/utils/constants';
import React, { useState } from 'react';
import Homes from './homes';

const PropertyMenu = () => {
  const [activeFeature, setActiveFeature] = useState<string>('homes');

  const handleClick = (value: string) => {
    setActiveFeature(value);
  };

  return (
    <section className='md:-mt-20'>
      <div className=' container bg-[#FFFFFF] py-8 p-5 rounded-lg'>
        <div className='grid gap-4'>
          <ul className='grid md:grid-flow-col grid-flow-row p-4 md:p-7 gap-11 md:gap-0 gap-y-3 md:gap-y-0 md:justify-between justify-center'>
            {categories.map(({ name, value }) => (
              <li
                key={value}
                onClick={() => handleClick(value)}
                className={`cursor-pointer transition-all ${
                  activeFeature === value
                    ? 'font-semibold xl:text-left text-center font-Montserrat text-sm md:text-lg lg:text-xl text-[#404040] border-b-4 border-primary'
                    : 'font-normal xl:text-left text-center font-Montserrat text-sm md:text-lg lg:text-xl text-[#404040] hover:opacity-75'
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
          <hr className=' lg:mx-7 bg-secondary mt-4 lg:-mt-11' />
          <div className='min-h-24'>
            {activeFeature === 'homes' && <Homes />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyMenu;
