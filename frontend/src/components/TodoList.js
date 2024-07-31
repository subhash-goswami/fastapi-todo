import React, { useEffect, useState } from 'react';
import todoService from '../services/todoService';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getTodos().then(response => {
            setTodos(response.data);
        });
    }, []);

    const addTodo = (todo) => {
        todoService.createTodo(todo).then(response => {
            setTodos([...todos, response.data]);
        });
    };

    const updateTodo = (id, todo) => {
        todoService.updateTodo(id, todo).then(response => {
            setTodos(todos.map(t => (t.id === id ? response.data : t)));
        });
    };

    const deleteTodo = (id) => {
        todoService.deleteTodo(id).then(() => {
            setTodos(todos.filter(t => t.id !== id));
        });
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
};

export default TodoList;
