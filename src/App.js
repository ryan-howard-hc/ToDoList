import React from 'react';
import { Header } from './Header.js';
import { checkItems } from './CheckItems.js';
import './App.css';

function App() {
    return (
        <>
        <Header />
        <ToDoList />
        </>
    );
}

export default App;