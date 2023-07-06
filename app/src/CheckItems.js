import React from 'react';

function CheckItems({ toDo, toggleCompleted }) {
  const completed = toDo && toDo.completed ? toDo.completed : false;

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(toDo.id)}
      />
      {toDo.text}
    </li>
  );
}

export default CheckItems;