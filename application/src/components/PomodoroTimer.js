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
import Leaderboard from './Leaderboard';

// Default to 25 minutes
const DEFAULT_POMODORO_TIME = 25 * 60; 

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(DEFAULT_POMODORO_TIME);
  const [isActive, setIsActive] = useState(false);
  const [points, setPoints] = useState(120); // Start with 120 points as shown in the image
  const [showSettings, setShowSettings] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [activeTab, setActiveTab] = useState('timer'); // Default tab
  const [pomodoroTime, setPomodoroTime] = useState(DEFAULT_POMODORO_TIME);
  const timerRef = useRef(null);

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
      // Timer completed
      setIsActive(false);
      setPoints(points + 1);
      // Play sound or notification here
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isActive, timeLeft, points]);

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

  // Toggle leaderboard visibility
  const toggleLeaderboard = () => {
    setShowLeaderboard(!showLeaderboard);
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
      <div 
        onClick={toggleLeaderboard}
        className="bg-tomato text-white p-2 rounded-tr-xl w-24 ml-auto text-center cursor-pointer hover:bg-tomato-dark transition-colors points-button"
      >
        <div className="text-xs">Points</div>
        <div className="text-xl font-bold">{points}</div>
      </div>

      {/* Main content area */}
      <div className="p-8 pb-4">
        {renderContent()}
      </div>

      {/* Tab navigation */}
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Leaderboard modal */}
      <Leaderboard 
        isVisible={showLeaderboard} 
        onClose={() => setShowLeaderboard(false)} 
        userPoints={points}
      />
    </div>
  );
}

export default PomodoroTimer; 