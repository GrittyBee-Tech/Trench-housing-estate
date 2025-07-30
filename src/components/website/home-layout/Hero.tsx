'use client';

import Footer from '@/components/website/generic-layout/Footer';
import Navbar from '@/components/website/generic-layout/Navbar';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className='w-full'>
      <Navbar />
      <div className='bg-heroBg bg-no-repeat lg:bg-cover md:bg-cover xl:bg-cover bg-cover w-full lg:pb-20 pb-5 '>
        <div className=' grid gap-11 px-7 xl:px-28'>
          <div className='grid gap-3'>
            <h1 className=' md:pt-32 pt-20 text-[#FFFFFF] font-bold text-2xl font-Montserrat md:text-6xl'>
              Every Home Has a Story.
            </h1>
            <p className=' font-Montserrat lg:max-w-4xl font-normal text-sm md:text-xl text-[#FFFFFF] '>
              Trench Housing is Nigeria’s smart property platform that lets you
              connect directly with landlords, certified property lawyers, or
              trusted agents — no inflated fees, no middlemen headaches.
            </p>
          </div>
          <div className='grid grid-flow-col w-max gap-4 '>
            <Button
              type='button'
              size='sm'
              variant='secondary'
              // onClick={''}
              className='  lg:px-11 px-4 rounded-lg hover:bg-[purple] hover:text-white bg-[#001F3F] text-[#FFFFFF] font-bold lg:text-base font-Montserrat'
            >
              Learn More
            </Button>
            <Button
              type='button'
              size='sm'
              variant='secondary'
              // onClick=''
              className=' border  border-white px-8 py-3 lg:px-8 lg:py-3 rounded-lg hover:border-[purple] hover:bg-[purple] hover:text-white  text-white shadow-md  font-bold lg:text-base font-Montserrat'
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Hero;
