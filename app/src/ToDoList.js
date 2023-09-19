import React, { useState, useEffect } from 'react';
import './ToDoList.css';
import AddItems from './AddItems';
import CheckItems from './CheckItems';
import ClearItems from './ClearItems';

function ToDoList() {
  const [toDos, setToDos] = React.useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [showCompleted, setShowCompleted] = useState(true); // Step 1

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toDos));
    console.log('Data saved to localStorage:', toDos);
  }, [toDos]);

  function addItem(itemText) {
    const newToDo = {
      id: Date.now(),
      text: itemText,
      completed: false,
      inProgress: false,
    };

    setToDos([...toDos, newToDo]);
  }

  function toggleCompleted(id) {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id === id) {
          const updatedToDo = { ...toDo };
          updatedToDo.completed = !toDo.completed;
          return updatedToDo;
        }
        return toDo;
      })
    );
  }

  function toggleInProgress(id) {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id === id) {
          const updatedToDo = { ...toDo };
          updatedToDo.inProgress = !toDo.inProgress;
          return updatedToDo;
        }
        return toDo;
      })
    );
  }

  function clearToDoItems() {
    const updatedToDos = toDos.filter((toDo) => !toDo.completed);
    setToDos(updatedToDos);
  }

  function clearAllItems() {
    setToDos([]);
  }

  return (
<div className="container">
  <div className="container2">
    <h1 className="title">To Do List</h1>
    <AddItems addItem={addItem} />
    <div className="button-container"> 
      <button  className="btn btn-primary btn-lg" onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? 'Hide Completed' : 'Show Completed'}
      </button>
      <ClearItems clearToDoItems={clearToDoItems} clearAllItems={clearAllItems} />
    </div>
    <div className='liststyle'>
    <ul className="list" style={{}}>
      {toDos.map((toDo) =>
        !toDo.completed || showCompleted ? (
          <CheckItems
            toggleCompleted={() => toggleCompleted(toDo.id)}
            toggleInProgress={() => toggleInProgress(toDo.id)}
            key={toDo.id}
            toDo={toDo}
          />
        ) : null
      )}
    </ul>
    </div>
  </div>
</div>
  );
}

export default ToDoList;