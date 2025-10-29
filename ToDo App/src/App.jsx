import React from "react";
import TodoList from "./components/TodoList";
import "./App.css"; 

function App() {
    return (
        <div className="app">
            <h1>Todo App</h1>
            <TodoList />
            <p className="name-text">Marianne Christine Regalado</p>
        </div>
    );
}

export default App;
