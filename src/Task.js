import React from 'react';
export default function Task({ task }) {
  return (
    <div className="d-flex">
      <input type="checkbox" value={task.title} />
      <label for="vehicle1">{task.title}</label>
      <br />
    </div>
  );
}
