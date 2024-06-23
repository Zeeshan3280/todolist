import React, { useState } from 'react';

function Input() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showMessage, setShowMessage] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
      setShowMessage(false);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    if (updatedTasks.length === 0) {
      setShowMessage(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="todo-app">
      <h2>Add Your Task</h2>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter a task"
        />
        <button className="btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="list-container">
        {showMessage && (
          <p className="no-tasks-message">No tasks yet! Please add a task to get started.</p>
        )}
        <ul className="list">
          {tasks.map((task, index) => (
            <li key={index} className="list-item">
              {task}
              <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Input;
