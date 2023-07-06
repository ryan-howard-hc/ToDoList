import React from 'react';
import { useEffect, useState} from 'react';

function ClearItems({ clearToDoItems, clearAllItems }) {
    return (
      <div>
        <button onClick={clearToDoItems}>Clear Completed</button>
        <button onClick={clearAllItems}>Clear All</button>
      </div>
    );
  }
  
  export default ClearItems;