import PropTypes from 'prop-types';

interface propTypes {
  size: number;
  color: string;
}

const BedIcon = ({ size, color }: propTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66663 6.33337C5.77329 6.33337 6.66663 5.44004 6.66663 4.33337C6.66663 3.22671 5.77329 2.33337 4.66663 2.33337C3.55996 2.33337 2.66663 3.22671 2.66663 4.33337C2.66663 5.44004 3.55996 6.33337 4.66663 6.33337ZM4.66663 3.66671C5.03329 3.66671 5.33329 3.96671 5.33329 4.33337C5.33329 4.70004 5.03329 5.00004 4.66663 5.00004C4.29996 5.00004 3.99996 4.70004 3.99996 4.33337C3.99996 3.96671 4.29996 3.66671 4.66663 3.66671ZM12.6666 1.66671H7.33329V7.00004H1.99996V0.333374H0.666626V10.3334H1.99996V8.33337H14V10.3334H15.3333V4.33337C15.3333 2.86004 14.14 1.66671 12.6666 1.66671ZM14 7.00004H8.66663V3.00004H12.6666C13.4 3.00004 14 3.60004 14 4.33337V7.00004Z"
        fill={color}
      />
    </svg>
  );
};

BedIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default BedIcon;
