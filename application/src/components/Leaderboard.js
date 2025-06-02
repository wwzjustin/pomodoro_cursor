import React from 'react';

function Leaderboard({ isVisible, onClose, userPoints = 120 }) {
  // Mock data for friends leaderboard
  const friends = [
    { id: 1, name: 'Sarah', points: 230 },
    { id: 2, name: 'Mike', points: 185 },
    { id: 3, name: 'You', points: userPoints, isCurrentUser: true },
    { id: 4, name: 'Alex', points: 105 },
    { id: 5, name: 'Taylor', points: 92 }
  ];

  // Sort friends by points
  const sortedFriends = [...friends].sort((a, b) => b.points - a.points);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Points Leaderboard</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        
        <div className="divide-y">
          {sortedFriends.map((friend, index) => (
            <div 
              key={friend.id} 
              className={`py-4 flex justify-between items-center ${friend.isCurrentUser ? 'bg-gray-100 rounded' : ''}`}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-tomato text-white rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </div>
                <span className={`font-medium ${friend.isCurrentUser ? 'text-tomato' : 'text-gray-700'}`}>
                  {friend.name}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xl mr-1">{friend.points}</span>
                <span className="text-gray-500 text-sm">pts</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm mb-4">Complete more Pomodoro cycles to earn points!</p>
          <button 
            onClick={onClose}
            className="btn btn-primary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard; 