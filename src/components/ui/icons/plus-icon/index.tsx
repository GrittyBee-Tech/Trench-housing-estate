import PropTypes from 'prop-types';

interface propTypes {
  size: number;
  color: string;
}

const PlusIcon = ({ size, color }: propTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00033 1.16675V12.8334M1.16699 7.00008H12.8337"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
export default PlusIcon;
