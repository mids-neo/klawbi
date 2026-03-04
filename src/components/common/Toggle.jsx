import React from 'react';

export function Toggle({ enabled = false, onChange, disabled = false }) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!enabled);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={`
        relative inline-flex items-center shrink-0
        h-[24px] w-[44px] rounded-full
        transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 focus:ring-offset-background
        ${enabled ? 'bg-accent' : 'bg-border'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `.trim()}
    >
      <span
        className={`
          pointer-events-none inline-block
          h-[18px] w-[18px] rounded-full bg-white
          shadow-sm
          transition-transform duration-200 ease-in-out
          ${enabled ? 'translate-x-[23px]' : 'translate-x-[3px]'}
        `.trim()}
      />
    </button>
  );
}

export default Toggle;
