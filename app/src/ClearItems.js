import React from 'react';
import './ClearItems.css'

function ClearItems({ clearToDoItems, clearAllItems }) {
    return (
      <div className="buttons">
        <button className="btn btn-primary btn-lg" onClick={clearToDoItems}>Clear Completed</button>
        <button className="btn btn-primary btn-lg" onClick={clearAllItems}>Clear All</button>
      </div>
    );
  }
  
  export default ClearItems;