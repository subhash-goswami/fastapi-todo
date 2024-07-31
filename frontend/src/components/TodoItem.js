import React from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const handleToggleComplete = () => {
        updateTodo(todo.id, { ...todo, completed: !todo.completed });
    };

    return (
        <div>
            <h3 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={handleToggleComplete}>
                {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
