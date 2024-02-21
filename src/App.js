
import { useReducer, useState } from 'react';
import './App.css';
import Person from './Person';


let initialValue = 0;
function reducer(state, action) {
  if (action.type == "increament") {
    return state + 1;
  }
  if (action.type == "decreament") {
    return state - 1;
  }
  if (action.type == "reset") {
    return initialValue;
  }
}
function App() {
  const [timer, setTimer] = useState(0)
  const [state, setState] = useReducer(reducer, initialValue)
  const [hide, setHide] = useState(false)
  const handleClick = () => {
    setHide(!hide)
  }
  setTimeout(() => {
    setTimer(timer + 1)
  }, 800);
  return (
    <>
      {
        hide ? <button className='btnhide' style={{ backgroundColor: "#f44336", color: "white" }} onClick={handleClick}>Hide</button > : <button className='btnhide' style={{ backgroundColor: "#4CAF50", color: "white" }} onClick={handleClick}>Show</button>
      }
      <div>
        <Person />
      </div>
      {
        hide && <div className="App">
          <h1 style={{ fontSize: "70px", color: "blue" }}>Timer : {timer}</h1>
          <h1 style={{ fontSize: "70px", color: "blue" }}>Counter: {state}</h1>
          <button className='btnminus' onClick={() => setState({ type: "decreament" })}>Decrement</button>
          <button className='btnreset' onClick={() => setState({ type: "reset" })}>Reset</button>
          <button className='btnadd' onClick={() => setState({ type: "increament" })}>Increment</button>
        </div>
      }
    </>
  );
}

export default App;
