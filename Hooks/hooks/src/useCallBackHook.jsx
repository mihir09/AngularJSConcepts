// useCallback helps in returning memoized function. Like in following example, 
// Todos that are already rendered will not be rendered again because they are stored

import React, { useState, useCallback } from 'react'

function UseCallBackHook() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <div>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>Count</button>
            </div>
        </div>
    )
}

export default UseCallBackHook