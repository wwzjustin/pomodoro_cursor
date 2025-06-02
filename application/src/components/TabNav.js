import React from 'react';

function TabNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'timeline', label: 'Timeline', icon: '≡' },
    { id: 'timer', label: 'Timer', icon: '⏱️' },
    { id: 'garden', label: 'Garden', icon: '🌱' },
    { id: 'blacklist', label: 'Blacklist', icon: '⛔' },
    { id: 'usage', label: 'Usage', icon: '📊' },
  ];

  return (
    <div className="w-full bg-tomato rounded-b-xl p-3 flex justify-between">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center text-white ${
            activeTab === tab.id ? 'opacity-100' : 'opacity-70'
          }`}
        >
          <span className="text-xl">{tab.icon}</span>
          <span className="text-xs mt-1">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

export default TabNav; 