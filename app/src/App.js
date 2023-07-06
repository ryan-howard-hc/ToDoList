import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="body">
        <div className ="container">
        <>
        <ToDoList />
        </>
        </div>
        </div>
    );
}

export default App;