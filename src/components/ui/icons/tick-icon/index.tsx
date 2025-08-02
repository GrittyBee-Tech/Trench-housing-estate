import React from 'react';
import { IconProps } from '../types';

export default function Tick({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path
          d='M14.6663 1L5.49967 10.1667L1.33301 6'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
}
