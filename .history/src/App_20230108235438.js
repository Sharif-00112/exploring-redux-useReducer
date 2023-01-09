// import { useState } from 'react';
import { useReducer } from 'react';
import './App.css';
import Count from './Components/Count';

function App() {
  // useState example
  // const [users, setUsers] = useState([]);

  // useReducer example 
  const [state, dispatch] = useReducer()

  return (
    <div className="App">
      <Count></Count>
    </div>
  );
}

export default App;
