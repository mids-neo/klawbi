import React from 'react';

export function UsageMeter({ used = 0, total = 100, size = 120 }) {
  const percentage = total > 0 ? Math.min(Math.round((used / total) * 100), 100) : 0;
  const isHigh = percentage > 80;

  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const center = size / 2;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
        >
          {/* Track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-border"
          />
          {/* Progress */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={`transition-all duration-500 ease-out ${
              isHigh ? 'text-accent' : 'text-primary'
            }`}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`font-bold tabular-nums ${
              size >= 120 ? 'text-2xl' : size >= 80 ? 'text-lg' : 'text-sm'
            } text-white`}
          >
            {percentage}%
          </span>
        </div>
      </div>

      <p className="text-text-secondary text-sm">
        <span className="text-white font-medium tabular-nums">{used}</span>
        {' / '}
        <span className="tabular-nums">{total}</span>
        {' messages'}
      </p>
    </div>
  );
}

export default UsageMeter;
