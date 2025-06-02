import React from 'react';

function Settings({ onSelectDuration, isVisible }) {
  const durations = [
    { id: '10', label: '10 minutes', seconds: 10 * 60 },
    { id: '15', label: '15 minutes', seconds: 15 * 60 },
    { id: '25', label: '25 minutes', seconds: 25 * 60 },
    { id: '60', label: '60 minutes', seconds: 60 * 60 },
  ];

  if (!isVisible) return null;

  return (
    <div className="w-full mt-4">
      <h3 className="text-gray-600 mb-2 text-center">Select Timer Duration</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {durations.map((duration) => (
          <button
            key={duration.id}
            onClick={() => onSelectDuration(duration.seconds)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
          >
            {duration.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Settings; 