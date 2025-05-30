import PropTypes from 'prop-types';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  onBlur?: () => void;
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  type?: 'button' | 'reset' | 'submit';
  variant:
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'secondary-gray'
    | 'tertiary'
    | 'tertiary-gray'
    | 'primary-destructive'
    | 'secondary-destructive'
    | 'secondary-gray-destructive'
    | 'tertiary-destructive';
}

const Button = ({
  children,
  type,
  onClick,
  className = '',
  onBlur,
}: ButtonProps) => {
  //Default style

  //Conditionally apply default styling if className is not provided
  const buttonClassName = className
    ? `${className} ${'defaultStyle'}`
    : 'defaultStyle';

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClassName}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
};

export default Button;
