import React, { useState, useEffect } from 'react';
import  AddItems  from './AddItems';
import  CheckItems from './CheckItems';
import  ClearItems  from './ClearItems';

function ToDoList() {
    const [toDos, setToDos] = useState ([]);

    // useEffect(() => {
    //   const storedToDos = localStorage.getItem('toDos');
    //   if (storedToDos) {
    //     setToDos(JSON.parse(storedToDos));
    //   }
    // }, []);
  
    // useEffect(() => {
    //   localStorage.setItem('toDos', JSON.stringify(toDos));
    // }, [toDos]);

    function addItem(itemText) {
      const newToDo = {
        id: Date.now(),
        text: itemText,
        completed: false
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
        return toDo;
      }));
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
              key={toDo.id}
              toDo={toDo}
              toggleCompleted={() => toggleCompleted(toDo.id)}
            />
          ))}
        </ul>
        <ClearItems clearToDoItems={clearToDoItems} clearAllItems={clearAllItems} />
      </div>
    );
  }
  
  export default ToDoList;