import React from 'react';
import { useEffect, useState} from 'react';

function CheckItems({ toDo, toggleToDo }) {
    return (
      <li style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={toDo.completed}
          onChange={() => toggleToDo(toDo.id)}
        />
        {toDo.text}
      </li>
      
    );
  }


export default CheckItems;