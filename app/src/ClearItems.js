import React from 'react';
import './ClearItems.css'

function ClearItems({ clearToDoItems, clearAllItems }) {
    return (
      <div className="buttons">
        <button onClick={clearToDoItems}>Clear Completed</button>
        <button onClick={clearAllItems}>Clear All</button>
      </div>
    );
  }
  
  export default ClearItems;