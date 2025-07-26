'use client';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/icons';
import { ICONS } from '@/constants/icons';

const MobileNavbar = () => {
  return (
    <section className='z-100 grid fixed top-0 bg-white w-full h-full  '>
      <nav className=' '>
        <div className='shadow-2xl p-2 '>
          <div className='px-6 grid grid-flow-col items-center justify-between'>
            <span>
              <Image src='/logo.png' width='150' height='150' alt='' />
            </span>
            <span>
              <Icon type={ICONS.close_fill_icon} size={24} color='black' />
            </span>
          </div>
        </div>
        <div className='py-2 grid grid-flow-row gap-5'>
          <div className='grid grid-flow-row justify-items-center   '>
            <div>Home</div>
            <div> Properties</div>
            <div>Contact Us</div>
            <div>Blog</div>
            <div>Become an Agent</div>
          </div>
        </div>
        <div className='grid grid-flow-row px-8 py-3 gap-4'>
          <button
            // onClick={() => navigate('/login')}
            className=' border py-3 border-blue-light-900 bg-white rounded-md hover:bg-[purple] hover:text-white shadow-md font-bold  font-Montserrat'
          >
            Sign in
          </button>
          <button
            // onClick={() => navigate('/register')}
            className=' rounded-md hover:bg-[purple] py-3 hover:text-white bg-[#001F3F] text-[#FFFFFF] font-bold lg:text-[1rem] font-Montserrat'
          >
            Get started
          </button>
        </div>
      </nav>
      {/* {isOpen && (
        <div className="bg-white p-2 transition-opacity shadow-lg flex flex-col gap-2 rounded-md md:w-[9.2rem] absolute top-[5.1rem] xl:left-[24rem] lg:left-[29.4rem]">
          <Button
            type="button"
            size="sm"
            variant="secondary"
            className="hover:text-white py-2 px-3 flex flex-start  lg:text-[1rem] font-Montserrat  hover:bg-[#001F3F] rounded-md"
          >
            Buy
          </Button>
          <Button
            type="button"
            size="sm"
            variant="secondary"
            className="hover:text-white py-2 px-2 flex flex-start lg:text-[1rem] font-Montserrat hover:bg-[#001F3F] rounded-md"
          >
            Rent
          </Button>
          <Button
            type="button"
            size="sm"
            variant="secondary"
            className="hover:text-white py-2 px-2 flex flex-start  md:text-[1rem] font-Montserrat hover:bg-[#001F3F] rounded-md"
          >
            Lease
          </Button>
        </div>
      )} */}
    </section>
  );
};

export default MobileNavbar;
