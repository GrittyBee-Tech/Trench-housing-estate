'use client';
import React from 'react';
import Homes from './featured-layout/Homes';
import { RootState } from '@/app/store';
import { featureActions } from '@/app/features/featured-slice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { categories, properties, properties2 } from '@/constants/landingpage';
// import './slider.css';
// import './slide.css';

const Featured = () => {
  const activeFeature = useSelector(
    (state: RootState) => state.feature.activeFeature
  );
  const dispatch = useDispatch();

  const isActive = (itemId: string) => {
    dispatch(featureActions.toggle(itemId));
  };

  return (
    <section className='px-7 md:px-12 xl:px-24'>
      <div className='grid gap-4'>
        <div className=' grid mx-auto  xs:-mt-[21%] lg:px-7 md:mt-[-13%] lg:mt-[-8%] md:p-0 w-full bg-[#FFFFFF] rounded-md shadow-lg'>
          <ul className='grid lg:grid-flow-col   grid-flow-row p-4 lg:p-7 gap-11 md:gap-0 gap-y-3 md:gap-y-0 md:justify-between justify-center'>
            {categories.map(({ name, value }) => (
              <li
                onClick={() => isActive(value)}
                className={`${
                  activeFeature === value
                    ? 'font-semibold xl:text-left text-center  font-Montserrat text-sm md:text-lg lg:text-xl text-[#404040] border-b-4 border-primary'
                    : 'font-normal xl:text-left text-center  font-Montserrat text-sm md:text-lg  lg:text-xl text-[#404040]'
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
          <hr className=' lg:mx-7 bg-secondary mt-4 lg:-mt-7' />
          <div className='min-h-24'>
            {activeFeature === 'homes' && <Homes />}
          </div>
        </div>

        <div className=' grid gap-11 '>
          <h3 className='grid md:justify-normal justify-center mt-2 font-Montserrat font-bold text-[#001A35] text-xl md:text-4xl'>
            Featured Properties
          </h3>

          <Swiper
            grabCursor={true}
            loop={true}
            slidesPerView={1}
            className='w-full'
            autoplay={true}
            breakpoints={{
              800: {
                slidesPerView: 3,
              },
              500: {
                slidesPerView: 2,
              },
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              // clickable: true,
              enabled: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
          >
            {[...properties, ...properties2].map((item) => {
              const { id, content } = item;

              return (
                <SwiperSlide key={id} className='relative'>
                  <Image className='w-full' src={'/assets/house.png'} alt='' />
                  <div className=' bg-[#00172E] opacity-90 rounded-br-3xl grid grid-flow-col justify-between items-center p-3 absolute w-full bottom-0'>
                    <p className='xl:text-2xl lg:text-base font-semibold font-Montserrat text-[#FFFFFF] text-nowrap'>
                      {content}
                    </p>
                    <p className='bg-[#EAEAEA] text-[#000000] md:text-xl font-semibold font-Montserrat rounded py-1 px-2.5'>
                      20
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
            {/* <div className="swiper-pagination "></div> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Featured;
