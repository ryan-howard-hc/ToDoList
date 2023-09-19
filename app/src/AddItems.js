import React, { useState } from 'react';
import './AddItems.css';

function AddItems({ addItem }) {
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState('');

  function toDoSubmit(event) {
    event.preventDefault();
    console.log("inputValue:", inputValue); // Check if inputValue is correctly set
    console.log("dueDate:", dueDate); // Check if dueDate is correctly set
    addItem(inputValue, dueDate);
    setInputValue('');
    setDueDate('');
  }
  function inputSubmit(event) {
    setInputValue(event.target.value);
  }

  function dueDateSubmit(event) {
    setDueDate(event.target.value);
  }

  return (
    <div className='additems'>
      <form onSubmit={toDoSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={inputSubmit}
          placeholder="What else to do?"
        />
        <input
          type="date"
          value={dueDate}
          onChange={dueDateSubmit}
        />
        <button className="btn btn-primary btn-lg fw-bold" style={{ fontWeight: 'bold', fontStyle: 'italic' }} type="submit">Add Item</button>
      </form>
    </div>
  );
}
    
    export default AddItems;
