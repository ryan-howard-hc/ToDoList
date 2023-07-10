import React, { useState, useEffect } from 'react';
import './ToDoList.css';
import  AddItems  from './AddItems';
import  CheckItems from './CheckItems';
import  ClearItems  from './ClearItems';


function ToDoList() {
  const [toDos, setToDos] = React.useState(() => {
    const storedTodos = localStorage.getItem('todos');                //INITIAL STATE is set with the function that retrieves the local storage at the start
    return storedTodos ? JSON.parse(storedTodos) : [];                //EXECUTED DURING INITIAL RENDER
  });     //callback function 

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
        id: Date.now(),     //creates unique identifier based on timestamp, thanks fox
        text: itemText,
        completed: false,
        inProgress: false,
      };
  
      setToDos([...toDos, newToDo]);
    }
  
    function toggleCompleted(id) {
      setToDos(toDos.map(toDo => {      
        if (toDo.id === id) {
          const updatedToDo = { ...toDo };    //this spread allows for a copy that can be altered without altering the original and put it into existing state
          updatedToDo.completed = !toDo.completed;  //maybe couldve used dependency array method clayton used
          return updatedToDo;
        }
        return toDo;        //without this it checks all of them
      }));
    }

    function toggleInProgress(id) {               //
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
      <div className="container">
        <div className="container2">
        <h1 className="title">To Do List</h1>
        <AddItems addItem={addItem} />
        <ul className="list" style={{}}>
          {toDos.map(toDo => (
            <CheckItems
              toggleCompleted={() => toggleCompleted(toDo.id)}  //calls the  function w the property
              toggleInProgress={() => toggleInProgress(toDo.id)}
              key={toDo.id}
              toDo={toDo}
            />
          ))}
        </ul>
        <ClearItems clearToDoItems={clearToDoItems} clearAllItems={clearAllItems} />
        </div>
      </div>
    );
  }
  
  export default ToDoList;