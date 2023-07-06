import React from 'react';

function CheckItems({ toDo, toggleCompleted, toggleInProgress }) {
  return (
    <li style={{display: 'flex'}}>
      <label>
        <input
          type="checkbox"
          checked={toDo.inProgress}
          onChange={() => toggleInProgress(toDo.id)}
        />
        In Progress
      </label>
      <label>
        <input
          type="checkbox"
          checked={toDo.completed}
          onChange={() => toggleCompleted(toDo.id)}
        />
        Completed
      </label>
      <span style={{ marginLeft: '50px', textDecoration: toDo.completed ? 'line-through' : 'none' }}>{toDo.text}</span>
    </li>
  );
}
export default CheckItems;