'use client';

import Button from '../../ui/Button';
import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { navActions } from '@/app/features/nav-slice';
// import { RootState } from '../../store/store';
import Link from 'next/link';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';
import Icon from '../../ui/icons';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [dropDown, setDropDown] = useState(false);
  // const isOpen = useSelector((state: RootState) => state.nav.isOpen);
  // const activeTab = useSelector((state: RootState) => state.nav.activeTab);
  // const mobileOpen = useSelector((state: RootState) => state.nav.mobileOpen);
  // const dispatch = useDispatch();

  const toggleContent = () => {
    setIsOpen(!isOpen);
    console.log('button clicked');
  };
  // const isActive = (itemId: string) => {
  //   dispatch(navActions.navToggle(itemId));
  // };

  return (
    <section className='relative shadow-lg'>
      <nav className=' px-4 xl:px-24 lg:p-4'>
        <div className='xl:py-4 md:py-5 py-2 grid grid-flow-col mx-auto justify-between items-center'>
          <Link href={'/'}>
            <Image src='/logo.svg' width='150' height='150' alt='logo' />
          </Link>
          <div className='lg:block hidden xl:gap-6 lg:gap-6 pt-2 md:gap-4'>
            <div className='grid grid-flow-col lg:gap-7 p-1 lg:text-lg   '>
              <Link href={'/'}>
                <div

                //   className={`${
                //     activeTab === 'home'
                //       ? 'font-bold text-primary  xl:text-lg lg:text-base  font-Montserrat cursor-pointer border-b-4 border-blue-light-600'
                //       : 'font-normal text-secondary   text-lg xl:text-lg lg:text-base font-Montserrat cursor-pointer'
                //   }`}
                >
                  Home
                </div>
              </Link>
              <Link href={''}>
                <div>
                  <div>
                    {' '}
                    <p className='z-40'>Features</p>
                  </div>
                </div>
              </Link>
              <Link href={'/about'}>
                <div
                // onClick={() => isActive('/about')}
                //   className={`${
                //     activeTab === '/about'
                //       ? 'font-semibold text-primary text-xl xl:text-lg lg:text-base font-Montserrat cursor-pointer border-b-4 border-blue-light-600'
                //       : 'font-normal text-secondary text-lg xl:text-lg lg:text-base font-Montserrat cursor-pointer'
                //   }`}
                >
                  About
                </div>
              </Link>
              <Link href={'/contact'}>
                <div>Contact</div>
              </Link>
              <Link href={'/blog'}>
                <div>Blog</div>
              </Link>
            </div>
          </div>
          <div className='lg:flex hidden gap-6 lg:gap-5'>
            <Button
              type='button'
              size='sm'
              variant='secondary'
              // onClick={}
              className=' border border-blue-light-900 lg:w-[10.6rem] px-6 lg:px-7 xl:px-6 py-2 rounded-md hover:bg-[purple] hover:text-white shadow-md font-bold lg:text-[1rem] font-Roboto'
            >
              Sign in
            </Button>
            <Button
              type='button'
              size='sm'
              variant='secondary'
              // onClick={''}
              className='px-6 lg:px-10 xl:px-6 lg:w-[10.6rem] rounded-md hover:bg-[purple] hover:text-white bg-[#001F3F] text-[#FFFFFF] font-bold lg:text-[1rem] font-Roboto'
            >
              Get Started
            </Button>
          </div>
          <span onClick={toggleContent} className='lg:hidden flex ml-[10rem]'>
            <Icon type={ICONS.hamburger_icon} size={24} color='#1D1B20' />
          </span>
        </div>
      </nav>
      {isOpen && <MobileNavbar />}
      {/* {dropDown && (
        <div className=' lg:block hidden fixed z-30 top-0 left-0 h-full w-full bg-black bg-opacity-50   '>
          <div className=' grid justify-center -ml-60 pt-24 mx-auto'>
            <div className='bg-white  max-w-96 -mt-2  rounded-lg '>
              <div className='p-7'>
                <div className='grid grid-cols-2'>
                  <div className='hover:text-white py-2 px-2 w-full  lg:text-base font-Montserrat hover:bg-[#001F3F] rounded-md'>
                    Buy
                  </div>
                  <div className='hover:text-white py-2 px-2  lg:text-base font-Montserrat hover:bg-[#001F3F] rounded-md'>
                    Rent
                  </div>
                  <div className='hover:text-white py-2  px-2 md:text-base font-Montserrat hover:bg-[#001F3F] rounded-md'>
                    Lease
                  </div>
                  <div className='hover:text-white py-2  px-2 md:text-base font-Montserrat hover:bg-[#001F3F] rounded-md'>
                    Become An Agent
                  </div>
                </div>
                <div className='hover:text-white py-2  px-2 md:text-base font-Montserrat hover:bg-[#001F3F] rounded-md'>
                  Connect with An Agent
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Navbar;
