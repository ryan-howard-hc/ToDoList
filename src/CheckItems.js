import React, { useState } from 'react';

function CheckItems({ todo, toggleTodo }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </li>
    );
  }


export default CheckItems;