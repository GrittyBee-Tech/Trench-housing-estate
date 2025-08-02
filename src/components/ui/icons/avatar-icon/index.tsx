import React from 'react';
import { IconProps } from '../types';

export default function Avatar({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 128 128'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M80 70V66C80 63.8783 79.1571 61.8434 77.6568 60.3431C76.1566 58.8429 74.1217 58 72 58H56C53.8783 58 51.8434 58.8429 50.3431 60.3431C48.8429 61.8434 48 63.8783 48 66V70M72 42C72 46.4183 68.4183 50 64 50C59.5817 50 56 46.4183 56 42C56 37.5817 59.5817 34 64 34C68.4183 34 72 37.5817 72 42Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
