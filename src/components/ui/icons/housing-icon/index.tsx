interface propTypes {
  size: number;
  color: string;
}

const HousingIcon = ({ size, color }: propTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0.290009L0.666626 12.33V24.5C0.666626 25.0304 0.848074 25.5392 1.17105 25.9142C1.49403 26.2893 1.93209 26.5 2.38885 26.5H8.41663V16.5H13.5833V26.5H19.6111C20.0678 26.5 20.5059 26.2893 20.8289 25.9142C21.1518 25.5392 21.3333 25.0304 21.3333 24.5V12.26L11 0.290009Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HousingIcon;
