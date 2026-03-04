import React from 'react';

const variantStyles = {
  primary:
    'bg-primary text-white hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'bg-transparent border border-primary text-primary hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]',
  ghost:
    'text-text-secondary hover:text-white hover:bg-surface active:bg-surface-hover',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-6 py-3 text-base rounded-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center font-medium
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 focus:ring-offset-background
        ${variantStyles[variant] || variantStyles.primary}
        ${sizeStyles[size] || sizeStyles.md}
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
        ${className}
      `.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
