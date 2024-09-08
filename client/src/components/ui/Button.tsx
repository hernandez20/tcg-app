import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text'; 
  size?: 'sm' | 'md' | 'lg'; 
  fullWidth?: boolean; 
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200 ease-in-out';


  const variantClasses = {
    primary: 'bg-white-500 text-white hover:bg-white-600 active:bg-gray-200 ',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400 active:bg-gray-500',
    text: 'text-green-500 hover:text-green-600 active:text-green-700',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-3',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;