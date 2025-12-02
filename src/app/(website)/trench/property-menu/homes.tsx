'use client';
import Button from '@/components/Button';
import DropdownSelect from '@/components/dropdownSelect';
import { ArrowRight } from 'lucide-react';
import React from 'react';

import {
  FiMapPin,
  FiHome,
  FiGrid,
  FiDollarSign,
  FiArrowRight,
} from 'react-icons/fi';

const Homes: React.FC = () => {
  return (
    <div className='grid md:grid-flow-col -mt-11 p-5 items-center justify-between  grid-flow-row '>
      {/* Location */}
      <DropdownSelect
        label='Location'
        icon={FiMapPin}
        options={[
          'Ikoyi Lagos',
          'Surulere Lagos',
          'Ajah Lagos',
          'Ikutu Lagos',
          'Lekki Lagos',
          'Yaba Lagos',
        ]}
        defaultValue='Ikoyi Lagos'
        fullWidth
      />

      {/* Bed */}
      <DropdownSelect
        label='Bed'
        icon={FiHome}
        options={['1', '2', '3', '4', '5']}
        defaultValue='2'
      />

      {/* Toilet */}
      <DropdownSelect
        label='Toilet'
        icon={FiGrid}
        options={['1', '2', '3', '4']}
        defaultValue='2'
      />

      {/* Pricing */}
      <DropdownSelect
        label='Pricing'
        icon={FiDollarSign}
        options={[
          '200,000 - 500,000',
          '500,000 - 1,000,000',
          '1,000,000 - 1,500,000',
          '1,500,000 - 2,000,000',
          '2,000,000 - 2,500,000',
          '2,500,000 - 3,000,000',
          '3,000,000 - 3,500,000',
        ]}
        defaultValue='200,000 - 500,000'
        fullWidth
      />

      {/* Explore Button */}
      <div className='xl:pt-0 pt-4'>
        <Button
          type='button'
          size='sm'
          variant='secondary'
          className='bg-[#001F3F] grid grid-flow-col w-max items-center px-6 gap-3 py-2 text-white rounded-md'
        >
          <p className='font-Montserrat font-bold lg:text-base'>Explore</p>
          <span className='lg:block hidden'>
            <ArrowRight size={18} color='#FFFFFF' />
          </span>
          <span className='lg:hidden block'>
            <ArrowRight size={14} color='#FFFFFF' />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Homes;
