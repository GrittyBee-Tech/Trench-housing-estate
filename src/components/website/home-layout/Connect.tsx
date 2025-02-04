import Image from 'next/image';
import Button from '@/components/ui/Button';

const Connect = () => {
  return (
    <section className='bg-[#F5F5F5] pb-16'>
      <div className='px-7 sm:px-12 xl:px-24 pt-16'>
        <p className='text-[#001A35] font-semibold lg:px-0 px-6 font-Montserrat text-lg lg:text-4xl'>
          Connect with Agents
        </p>
        <div className=' grid lg:grid-flow-col grid-flow-row pt-6 justify-between gap-24 items-center'>
          <div className=''>
            {' '}
            <Image src='/assets/agent.png' alt='agent' />
          </div>
          <div className=''>
            <p className='font-semibold lg:px-0 px-6  text-xl lg:text-2xl text-[#000000] font-Montserrat'>
              Define your Dream Home!
            </p>
            <p className=' md:pt-3 pt-2 font-medium  lg:px-0 px-6 w-9/12  text-[#000000] font-Montserrat'>
              {' '}
              Our experienced agents are here to help! Connect with us today for
              personalized guidance, expert advice, and a seamless real estate
              experience. Let&apos;s make your real estate journey successful
              and stress-free. Contact us now to get started!
            </p>
          </div>
        </div>
        <div className='grid pt-3'>
          <Button
            type='button'
            size='sm'
            variant='secondary'
            className='bg-[#001F3F] font-Montserrat hover:bg-[purple] px-4 py-4 cursor-pointer  mx-auto  rounded-md text-white lg:px-9 lg:py-2'
          >
            Get Started
          </Button>
        </div>
        <div className='grid lg:grid-flow-col grid-flow-row items-center md:pt-8 '>
          <div className=' '>
            <p className='font-semibold text-3xl pt-4 lg:px-0 px-6  text-[#000000] font-Montserrat'>
              Get Support
            </p>
            <p className=' md:pt-3 pt-2 font-medium  w-6/12 text-[#000000] font-Montserrat'>
              {' '}
              Looking to buy, sell, or rent? Our dedicated real estate agents
              are here to assist you every step of the way
            </p>
          </div>
          <div className=' '>
            <div className=' lg:px-0 px-6 '>
              <Image src='/assets/house.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
