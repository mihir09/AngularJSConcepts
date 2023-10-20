import './App.css';
import Count from './components/count';
import {Greet} from './components/greet'
import Hello from './components/hello';
import Message from './components/message';
// import Greet from './components/greet'
import { Welcome } from './components/welcome';
import { Handlers } from './components/handlers';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Greet></Greet> */}
        {/* <Hello></Hello>
        <Hello></Hello> */}

        {/* <Greet name="Bruce" heroName="Batman">
          <p>Checking children</p>
          <button>Click</button>
        </Greet>
        <Greet name="Clark" heroName="Superman"></Greet>
        <Greet name="Diana" heroName="Wonder woman"></Greet>

        <Welcome name="Bruce" heroName="Batman">
          <p>Checking children</p>
        </Welcome>
        <Welcome name="Clark" heroName="Superman"></Welcome>
        <Welcome name="Diana" heroName="Wonder woman"></Welcome> */}

        {/* <Message></Message> */}

        {/* <Count></Count> */}

        <Handlers></Handlers>

      </header>
    </div>
  );
}

export default App;
