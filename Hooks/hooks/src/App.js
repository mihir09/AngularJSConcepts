import './App.css';
import UseCallBackHook from './useCallBackHook';
import UseMemoHook from './useMemoHook';
import UseReducerHook from './useReducerHook';
import UseRefHook from './useRefHook';

function App() {
  return (
    <div>
      <h1>useRef Hook</h1>
      <UseRefHook/>
      <h1>useReducer Hook</h1>
      <UseReducerHook/>
      <h1>useMemo Hook</h1>
      <UseMemoHook/>
      <h1>useCallBack Hook</h1>
      <UseCallBackHook/>
    </div>
  );
}

export default App;
