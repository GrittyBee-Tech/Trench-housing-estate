import PropTypes from 'prop-types';

interface propTypes {
  size: number;
  color: string;
}

export default function Integrity({ color, size }: propTypes) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 21.75C13.9414 21.75 19.3399 18.1185 19.8289 11.8035V5.0635L11.9999 2.25L4.1709 5.0635V11.8035C4.4529 17.7585 9.9169 21.75 11.9999 21.75Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 14.8836C13.5913 14.8836 14.8813 13.6022 14.8813 12.0215C14.8813 10.4408 13.5913 9.15942 12 9.15942C10.4087 9.15942 9.11865 10.4408 9.11865 12.0215C9.11865 13.6022 10.4087 14.8836 12 14.8836Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.6831 17.4427L14.1448 13.9275"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
Integrity.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
