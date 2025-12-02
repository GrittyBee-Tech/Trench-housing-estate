'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BuyerFaq from './Buyer';
import AgentsFaq from './Agents';

export default function Faq() {
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get('tab'); // "buyer" or "seller"

  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');

  // Set tab based on URL
  useEffect(() => {
    if (tabFromUrl === 'seller' || tabFromUrl === 'buyer') {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  return (
    <section className='grid container gap-3 mb-4'>
      <div className=' mt-5 md:mt-7'>
        <div className=''>
          <h5 className='font-inter font-bold text-lg md:text-4xl'>
            Frequently Asked Questions
          </h5>
          <p className='mt-3 md:mt-5'>
            We have provided the answers for your questions below
          </p>
        </div>

        <div className='grid grid-cols-2 mt-5  md:mt-7 '>
          <button
            onClick={() => setActiveTab('buyer')}
            className={`py-6 cursor-pointer font-semibold transition-all duration-300 ${
              activeTab === 'buyer'
                ? 'bg-[#001F3F] rounded-xl text-white'
                : 'text-[#8C8C8C]'
            }`}
          >
            Buyers
          </button>

          <button
            onClick={() => setActiveTab('seller')}
            className={`py-6  cursor-pointer font-bold transition-all duration-300 ${
              activeTab === 'seller'
                ? 'bg-[#001F3F] rounded-xl text-white'
                : 'text-[#8C8C8C]'
            }`}
          >
            Property Agent
          </button>
        </div>
        <div className='px-7'>
          <hr className=' border-b-2 bg-[#E6E6E6] ' />
        </div>

        <div className='mt-8 md:mt-9 '>
          {activeTab === 'buyer' ? <BuyerFaq /> : <AgentsFaq />}
        </div>
      </div>
    </section>
  );
}
