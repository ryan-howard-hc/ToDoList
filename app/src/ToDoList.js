import React, { useState, useEffect } from 'react';
import { AddItems } from './AddItems.js';
import { CheckItems } from './CheckItems.js';
import { ClearItems } from './ClearItems.js';

function ToDoList() {
    const [toDos, setToDos] = useState ([]);

    useEffect(() => {
      const storedToDos = localStorage.getItem('toDos');
      if (storedToDos) {
        setToDos(JSON.parse(storedToDos));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('toDos', JSON.stringify(toDos));
    }, [toDos]);

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
          const updatedToDo = {};
          for (let prop in toDo) {
            if (prop === 'completed') {
              updatedToDo.completed = !toDo.completed;
            } else {
              updatedToDo[prop] = toDo[prop];
            }
          }
          return updatedTodo;
        }
        return todo;
      }));
    }

    //     setToDos(toDos.map(toDo =>
    //         toDo.id === id ? {...toDo, completed: !toDo.completed} : toDo
    //     )); //spread operator creates new object that copies properties of the toDo object. The !toDo.completed updates its value using the logical not operator
    // }

    function clearToDo() {
        const clearToDoItems = toDos.filter(toDo => !toDo.completed);
        setToDos(clearToDoItems);
    }

    function clearAllItems(){
        setToDos([]);
    }

    return (
    <div>
        <h1>Todo List</h1>
          <AddItems addItem={addItem} />
        <ul>
        {todos.map(todo => (
          <CheckItems
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
          />
        ))}
        </ul>
        <ClearItems clearToDo={clearToDo} clearAllItems={clearAllItems} />
    </div>
    );
}

export default ToDoList;