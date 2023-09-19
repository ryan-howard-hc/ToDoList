import React from 'react';
import inProgressImage from './work-in-progress.png';
import './Checkitems.css';

function CheckItems({ toDo, toggleCompleted, toggleInProgress }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', borderBottom: '1px solid black' }}>
      <label>
        <input 
          type="checkbox"
style = {{width:'20px', height:'15px', cursor:'pointer',  borderRadius: '20px'}}
          checked={toDo.inProgress}
          onChange={() => toggleInProgress(toDo.id)}
        />
        In Progress
      </label>
      <label>
        <input
          type="checkbox"
          style = {{width:'20px', height:'15px', cursor:'pointer',  borderRadius: '20px', marginLeft: '20px'}}

          checked={toDo.completed}
          onChange={() => toggleCompleted(toDo.id)}
        />
        Completed
      </label>
      <span style={{ marginLeft: '50px', textDecoration: toDo.completed ? 'line-through' : 'none' }}>
        {toDo.text}
        {toDo.inProgress && <img src={inProgressImage} style={{ width: '60px', height: '60px', marginLeft: '20px' }}></img>}
        {toDo.dueDate && <div style={{ fontFamily: 'Arial !important' }}>Due Date: {toDo.dueDate} </div>}

      </span>
    </li>
  );
}
export default CheckItems;