import React from 'react';

export function KlawbiLogo({ className = '', size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Klawbi logo"
      role="img"
    >
      {/* Background shape */}
      <rect width="64" height="64" rx="14" fill="url(#klawbi-bg)" />

      {/* Stylized geometric "K" mark */}
      {/* Vertical stem */}
      <path
        d="M18 12L18 52"
        stroke="#3B82F6"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Upper diagonal arm */}
      <path
        d="M22 32L40 14"
        stroke="#3B82F6"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Lower diagonal arm */}
      <path
        d="M22 32L40 50"
        stroke="#3B82F6"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Accent node at top-right */}
      <circle cx="46" cy="14" r="5" fill="#22C55E" />
      {/* Accent node at bottom-right */}
      <circle cx="46" cy="50" r="5" fill="#22C55E" />

      <defs>
        <linearGradient id="klawbi-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" stopOpacity="0.12" />
          <stop offset="1" stopColor="#22C55E" stopOpacity="0.06" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default KlawbiLogo;
