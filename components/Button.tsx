import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    dark: "bg-gray-800 text-white hover:bg-gray-900 shadow-md",
    white: "bg-white text-primary hover:bg-gray-50 shadow-sm"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm uppercase tracking-wide",
    lg: "px-8 py-3 text-base uppercase tracking-wider",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;