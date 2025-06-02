import React from 'react';

function CircularProgress({ progress }) {
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  
  // For the image shown, when progress is 0, we show nothing
  // When progress is > 0, we show the arc from the start position
  const strokeDashoffset = circumference - ((100 - progress) / 100) * circumference;

  return (
    <svg className="w-full h-full" viewBox="0 0 264 264">
      {/* Background circle */}
      <circle
        cx="132"
        cy="132"
        r={radius}
        stroke="#f1f1f1"
        strokeWidth="8"
        fill="none"
      />
      
      {/* Progress circle */}
      <circle
        className="circle-progress"
        cx="132"
        cy="132"
        r={radius}
        stroke="#FF6347"
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        fill="none"
        transform="rotate(-90, 132, 132)"
      />
      
      {/* Starting point marker */}
      <circle
        cx="132"
        cy="12"
        r="5"
        fill="#FF6347"
      />
      
      {/* Ending point marker (only visible when timer is running) */}
      {progress < 100 && progress > 0 && (
        <circle
          cx={132 + radius * Math.sin(2 * Math.PI * (100 - progress) / 100)}
          cy={132 - radius * Math.cos(2 * Math.PI * (100 - progress) / 100)}
          r="5"
          fill="#FF6347"
        />
      )}
    </svg>
  );
}

export default CircularProgress; 