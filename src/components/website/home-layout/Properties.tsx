'use client';

import Button from '../ui/Button';
import { useState } from 'react';
import Sales from './properties-layout/Sales';

const Properties = () => {
  const [activeTab, setActiveTab] = useState('buy');
  return (
    <section className='w-full gap-6'>
      <div className='px-7 sm:px-12 xl:px-24 pt-7 md:pt-11 md:pb-16'>
        <h3 className='grid lg:justify-normal justify-center lg:mx-auto  font-bold font-Montserrat text-[#001A35] text-3xl md:text-5xl'>
          Properties
        </h3>
        <div className='grid grid-flow-col w-max mx-auto mt-4 justify-center  gap-3'>
          <Button
            onClick={() => setActiveTab('buy')}
            type='button'
            size='sm'
            variant='secondary'
            className={` ${
              activeTab === 'buy'
                ? 'px-5 py-2 md:py-3 bg-[#001F3F] text-sm lg:text-base text-[#FFFFFF] font-Montserrat border border-[#001F3F] rounded-md'
                : 'px-5 py-2 md:py-3 border text-sm lg:text-base border-[#001F3F] font-Montserrat rounded-md'
            }`}
          >
            Buy
          </Button>
          <Button
            onClick={() => setActiveTab('rent')}
            type='button'
            size='sm'
            variant='secondary'
            className={` ${
              activeTab === 'rent'
                ? 'px-5 py-2 md:py-3 bg-[#001F3F] text-sm lg:text-base text-[#FFFFFF] font-Montserrat border border-[#001F3F] rounded-md'
                : 'px-5 py-2 md:py-3 border text-sm lg:text-base border-[#001F3F] font-Montserrat rounded-md'
            }`}
          >
            Rent
          </Button>
          <Button
            onClick={() => setActiveTab('lease')}
            type='button'
            size='sm'
            variant='secondary'
            className={` ${
              activeTab === 'lease'
                ? 'px-5 py-2 md:py-3 bg-[#001F3F] text-sm lg:text-base text-[#FFFFFF] font-Montserrat border border-[#001F3F] rounded-md'
                : 'px-5 py-2 md:py-3 border text-sm lg:text-base border-[#001F3F] font-Montserrat rounded-md'
            }`}
          >
            Lease
          </Button>
        </div>
        {activeTab === 'buy' && <Sales />}
      </div>
    </section>
  );
};

export default Properties;
