import React from 'react';

function TimerControls({ isActive, onStart, onPause, onReset }) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {!isActive ? (
        <button
          onClick={onStart}
          className="btn btn-primary"
        >
          Start
        </button>
      ) : (
        <button
          onClick={onPause}
          className="btn btn-primary"
        >
          Pause
        </button>
      )}
      <button
        onClick={onReset}
        className="btn btn-secondary"
      >
        Reset
      </button>
    </div>
  );
}

export default TimerControls; 