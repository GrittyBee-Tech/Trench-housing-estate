'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_SCHEMA } from '@/app/utils/constants';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <section className='sticky bg-white top-0 z-50'>
      <nav className='shadow-lg'>
        <div className='container py-5 grid grid-flow-col mx-auto justify-between items-center'>
          <Link href={'/'}>
            <Image src='/logo.svg' width='150' height='150' alt='logo' />
          </Link>
          <div className='lg:block hidden xl:gap-6 lg:gap-6 pt-2 md:gap-4'>
            <div className='grid grid-flow-col lg:gap-7 p-1 lg:text-lg   '>
              {NAV_SCHEMA.map((r, i) => {
                return (
                  <Link
                    key={i}
                    href={r.link}
                    className={`relative inline-block pb-1 font-inter cursor-pointer transition-all duration-200
                ${
                  pathname === r.link
                    ? "text-[#001A35] font-bold after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-1/2 after:-translate-x-1/2 after:bg-[#890D8B]"
                    : 'text-[#404040]'
                }`}
                  >
                    {r.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className='lg:flex hidden gap-6 lg:gap-5'>
            <button className=' border border-blue-light-900 lg:w-[10.6rem] px-6 lg:px-7 xl:px-6 py-2 rounded-md hover:bg-[purple] hover:text-white shadow-md font-bold lg:text-[1rem] font-Roboto'>
              Sign in
            </button>
            <button className='px-6 lg:px-10 xl:px-6 lg:w-[10.6rem] rounded-md hover:bg-[purple] hover:text-white bg-[#001F3F] text-[#FFFFFF] font-bold lg:text-[1rem] font-Roboto'>
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
