import React from 'react';

function CheckItems({ toDo, toggleCompleted, toggleInProgress }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={toDo.inProgress}
          onChange={() => toggleInProgress(toDo.id)}
        />
        In Progress
      </label>
      <span style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}>{toDo.text}</span>
      <label>
        <input
          type="checkbox"
          checked={toDo.completed}
          onChange={() => toggleCompleted(toDo.id)}
        />
        Completed
      </label>
    </li>
  );
}
export default CheckItems;