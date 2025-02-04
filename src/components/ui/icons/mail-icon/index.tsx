import PropTypes from 'prop-types';

interface propTypes {
    size: number;
    color: string;
}

const MailIcon = ({ size, color }: propTypes) => {
    return (
        <svg width={size} height={size} viewBox="0 0 25 25" fill="" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_154_670)">
                <path d="M22.0071 4.50019C21.9162 4.49082 21.8246 4.49082 21.7337 4.50019H3.06708C2.94744 4.50203 2.8286 4.51997 2.71375 4.55352L12.3471 14.1469L22.0071 4.50019Z" fill={color} />
                <path d="M22.9937 5.42676L13.287 15.0934C13.0372 15.3418 12.6993 15.4811 12.347 15.4811C11.9948 15.4811 11.6568 15.3418 11.407 15.0934L1.78702 5.50009C1.75745 5.60878 1.74177 5.72079 1.74036 5.83342V19.1668C1.74036 19.5204 1.88083 19.8595 2.13088 20.1096C2.38093 20.3596 2.72007 20.5001 3.07369 20.5001H21.7404C22.094 20.5001 22.4331 20.3596 22.6832 20.1096C22.9332 19.8595 23.0737 19.5204 23.0737 19.1668V5.83342C23.0684 5.69453 23.0414 5.55731 22.9937 5.42676ZM3.98702 19.1668H3.06036V18.2134L7.90702 13.4068L8.84702 14.3468L3.98702 19.1668ZM21.727 19.1668H20.7937L15.9337 14.3468L16.8737 13.4068L21.7204 18.2134L21.727 19.1668Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_154_670">
                    <rect width="24" height="24" fill={color} transform="translate(0.453735 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )
};

MailIcon.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};


export default MailIcon
