import React from 'react';

export default function AddTaskForm({ addNewTask, clearTasks }) {
  const [newTask, setNewTask] = React.useState('');
  return (
    <div className="d-flex">
      <input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button
        onClick={() => {
          addNewTask({ title: newTask, completed: false });
          setNewTask('');
        }}
      >
        Add
      </button>
      <button onClick={() => clearTasks([])}>Clear</button>
    </div>
  );
}
