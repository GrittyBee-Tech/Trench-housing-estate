import PropTypes from 'prop-types';

interface propTypes {
  size: number;
  color: string;
}

export default function Expert({ color, size }: propTypes) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.63636 11.9091C10.083 11.9091 11.4704 11.3344 12.4933 10.3115C13.5162 9.28857 14.0909 7.90118 14.0909 6.45455C14.0909 5.00791 13.5162 3.62053 12.4933 2.5976C11.4704 1.57467 10.083 1 8.63636 1C7.18973 1 5.80234 1.57467 4.77942 2.5976C3.75649 3.62053 3.18182 5.00791 3.18182 6.45455C3.18182 7.90118 3.75649 9.28857 4.77942 10.3115C5.80234 11.3344 7.18973 11.9091 8.63636 11.9091ZM8.63636 11.9091C10.8324 11.9091 12.7513 12.7382 14.116 14.116C14.9251 14.9363 15.5304 15.9351 15.8833 17.032M8.63636 11.9091C4.27273 11.9091 1 15.1818 1 19.5455V25H11.9091M13 20.4444L17.5709 23.9091L25 14.0909"
        // stroke="#001A35"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
}
Expert.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
