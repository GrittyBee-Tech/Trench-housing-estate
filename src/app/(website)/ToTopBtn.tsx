'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
// import { ArrowUp } from 'lucide-react';

const Totopbtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100); // slightly delayed to avoid flicker
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label='Scroll to top'
      className={`fixed z-50 bottom-9 right-4 flex flex-col items-center justify-center p-2 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <span className='rounded-full  bg-[#001A35] text-white p-6'>
        <ArrowUp />
      </span>
    </button>
  );
};

export default Totopbtn;
