'use client';

import Button from '../ui/Button';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navActions } from '@/app/features/nav-slice';
import { RootState } from '../../store/store';
import Link from 'next/link';
import logo from '../../assets/brands/logo.svg';

import { useNavigate, NavLink } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import { ICONS } from '@/constants/icons';
import Icon from '../ui/icons';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const isOpen = useSelector((state: RootState) => state.nav.isOpen);
  const activeTab = useSelector((state: RootState) => state.nav.activeTab);
  // const mobileOpen = useSelector((state: RootState) => state.nav.mobileOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleContent = () => {
    dispatch(navActions.toggle());
  };
  const isActive = (itemId: string) => {
    dispatch(navActions.navToggle(itemId));
  };

  return (
    <section className='relative shadow-lg'>
      <nav className=' px-4 xl:px-24 lg:p-4'>
        <div className='xl:py-4 md:py-5 py-2 grid grid-flow-col mx-auto justify-between items-center'>
          <NavLink to={'/'}>
            <img src={logo} className='lg:w-52' alt='' />
          </NavLink>
          <div className='lg:block hidden xl:gap-6 lg:gap-6  pt-2 md:gap-4'>
            <div className='grid grid-flow-col lg:gap-7 p-1   '>
              <NavLink to={'/'}>
                <div
                  onClick={() => isActive('home')}
                  className={`${
                    activeTab === 'home'
                      ? 'font-bold text-primary  xl:text-lg lg:text-base  font-Montserrat cursor-pointer border-b-4 border-blue-light-600'
                      : 'font-normal text-secondary   text-lg xl:text-lg lg:text-base font-Montserrat cursor-pointer'
                  }`}
                >
                  Home
                </div>
              </NavLink>
              <div
                onClick={() => isActive('properties')}
                className={`${
                  activeTab === 'properties'
                    ? 'font-bold text-primary z-40 xl:text-lg lg:text-base font-Montserrat '
                    : 'font-normal text-secondary xl:text-lg lg:text-base font-Montserrat'
                }`}
              >
                <div
                  onClick={() => setDropDown(!dropDown)}
                  className={` grid grid-flow-col cursor-zoom-in w-max gap-3  z-40 items-center font-normal lg:text-base xl:text-lg font-Montserrat ${
                    dropDown &&
                    'font-bold text-xl grid grid-flow-col items-center justify-between text-white bg-opacity  lg:text-base '
                  }`}
                >
                  {' '}
                  <p className='z-40'>Features</p>
                  {dropDown ? (
                    <span>
                      <Icon type={ICONS.chevron_up} size={24} color='white' />
                    </span>
                  ) : (
                    <span>
                      <Icon
                        type={ICONS.chevron_down}
                        size={18}
                        color='#090909'
                      />
                    </span>
                  )}
                </div>
              </div>
              <NavLink to={'/about'}>
                <div
                  onClick={() => isActive('/about')}
                  className={`${
                    activeTab === '/about'
                      ? 'font-semibold text-primary text-xl xl:text-lg lg:text-base font-Montserrat cursor-pointer border-b-4 border-blue-light-600'
                      : 'font-normal text-secondary text-lg xl:text-lg lg:text-base font-Montserrat cursor-pointer'
                  }`}
                >
                  About
                </div>
              </NavLink>
              <NavLink to={'/contact'}>
                <div
                  onClick={() => isActive('/contact')}
                  className={`${
                    activeTab === '/contact'
                      ? 'font-bold text-primary text-xl xl:text-lg lg:text-base   font-Montserrat cursor-pointer border-b-4 border-blue-light-600'
                      : ' text-secondary xl:text-lg lg:text-base text-lg font-Montserrat cursor-pointer'
                  }`}
                >
                  Contact
                </div>
              </NavLink>
              <HashLink to='/#blog'>
                <div
                  onClick={() => isActive('blog')}
                  className={`${
                    activeTab === 'blog'
                      ? 'font-semibold text-primary text-xl xl:text-lg lg:text-base font-Montserrat cursor-pointer border-b-4 border-blue-light-600'
                      : 'font-normal text-secondary text-lg xl:text-lg lg:text-base font-Montserrat cursor-pointer'
                  }`}
                >
                  Blog
                </div>
              </HashLink>
            </div>
          </div>
          <div className='lg:flex hidden gap-6 lg:gap-5'>
            <Button
              type='button'
              size='sm'
              variant='secondary'
              onClick={() => navigate('/login')}
              className=' border border-blue-light-900 lg:w-[10.6rem] px-6 lg:px-7 xl:px-6 py-2 rounded-md hover:bg-[purple] hover:text-white shadow-md font-bold lg:text-[1rem] font-Roboto'
            >
              Sign in
            </Button>
            <Button
              type='button'
              size='sm'
              variant='secondary'
              onClick={() => navigate('/register')}
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
      {dropDown && (
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
      )}
    </section>
  );
};

export default Navbar;
