interface propTypes {
  size: number;
  color: string;
}

const ChevronDown = ({ size, color }: propTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4076 1L8.40759 8L1.40759 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDown;
