import React from 'react';
import './style.css';
import Task from './Task.js';
import AddTaskForm from './AddTaskForm.js';

export default function App() {
  const [tasks, setTasks] = React.useState([]);
  function addNewTask(task) {
    setTasks([...tasks, task]);
  }

  function clearTasks() {
    setTasks([]);
  }
  return (
    <>
      <h2>My tasks</h2>
      <AddTaskForm addNewTask={addNewTask} clearTasks={clearTasks} />
      <div className="flex-column">
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </>
  );
}
