import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  return (
    <div className="App">
    <Counter></Counter>
    <Jasonpractice></Jasonpractice>
    </div>
  );
}

function Jasonpractice (){
  const [users, setUser]= useState([]);
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUser(data))
  },[])
   return(
     <div>
       {
         users.map(user=><Loaduser name = {user.name} email = {user.email}></Loaduser>)
       }
     </div>
   );
}

function Loaduser(props){
  return(
    <div>
      <h4>Name: {props.name} </h4>
      <h5>Email: {props.email} </h5>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const increaseData = ()=>{
    const newNumber = count + 1;
    setCount(newNumber);
  }
    const decrease = ()=>{
    const newNumber = count - 1;
    setCount(newNumber);
  }
return(
  <div>
    <h3>Count: {count}</h3>
    <button onClick={increaseData}>Increase</button>
      <button onClick={decrease}>Increase</button>
  </div>
);
}

export default App;
