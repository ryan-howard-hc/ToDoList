import React, { useState } from 'react';
import './AddItems.css';

function AddItems({addItem}) {
    const [inputValue, setInputValue] = useState('');
    const [dueDate, setDueDate] = useState('');


    function toDoSubmit(event) { 
      event.preventDefault(); //now i can read the error at least...
      addItem(inputValue, dueDate);
      setInputValue('');
        setDueDate('');
    }

    function inputSubmit(event) {
        setInputValue(event.target.value)       //retrieves current input for the function, seems convoluted
    }
      function dueDateSubmit(event) {
    setDueDate(event.target.value);
  }

    return (
      <div className='additems'>
        <form  onSubmit={toDoSubmit}>
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
