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

export default Button;
