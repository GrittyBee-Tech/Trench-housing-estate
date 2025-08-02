import PropTypes from 'prop-types';

const NairaCurrency = ({ size, color }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.66663 6.42848H4.66663V1.85706H6.66663L10.0866 6.42848H14.6666V1.85706H16.6666V6.42848H18.6666V7.95229H16.6666V9.4761H18.6666V10.9999H16.6666V15.5713H14.6666L11.2366 10.9999H6.66663V15.5713H4.66663V10.9999H2.66663V9.4761H4.66663V7.95229H2.66663V6.42848ZM6.66663 6.42848H7.79663L6.66663 4.92753V6.42848ZM6.66663 7.95229V9.4761H10.0866L8.94663 7.95229H6.66663ZM14.6666 12.5237V10.9999H13.5166L14.6666 12.5237ZM11.2266 7.95229L12.3766 9.4761H14.6666V7.95229H11.2266Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
};
NairaCurrency.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};


export default NairaCurrency
