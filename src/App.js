import React, { useState, useEffect } from 'react';
import Form from './Component/Form';
import TodoList from './Component/TodoList';
import './App.css'


const App = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("All");
    const [filteredTodos, setFilterTodo] = useState([]);

    useEffect(() => {
        getLocalTodo();
    }, [])


    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case 'Complete':
                setFilterTodo(todos.filter(todo => todo.complete === true));
                break;
            case 'Uncomplete':
                setFilterTodo(todos.filter(todo => todo.complete === false));
                break;
            default:
                setFilterTodo(todos);
                break;
        }
    };


    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }


    const getLocalTodo = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todo", JSON.stringify([]));
        }
        else {
            let localTodo = JSON.parse(localStorage.getItem("todos"));
            setTodos(localTodo);
        }

    }
    

    return (
        <div className="App">
            <header className = "header">
                <h2>ToDo List</h2>
            </header>
            <Form input={input} setInput={setInput} todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}

            />
            <TodoList
                filteredTodos={filteredTodos}
                todos={todos} setTodos={setTodos} />

        </div>
    )
}

export default App;