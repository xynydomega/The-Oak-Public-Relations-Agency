import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'green';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  to, 
  children, 
  className,
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.2em] transition-all duration-300 group leading-none";
  
  const variants = {
    primary: "bg-brand-brown-accent text-white border-2 border-brand-green-accent hover:bg-brand-green-accent hover:shadow-lg hover:shadow-brand-green-accent/30",
    secondary: "bg-brand-green-accent text-white border-2 border-brand-brown-accent hover:bg-brand-brown-accent hover:shadow-lg hover:shadow-brand-brown-accent/30",
    green: "bg-brand-green-accent text-white border-2 border-[#9C6B3E] hover:bg-[#9C6B3E]",
    outline: "border-2 border-brand-brown-accent text-brand-brown-accent hover:bg-brand-brown-accent hover:text-white"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[9px] md:px-6 md:py-3 md:text-[10px]",
    md: "px-6 py-3 text-[10px] md:px-8 md:py-4 md:text-xs",
    lg: "px-8 py-4 text-xs md:px-10 md:py-5 md:text-sm"
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
