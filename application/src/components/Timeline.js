import React, { useState } from 'react';
import Settings from './Settings';

function Timeline({ onSelectDuration }) {
  const [showSettings, setShowSettings] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Today's date as default
  
  // Filter tasks by selected date
  const filteredTasks = tasks.filter(task => task.date === selectedDate);
  
  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    const task = {
      id: Date.now(),
      text: newTask,
      date: selectedDate,
      completed: false
    };
    
    setTasks([...tasks, task]);
    setNewTask('');
  };
  
  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Timeline</h2>
        <p className="text-gray-600 mb-4">Manage your tasks by date</p>
        
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 border rounded mb-4"
        />
        
        <form onSubmit={addTask} className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow p-2 border rounded-l"
          />
          <button 
            type="submit" 
            className="bg-tomato text-white px-4 rounded-r"
          >
            Add
          </button>
        </form>
        
        <div className="max-h-40 overflow-y-auto">
          {filteredTasks.length === 0 ? (
            <p className="text-gray-500 italic">No tasks for this date</p>
          ) : (
            <ul className="divide-y">
              {filteredTasks.map(task => (
                <li key={task.id} className="py-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                      className="mr-2"
                    />
                    <span className={task.completed ? 'line-through text-gray-500' : ''}>
                      {task.text}
                    </span>
                  </div>
                  <button 
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="mt-4 text-tomato flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
        Settings
      </button>
      
      <Settings isVisible={showSettings} onSelectDuration={onSelectDuration} />
    </div>
  );
}

export default Timeline; 