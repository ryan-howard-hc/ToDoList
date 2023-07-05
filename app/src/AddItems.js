import React, { useState } from 'react';

function AddItems({toDoText}) {
    const [inputValue, setInputValue] = useState('');

    function toDoSubmit(event) {
        toDoText(inputValue);
        setInputValue('');
    }

    function inputSubmit(event) {
        setInputValue(event.target.value)       //retrieves current input for the function, seems convoluted
    }

    return (
        <form onSubmit={toDoSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={inputSubmit}
            placeholder="What else do I need to do?"
          />
          <button type="submit">Add Item</button>
        </form>
      );
    }
    
    export default AddItems;
