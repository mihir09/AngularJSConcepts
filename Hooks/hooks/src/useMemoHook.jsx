// Here useState causes expensiveCalulation to run everytime 
// when re-rendered beaucse of state changes
// useMemo resuces by storeing the output of calculation 
// and using it unless and until count's state are changed
// This will stop expansive calulations when adding todos

import React, { useState, useMemo } from 'react'

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
};

function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };
    
  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>Increment Count</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  )
}

export default UseMemoHook;