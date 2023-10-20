// Demonstrates the usage of useReducer that allows to define multiple 
// actions that can be performed on current state based on action type

import React, { useReducer } from 'react';

const initialState = { count: 0 };

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

function UseReducerHook() {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default UseReducerHook;
