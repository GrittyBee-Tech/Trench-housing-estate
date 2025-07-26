'use client';

import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../ui/icons';

const Footer = () => {
  return (
    <footer className='bg-[#001A35] text-white px-8 sm:px-12 py-8 xl:p-24 flex gap-8 lg:flex-row flex-col items-start justify-between'>
      <Image
        src='/logo-white.png'
        width='180'
        height='180'
        alt=''
        className=''
      />
      <ul className='flex flex-col gap-4'>
        <li className='font-medium font-Montserrat lg:text-base text-lg'>
          <Link href='/blog'>Blog</Link>
        </li>
        <li className='font-medium font-Montserrat lg:text-base text-lg'>
          <Link href='/about'>About Us</Link>
        </li>
        <li className='font-medium font-Montserrat lg:text-base text-lg'>
          <Link href='/'>Contact Us</Link>
        </li>
      </ul>

      <ul className='flex flex-col gap-4'>
        <li className='font-medium font-Montserrat lg:text-base text-lg'>
          <Link href='/'>Privacy Policy</Link>
        </li>
        <li className='font-medium font-Montserrat lg:text-base text-lg'>
          <Link href='/'>Terms and Conditions</Link>
        </li>
        <li className='font-medium font-Montserrat lg:text-base text-lg'>
          <Link href='/'>Frequently asked Questions</Link>
        </li>
      </ul>

      <ul className='flex flex-col gap-3'>
        <li className='flex gap-3 items-start'>
          <Icon size={24} color='white' type='location_icon' />
          <p className='font-Montserrat lg:text-base text-lg'>
            Lorem ipsum dolor sit
            <br /> amet, consectetur
          </p>
        </li>
        <li className='flex gap-3 items-start'>
          <Icon size={24} color='white' type='mail_icon' />
          <p className='font-Montserrat lg:text-base text-lg'>
            trenchhousing@yahoo.com
          </p>
        </li>
        <li className='flex gap-3 items-start'>
          <Icon size={24} color='white' type='location_icon' />
          <p className='font-Montserrat lg:text-base text-lg'>(239) 555-0108</p>
        </li>
      </ul>

      <ul className='flex flex-col gap-4'>
        <li className='flex gap-2 items-start'>
          <Icon size={24} color='white' type='fb_icon' />
          <p>@Trenchhousing</p>
        </li>
        <li className='flex gap-2 items-start'>
          <Icon size={24} color='white' type='ig_icon' />
          <p>@Trenchhousing</p>
        </li>
        <li className='flex gap-2 items-start'>
          <Icon size={24} color='white' type='twitter_icon' />
          <p>@Trenchhousing</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
