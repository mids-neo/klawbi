import React from 'react';

export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  name,
  required = false,
  className = '',
  ...rest
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-text-secondary text-sm font-medium"
        >
          {label}
          {required && <span className="text-error ml-0.5">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full bg-surface border rounded-lg px-4 py-3
          text-white text-sm
          placeholder:text-text-muted
          transition-colors duration-200
          focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30
          ${error ? 'border-error' : 'border-border'}
        `.trim()}
        {...rest}
      />
      {error && (
        <p className="text-error text-sm mt-0.5">{error}</p>
      )}
    </div>
  );
}

export default Input;
