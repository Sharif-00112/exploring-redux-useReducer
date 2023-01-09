// import { useState } from 'react';
// import { useReducer } from 'react';
import './App.css';
import Count from './Components/Count';
import Portal from './Components/Portal';

function App() {
  // useState example
  // const [users, setUsers] = useState([]);

  // useReducer example 
  // const [ state, dispatch ] = useReducer(countReducer, countState);

  return (
    <div className="App">
      <p>reducer and state are in same page</p>
      <Count></Count>
      <br />
      <hr />
      <p>reducer and state are in different page</p>
      <Portal></Portal>
      <hr />
    </div>
  );
}

export default App;
