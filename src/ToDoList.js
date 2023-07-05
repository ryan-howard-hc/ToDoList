import React from 'react';
import { AddItems } from './AddItems.js';
import { CheckItems } from './CheckItems.js';
import { ClearItems } from './ClearItems.js';

function ToDoList() {
    const [toDos, setToDos] = useState ([]);

    function addItem(itemText) {
        const newToDo = {
          id: Date.now(),
          text: itemText,
          completed: false
        };
        
    setToDos([...toDos, newToDo]);
    }

    function toggleCompleted() {

    }

    function clearToDo() {
        clearAll?
    }

    return (
        <div>
          <h1>Todo List</h1>
          <AddItems addItem={addItem} />
          </div>)
          
}