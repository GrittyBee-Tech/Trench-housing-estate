'use client';
import Image from 'next/image';

const MobileNavbar = () => {
  return (
    <section className='z-100 grid fixed top-0 bg-white w-full h-full  '>
      <nav className=' '>
        <div className='shadow-2xl p-2 '>
          <div className='px-6 grid grid-flow-col items-center justify-between'>
            <span>
              <Image src='/logo.png' width='150' height='150' alt='' />
            </span>
            <span></span>
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
    </section>
  );
};

export default MobileNavbar;
