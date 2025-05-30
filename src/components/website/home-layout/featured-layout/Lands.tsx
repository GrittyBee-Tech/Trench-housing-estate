'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/icons';
import { ICONS } from '@/constants/icons';

const Lands = () => {
  return (
    <section>
      <div className=' md:p-6  md:gap-[4rem] flex md:flex-nowrap flex-wrap '>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <span className='text-[0.8rem] md:text-[1.25rem]'></span>
            <p className='text-secondary  font-Montserrat text-[0.6rem] lg:text-[1.25rem]'>
              Location
            </p>
          </div>
          <select className='bg-[#F2F2F2] lg:py-3 lg:px-3 text-secondary text-[0.6rem] lg:text-[1rem] font-Montserrat font-medium p-2 rounded-md'>
            <option>Ikoyi Lagos</option>
          </select>
        </div>
        <div className='md:flex flex-col gap-2'>
          <div className='flex'>
            <span></span>
            <p className='text-secondary font-Montserrat text-[0.6rem] lg:text-[1.25rem]'>
              Bed
            </p>
          </div>
          <select className='bg-[#F2F2F2] lg:py-3 lg:px-3 text-secondary  text-[0.6rem] lg:text-[1rem] font-Montserrat font-medium rounded-md'>
            <option>2</option>
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex'>
            <span></span>
            <p className='text-secondary font-Montserrat text-[0.6rem] md:text-[1.25rem]'>
              Toilet
            </p>
          </div>
          <select className='bg-[#F2F2F2] lg:py-3 px-2 py-2 lg:px-4 rounded-md text-secondary  text-[0.6rem] lg:text-[1rem] font-Montserrat font-medium'>
            <option>2</option>
          </select>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <span>
              <Icon type={ICONS.naira_currency} size={14} color='#606060' />
            </span>
            <p className='text-secondary font-Montserrat text-[0.6rem] lg:text-[1.25rem]'>
              Pricing
            </p>
          </div>
          <select className='bg-[#F2F2F2] px-2 py-2 lg:py-3 lg:px-5 rounded-md text-secondary text-[0.6rem] lg:text-[1rem] font-Montserrat font-medium'>
            <option className='text-secondary text-[0.6rem] lg:text-[1rem] font-Montserrat font-medium'>
              1,800,000-2,000,000
            </option>
          </select>
        </div>
        <div className='flex mt-3 md:ml-[5rem]'>
          <Button
            type='button'
            size='sm'
            variant='secondary'
            className='bg-[#001F3F] flex items-center mx-auto px-7 gap-4  py-5 md:mt-7 text-white h-[40px] rounded-md'
          >
            <p>Explore</p>
            <span></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Lands;
