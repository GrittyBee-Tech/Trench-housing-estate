import PropTypes from 'prop-types';


interface propTypes {
    size: number;
    color?: string;
}

const MenuIcon = ({ size, color }: propTypes) => {
    return (
        <svg
            width={size || "24"}
            height={size || "24"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                fill={color}
            />
        </svg>
    )
};

MenuIcon.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};


export default MenuIcon
