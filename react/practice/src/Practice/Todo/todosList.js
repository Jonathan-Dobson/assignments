import React from 'react';

export default (props) => props.todos.map(todo=>
    <div style={{
        display: 'inline-block',
        margin: 30,
        padding: 14,
        border: '2px solid green'
    }}>
        <h2>Todos</h2>
        <h3>{todo.title}</h3>
        <p>Completed: {todo.completed}</p>
        <p>id: {todo._id}</p>
        <p>{todo.description}</p>
        <p>${todo.price}</p>
    </div>
)

