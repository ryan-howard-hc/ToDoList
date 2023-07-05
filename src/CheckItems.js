import React, { useState } from 'react';

function CheckItems({ todo, toggleTodo }) {
    return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </li>
            <ClearItems clearTodoItems={clearTodoItems} clearAllItems={clearAllItems} />
    </div>
    );
  }


export default CheckItems;