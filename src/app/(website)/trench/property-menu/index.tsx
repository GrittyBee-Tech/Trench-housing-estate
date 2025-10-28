import { categories } from '@/app/utils/constants';
import React from 'react';

const PropertyMenu = () => {
  return (
    <section className='md:-mt-20'>
      <div className=' container bg-[#FFFFFF]  py-8 p-5 rounded-lg'>
        <div className='grid gap-4'>
          <ul className='grid md:grid-flow-col   grid-flow-row p-4 lg:p-7 gap-11 md:gap-0 gap-y-3 md:gap-y-0 md:justify-between justify-center'>
            {categories.map(({ name, value }) => (
              <li
              // onClick={() => isActive(value)}
              // className={`${
              //   activeFeature === value
              //     ? 'font-semibold xl:text-left text-center  font-Montserrat text-sm md:text-lg lg:text-xl text-[#404040] border-b-4 border-primary'
              //     : 'font-normal xl:text-left text-center  font-Montserrat text-sm md:text-lg  lg:text-xl text-[#404040]'
              // }`}
              >
                {name}
              </li>
            ))}
          </ul>
          <hr className=' lg:mx-7 bg-secondary mt-4 lg:-mt-7' />
          <div className='min-h-24'>
            {/* {activeFeature === 'homes' && <Homes />} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyMenu;
