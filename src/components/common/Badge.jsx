import React from 'react';

const variantStyles = {
  info: 'bg-primary/10 text-primary',
  success: 'bg-accent/10 text-accent',
  warning: 'bg-warning/10 text-warning',
  error: 'bg-error/10 text-error',
};

export function Badge({ children, variant = 'info', className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-0.5 rounded-full
        text-xs font-medium leading-5
        ${variantStyles[variant] || variantStyles.info}
        ${className}
      `.trim()}
    >
      {children}
    </span>
  );
}

export default Badge;
