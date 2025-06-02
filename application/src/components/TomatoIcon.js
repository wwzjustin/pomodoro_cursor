import React from 'react';

function TomatoIcon() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tomato body */}
      <circle cx="50" cy="50" r="40" fill="#FF6347" />
      
      {/* Tomato stem */}
      <path
        d="M50 20C50 20 30 20 40 10C47 3 50 5 50 5C50 5 53 3 60 10C70 20 50 20 50 20Z"
        fill="#228B22"
      />
      
      {/* Eyes */}
      <circle cx="35" cy="40" r="5" fill="#005A8C" />
      <circle cx="65" cy="40" r="5" fill="#005A8C" />
      
      {/* Eye highlights */}
      <circle cx="37" cy="38" r="2" fill="white" />
      <circle cx="67" cy="38" r="2" fill="white" />
      
      {/* Smile */}
      <path
        d="M35 60C35 60 42 70 50 70C58 70 65 60 65 60"
        stroke="#005A8C"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Shadow at bottom */}
      <path
        d="M30 75C30 75 40 80 50 80C60 80 70 75 70 75"
        stroke="#666"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}

export default TomatoIcon; 