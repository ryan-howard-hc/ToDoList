import React from 'react';
import { useEffect, useState} from 'react';

function ClearItems({ clearTodoItems, clearAllItems }) {
    return (
      <div>
        <button onClick={clearTodoItems}>Clear Completed</button>
        <button onClick={clearAllItems}>Clear All</button>
      </div>
    );
  }
  
  export default ClearItems;