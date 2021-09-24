import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter(){
 const [count, setCount] = useState(55);
 const dataIncrease = () =>setCount(count + 1);
 const dataDecrease = () =>setCount(count - 1);

 return(
   <div>
     <h2>Count: {count}</h2>
     <button onClick={dataIncrease}>Increase</button>
     <button onClick={dataDecrease}>Decrease</button>
    </div>
 );
}

export default App;
