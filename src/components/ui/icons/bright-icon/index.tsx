import React from 'react';
import { IconProps } from '../types';

export default function BrightIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11 1.5V5.5M11 17.5V21.5M3.93 4.43L6.76 7.26M15.24 15.74L18.07 18.57M1 11.5H5M17 11.5H21M3.93 18.57L6.76 15.74M15.24 7.26L18.07 4.43'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
