import React from 'react';

export function Card({ children, className = '', hover = false, ...rest }) {
  return (
    <div
      className={`
        bg-surface rounded-xl border border-border p-6
        transition-all duration-200 ease-out
        ${hover ? 'hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5' : ''}
        ${className}
      `.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
