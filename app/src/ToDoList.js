import React, { useState, useEffect } from 'react';

import  AddItems  from './AddItems';
import  CheckItems from './CheckItems';
import  ClearItems  from './ClearItems';


function ToDoList() {
  const [toDos, setToDos] = React.useState(() => {
    const storedTodos = localStorage.getItem('todos');                //INITIAL STATE is set with the function that retrieves the local storage at the start
    return storedTodos ? JSON.parse(storedTodos) : [];                //EXECUTED DURING INITIAL RENDER
  });

  // React.useEffect(() => {                                          //doesnt work because useEffect runs AFTER initial state
  //   const storedTodos = localStorage.getItem('todos');             //it DID retrieve the data, but the initial state had already been
  //   if (storedTodos) {                                             //set to an empty array.
  //     setToDos(JSON.parse(storedTodos));
  //   }
  // }, []);

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
      setToDos(toDos.map(toDo => {
        if (toDo.id === id) {
          const updatedToDo = { ...toDo };
          updatedToDo.completed = !toDo.completed;
          return updatedToDo;
        }
        return toDo;        //without this it checks all of them
      }));
    }

    function toggleInProgress(id) {
      setToDos(toDos.map(toDo => {
        if (toDo.id === id) {
          const updatedToDo = { ...toDo };
          updatedToDo.inProgress = !toDo.inProgress;
          return updatedToDo;
        }
        return toDo;
      }))
    }

    function clearToDoItems() {
      const updatedToDos = toDos.filter(toDo => !toDo.completed);
      setToDos(updatedToDos);
    }

    function clearAllItems() {
      setToDos([]);
    }

    return (
      <div>
        <h1>To Do List</h1>
        <AddItems addItem={addItem} />
        <ul>
          {toDos.map(toDo => (
            <CheckItems
              toggleCompleted={() => toggleCompleted(toDo.id)}
              toggleInProgress={() => toggleInProgress(toDo.id)}
              key={toDo.id}
              toDo={toDo}
            />
          ))}
        </ul>
        <ClearItems clearToDoItems={clearToDoItems} clearAllItems={clearAllItems} />
      </div>
    );
  }
  
  export default ToDoList;