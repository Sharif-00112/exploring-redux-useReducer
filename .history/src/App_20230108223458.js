import { useReducer, useState } from 'react';
import './App.css';

function App() {
  // useState example
  const [users, setUsers] = useState([]);

  // useReducer example 
  const [state, dispatch] = useReducer()

  return (
    <div className="App">

    </div>
  );
}

export default App;
