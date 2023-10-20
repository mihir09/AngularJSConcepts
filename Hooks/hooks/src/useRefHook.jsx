// It demenostrates the reference update using useRef 
// without causing re-render of the component

import { useRef, useState } from 'react';

function UseRefHook() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const incrementCountRef = () => {
    countRef.current += 1;
    console.log(`Count (ref): ${countRef.current}`);
  };

  const incrementCountState = () => {
    setCount(count + 1);
    console.log(`Count (state): ${count + 1}`);
  };

  return (
    <div>
      <p>Count (stored in ref): {countRef.current}</p>
      <button onClick={incrementCountRef}>Increment (ref)</button>

      <p>Count (stored in state): {count}</p>
      <button onClick={incrementCountState}>Increment (state)</button>
    </div>
  );
}
export default UseRefHook;
