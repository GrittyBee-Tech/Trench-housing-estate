'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { reviewArray } from '@/constants/landingpage';
import Icon from '@/components/ui/icons';

const Testimonial = () => {
  return (
    <div
      id='testimonial'
      className='mt-10 sm:px-12 xl:px-24 mx-auto mb-14 noscroll'
    >
      <h3 className='text-[#001a35] text-4xl md:text-5xl font-bold font-Montserrat pb-10'>
        What People Say
      </h3>
      <Swiper
        loop={true}
        autoplay={true}
        modules={[Autoplay]}
        className='!pt-8 w-full'
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          860: {
            slidesPerView: 2.5,
          },
          500: {
            slidesPerView: 2,
          },
        }}
      >
        {reviewArray.map((el, i) => (
          <SwiperSlide
            className='bg-[#2B445F] px-4 pt-8 pb-2 rounded-ss-[1.25rem] rounded-ee-[1.25rem] text-white relative'
            key={i}
          >
            <Image
              src={el.image}
              className='z-10 absolute right-6 -top-8 w-16 h-16 rounded-full border-2 border-white'
              alt=''
            />
            <div className='flex gap-3 items-center mb-4'>
              {new Array(el.stars).fill('99').map((val, ii) => (
                <Icon
                  type='star_icon'
                  key={val + ii}
                  size={18}
                  color='#FFD700'
                />
              ))}
            </div>
            <p className='text-sm font-Montserrat mb-5'>{el.description}</p>
            <h6 className='text-xl font-Montserrat font-semibold'>{el.name}</h6>
            <p className='font-Montserrat'>{el.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
