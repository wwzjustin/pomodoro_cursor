import React from 'react';

function Blacklist() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-8">
      <svg className="w-16 h-16 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
      </svg>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Blacklist</h2>
      <p className="text-gray-600 text-center">Coming soon! Block distracting websites during your focus time.</p>
    </div>
  );
}

export default Blacklist; 