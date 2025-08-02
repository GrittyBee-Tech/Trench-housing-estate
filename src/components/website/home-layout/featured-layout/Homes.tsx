'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/icons';
import { ICONS } from '@/constants/icons';
import { useState } from 'react';

const Homes = () => {
  const [dropdown, setDropdown] = useState(false);
  const [priceList, setPriceList] = useState(false);

  const toggleDropDown = () => {
    setDropdown(!dropdown);
  };
  const togglePriceList = () => {
    setPriceList(!priceList);
  };

  return (
    <>
      <div className=' grid xl:grid-flow-col grid-flow-row p-4 md:p-6 gap-y-4 gap-9 lg:gap-16  items-end'>
        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-flow-col w-max gap-2'>
            <span className='lg:block hidden mt-1'>
              <Icon type={ICONS.location_icon} size={20} color='#404040' />
            </span>
            <span className='lg:hidden block'>
              <Icon type={ICONS.location_icon} size={14} color='#404040' />
            </span>
            <p className='text-secondary font-Montserrat text-sm text md:text-xl'>
              Location
            </p>
          </div>
          <div className='relative '>
            <button className=' grid w-full grid-flow-col justify-between items-center bg-[#F2F2F2] py-2 sm:py-3 px-3 p-2 rounded-md'>
              <p className='text-secondary text-base font-Montserrat font-medium'>
                Ikoyi Lagos
              </p>
              {dropdown ? (
                <span onClick={toggleDropDown} className=''>
                  <Icon type={ICONS.chevron_up} size={18} color='#090909' />
                </span>
              ) : (
                <span onClick={toggleDropDown} className=''>
                  <Icon type={ICONS.chevron_down} size={12} color='#090909' />
                </span>
              )}
            </button>
            {dropdown && (
              <div className='bg-gray-25  z-50 absolute  w-full mt-1 border border-gray-300 rounded-lg h-40 dropdown-scroll-bar overflow-y-auto'>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'> Ikoyi Lagos</p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'> Surulere Lagos</p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'> Ajah Lagos</p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'> Ikutu Lagos</p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'> Ikoyi Lagos</p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'> Ikoyi Lagos</p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'> Ikoyi Lagos</p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'> Ikoyi Lagos</p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'> Ikoyi Lagos</p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'> Ikoyi Lagos</p>
              </div>
            )}
          </div>
        </div>
        <div className='grid grid-flow-row  gap-2'>
          <div className='grid grid-flow-col w-max gap-2'>
            <span className='lg:block hidden mt-1'>
              <Icon type={ICONS.bed_icon} size={20} color='#404040' />
            </span>
            <span className='lg:hidden block'>
              <Icon type={ICONS.bed_icon} size={14} color='#404040' />
            </span>
            <p className='text-secondary font-Montserrat text-sm md:text-xl'>
              Bed
            </p>
          </div>
          <div className=''>
            <button className=' grid w-max grid-flow-col justify-between  gap-11 items-center bg-[#F2F2F2] py-2 sm:py-3 px-3 p-2 rounded-md'>
              <p className='text-secondary text-base font-Montserrat font-medium'>
                2
              </p>
              <span>
                <Icon type={ICONS.chevron_down} size={12} color='#090909' />
              </span>
            </button>
          </div>
        </div>
        <div className='grid grid-flow-row gap-2 '>
          <div className='grid grid-flow-col w-max gap-2'>
            <span className='lg:block hidden mt-1'>
              <Icon type={ICONS.toilet_icon} size={20} color='#404040' />
            </span>
            <span className='lg:hidden block'>
              <Icon type={ICONS.toilet_icon} size={14} color='#404040' />
            </span>
            <p className='text-secondary font-Montserrat text-sm md:text-xl'>
              Toilet
            </p>
          </div>
          <div>
            <button className=' grid grid-flow-col justify-between gap-11 items-center bg-[#F2F2F2] py-2 sm:py-3 px-3 p-2 rounded-md'>
              <p className='text-secondary text-base font-Montserrat font-medium'>
                2
              </p>
              <span>
                <Icon type={ICONS.chevron_down} size={12} color='#090909' />
              </span>
            </button>
          </div>
        </div>
        <div className='grid grid-flow-row gap-2 xl:pt-0 pt-3'>
          <div className='grid grid-flow-col w-max gap-2'>
            <span className='lg:block hidden'>
              <Icon type={ICONS.naira_currency} size={16} color='#606060' />
            </span>
            <span className='lg:hidden block'>
              <Icon type={ICONS.naira_currency} size={16} color='#606060' />
            </span>
            <p className='text-secondary font-Montserrat text-sm md:text-xl'>
              Pricing
            </p>
          </div>
          <div className='relative w-full'>
            <button className=' grid grid-flow-col justify-between w-full gap-4 items-center bg-[#F2F2F2] py-2 sm:py-3 px-3 p-2 rounded-md'>
              <p className='text-secondary text-base font-Montserrat font-medium'>
                200,000-500,000
              </p>
              {priceList ? (
                <span onClick={togglePriceList} className=''>
                  <Icon type={ICONS.chevron_up} size={18} color='#090909' />
                </span>
              ) : (
                <span onClick={togglePriceList} className=''>
                  <Icon type={ICONS.chevron_down} size={12} color='#090909' />
                </span>
              )}
            </button>
            {priceList && (
              <div className=' bg-gray-25 w-full z-50 absolute  mt-1 border border-gray-300 rounded-lg h-40 dropdown-scroll-bar overflow-y-auto'>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'>
                  {' '}
                  500,000 - 1,000,000
                </p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'>
                  {' '}
                  1,000,000 - 1,500,000
                </p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'>
                  {' '}
                  1,500,000 - 2,000,000
                </p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'>
                  {' '}
                  2,000,000 - 2,500,000
                </p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'>
                  {' '}
                  2,500,000 - 3,000,000
                </p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'>
                  {' '}
                  3,000,000 - 3,500,000
                </p>
                <p className='py-1 hover:bg-[#F2F2F2] px-3'>
                  {' '}
                  3,500,000 - 4,000,000
                </p>
              </div>
            )}
          </div>
        </div>
        <div className='xl:pt-0 pt-4'>
          <Button
            type='button'
            size='sm'
            variant='secondary'
            className='bg-[#001F3F] grid grid-flow-col w-max items-center px-6 gap-3 py-2 text-white  rounded-md'
          >
            <p className='font-Montserrat font-bold lg:text-base'>Explore</p>
            <span className='lg:block hidden'>
              <Icon type={ICONS.arrow_Right} size={18} color='#FFFFFF' />
            </span>
            <span className='lg:hidden block'>
              <Icon type={ICONS.arrow_Right} size={14} color='#FFFFFF' />
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Homes;
