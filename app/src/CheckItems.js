import React from 'react';
import { useEffect, useState} from 'react';

function CheckItems({ todo, toggleToDo }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleToDo(todo.id)}
        />
        {todo.text}
      </li>
      
    );
  }


export default CheckItems;