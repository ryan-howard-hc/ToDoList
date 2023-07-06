import React, { useState } from 'react';
import './AddItems.css';

function AddItems({addItem}) {
    const [inputValue, setInputValue] = useState('');

    function toDoSubmit(event) { 
      event.preventDefault(); //now i can read the error at least...
        addItem(inputValue);
        setInputValue('');
    }

    function inputSubmit(event) {
        setInputValue(event.target.value)       //retrieves current input for the function, seems convoluted
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
          <button className="btn btn-primary btn-lg fw-bold" style={{ fontWeight: 'bold', fontStyle: 'italic' }} type="submit">Add Item</button>
        </form>
        
        </div>
      );
    }
    
    export default AddItems;
