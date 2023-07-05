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

    function toggleCompleted(id) {
        setToDos(toDos.map(toDo =>
            toDo.id === id? {...toDo, completed: !toDo.completed} : toDo
        ));
    }

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