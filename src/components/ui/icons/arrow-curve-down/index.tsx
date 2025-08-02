import PropTypes from 'prop-types';

interface propTypes {
  size: number;
  color: string;
}

const ArrowCurvedown = ({ size, color }: propTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M116.574 130.39L76.7061 175.05M76.7061 175.05L41.6752 126.503M76.7061 175.05L80.5761 100.484C83.2478 49.0052 51.8812 5.53566 10.5143 3.38873L3.02441 3"
        fill={color}
      />
    </svg>
  );
};

ArrowCurvedown.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ArrowCurvedown;
