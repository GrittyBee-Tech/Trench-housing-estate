import React from 'react';
import { IconProps } from '../types';

export default function Globe({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.3327 10.0001C18.3327 14.6025 14.6017 18.3334 9.99935 18.3334M18.3327 10.0001C18.3327 5.39771 14.6017 1.66675 9.99935 1.66675M18.3327 10.0001H1.66602M9.99935 18.3334C5.39698 18.3334 1.66602 14.6025 1.66602 10.0001M9.99935 18.3334C12.0837 16.0515 13.2683 13.0901 13.3327 10.0001C13.2683 6.91011 12.0837 3.94871 9.99935 1.66675M9.99935 18.3334C7.91495 16.0515 6.73039 13.0901 6.66602 10.0001C6.73039 6.91011 7.91495 3.94871 9.99935 1.66675M1.66602 10.0001C1.66602 5.39771 5.39698 1.66675 9.99935 1.66675'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
