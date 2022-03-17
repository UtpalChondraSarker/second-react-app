import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExtrnalUsers></ExtrnalUsers>

    </div>
  );
}
function ExtrnalUsers(){
const [users,setUsers]=useState([]);
useEffect(()=>{
  console.log('use effect');
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
},[])

  return(
    <div>
      <h1>ExtrnalUser</h1>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  
  return(
    
    <div className='container'>
      <h3>User name:{props.name}</h3>
     <h4>user email:{props.email}</h4>
    </div>
  )
}

// icrease and decrease
function Counter(){
  const[count, setCount]=useState(0);
  const handelIncrease=()=>setCount(count+1)
  const handeDecrease=()=>setCount(count-1)

  return(
    <div className=''>
      <h2>Counter:{count}</h2>
      <button className='container' onClick={handelIncrease}>Increase</button>
      <button onClick={handeDecrease}>decrease</button>
    </div>
  )
}

export default App;
