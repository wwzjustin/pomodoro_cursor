import React from 'react';

function Garden() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-8">
      <svg className="w-16 h-16 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 3.5a6.5 6.5 0 106.5 6.5V10a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a9.5 9.5 0 11-9.5-9.5h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H10z" clipRule="evenodd" />
      </svg>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Garden</h2>
      <p className="text-gray-600 text-center">Coming soon! Track your productivity growth over time.</p>
    </div>
  );
}

export default Garden; 