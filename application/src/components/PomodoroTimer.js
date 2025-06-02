import React, { useState, useEffect, useRef } from 'react';
import CircularProgress from './CircularProgress';
import TimerControls from './TimerControls';
import TomatoIcon from './TomatoIcon';
import TabNav from './TabNav';
import Timeline from './Timeline';
import Garden from './Garden';
import Blacklist from './Blacklist';
import Usage from './Usage';
import Settings from './Settings';

// Default to 25 minutes
const DEFAULT_POMODORO_TIME = 25 * 60; 

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(DEFAULT_POMODORO_TIME);
  const [isActive, setIsActive] = useState(false);
  const [points, setPoints] = useState(120); // Start with 120 points as shown in the image
  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState('timer'); // Default tab
  const [pomodoroTime, setPomodoroTime] = useState(DEFAULT_POMODORO_TIME);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const timerRef = useRef(null);

  // Mock leaderboard data
  const leaderboardData = [
    { id: 1, name: 'Alex', points: 145 },
    { id: 2, name: 'You', points: points, isCurrentUser: true },
    { id: 3, name: 'Jamie', points: 115 },
    { id: 4, name: 'Taylor', points: 110 },
    { id: 5, name: 'Jordan', points: 95 },
  ];

  // Sort leaderboard data by points
  const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.points - a.points);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate progress percentage
  const progress = (timeLeft / pomodoroTime) * 100;

  // Timer functionality
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      // Timer completed - reward one point for completing one cycle
      setIsActive(false);
      setPoints(points + 1);
      // Show completion notification
      alert("Congratulations! You've completed a Pomodoro cycle and earned 1 point!");
      // Reset timer for next cycle
      setTimeLeft(pomodoroTime);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isActive, timeLeft, points, pomodoroTime]);

  // Timer controls
  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(pomodoroTime);
  };

  // Handle timer duration selection
  const handleSelectDuration = (seconds) => {
    setPomodoroTime(seconds);
    setTimeLeft(seconds);
    setIsActive(false); // Stop the timer if it's running
    setShowSettings(false);
  };

  // Toggle settings visibility
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  // Toggle leaderboard visibility
  const toggleLeaderboard = () => {
    setShowLeaderboard(!showLeaderboard);
  };

  // Render leaderboard
  const renderLeaderboard = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 leaderboard-overlay">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 leaderboard-container">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Points Leaderboard</h2>
          <button onClick={toggleLeaderboard} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="divide-y">
          {sortedLeaderboard.map((user, index) => (
            <div 
              key={user.id} 
              className={`py-3 flex items-center ${user.isCurrentUser ? 'leaderboard-row-current' : ''}`}
            >
              <div className="w-8 h-8 flex items-center justify-center font-bold text-gray-500">
                {index + 1}
              </div>
              <div className="flex-grow ml-2">
                <div className="font-medium text-gray-800">{user.name}</div>
              </div>
              <div className="font-bold text-tomato">{user.points}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">
          Complete more Pomodoro cycles to climb the leaderboard!
        </div>
        <div className="mt-4 flex justify-center">
          <button 
            onClick={toggleLeaderboard} 
            className="btn btn-primary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  // Render timer content
  const renderTimerContent = () => (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 mb-4">
        <CircularProgress progress={progress} />
        <div className="absolute inset-0 flex items-center justify-center">
          <TomatoIcon />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-gray-800">{formatTime(timeLeft)}</span>
        </div>
      </div>

      <TimerControls
        isActive={isActive}
        onStart={startTimer}
        onPause={pauseTimer}
        onReset={resetTimer}
      />

      <button
        onClick={toggleSettings}
        className="mt-4 text-tomato flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
        Settings
      </button>

      <Settings isVisible={showSettings} onSelectDuration={handleSelectDuration} />
    </div>
  );

  // Common wrapper for all tabs to ensure consistent sizing
  const renderTabContent = (content) => (
    <div className="tab-content">
      {content}
    </div>
  );

  // Render appropriate content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'timeline':
        return renderTabContent(<Timeline onSelectDuration={handleSelectDuration} />);
      case 'timer':
        return renderTabContent(renderTimerContent());
      case 'garden':
        return renderTabContent(<Garden />);
      case 'blacklist':
        return renderTabContent(<Blacklist />);
      case 'usage':
        return renderTabContent(<Usage />);
      default:
        return renderTabContent(renderTimerContent());
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full">
      {/* Points display */}
      <button 
        onClick={toggleLeaderboard}
        className="bg-tomato text-white p-2 rounded-tr-xl w-24 ml-auto text-center cursor-pointer hover:bg-tomato-dark transition-colors flex flex-col items-center"
        title="Click to view leaderboard"
      >
        <div className="text-xs">Points</div>
        <div className="text-xl font-bold">{points}</div>
        <div className="text-xs mt-1">👆 Click</div>
      </button>

      {/* Main content area */}
      <div className="p-8 pb-4">
        {renderContent()}
      </div>

      {/* Tab navigation */}
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Render leaderboard if visible */}
      {showLeaderboard && renderLeaderboard()}
    </div>
  );
}

export default PomodoroTimer; 