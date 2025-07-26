interface propTypes {
  size: number;
}

export default function CloseFillIcon({ size }: propTypes) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 31 31'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='15.9835' cy='15.5147' r='15.0147' fill='black' />
      <g clip-path='url(#clip0_10530_98535)'>
        <path
          d='M15.9859 14.1014L20.9335 9.15381L22.3468 10.5671L17.3992 15.5147L22.3468 20.4623L20.9335 21.8756L15.9859 16.928L11.0383 21.8756L9.625 20.4623L14.5726 15.5147L9.625 10.5671L11.0383 9.15381L15.9859 14.1014Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_10530_98535'>
          <rect
            width='23.9882'
            height='23.9882'
            fill='white'
            transform='translate(3.99219 3.52051)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}
