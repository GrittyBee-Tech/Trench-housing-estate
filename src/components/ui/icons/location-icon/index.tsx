import PropTypes from 'prop-types';

interface propTypes {
    size: number;
    color?: string;
}

const LocationIcon = ({ size, color }: propTypes) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.00004 7.66671C7.55801 7.66671 7.13409 7.49111 6.82153 7.17855C6.50897 6.86599 6.33337 6.44207 6.33337 6.00004C6.33337 5.55801 6.50897 5.13409 6.82153 4.82153C7.13409 4.50897 7.55801 4.33337 8.00004 4.33337C8.44207 4.33337 8.86599 4.50897 9.17855 4.82153C9.49111 5.13409 9.66671 5.55801 9.66671 6.00004C9.66671 6.21891 9.6236 6.43564 9.53984 6.63785C9.45608 6.84006 9.33332 7.02379 9.17855 7.17855C9.02379 7.33332 8.84006 7.45608 8.63785 7.53984C8.43564 7.6236 8.21891 7.66671 8.00004 7.66671ZM8.00004 1.33337C6.76236 1.33337 5.57538 1.82504 4.70021 2.70021C3.82504 3.57538 3.33337 4.76236 3.33337 6.00004C3.33337 9.50004 8.00004 14.6667 8.00004 14.6667C8.00004 14.6667 12.6667 9.50004 12.6667 6.00004C12.6667 4.76236 12.175 3.57538 11.2999 2.70021C10.4247 1.82504 9.23772 1.33337 8.00004 1.33337Z"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
};
LocationIcon.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};


export default LocationIcon
