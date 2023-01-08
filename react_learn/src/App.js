import { useState } from 'react';
import './App.css';
import { Planets} from './Planets';

function App() {
  const age=150;
  const isGreen=true;
  
  const [count, setCount]= useState(0);


  const planets =[
    {name: "Mars" , isGasPlanet:false},
    {name: "Earth" , isGasPlanet:false},
    {name: "jupiter" , isGasPlanet:true},
    {name: "venus" , isGasPlanet:false},
    {name: "Neptune" , isGasPlanet:true},
    {name: "Uranus" , isGasPlanet:true},
  ];
  age>=18 ? console.log("Over age") : console.log("Under Age");

  
  const Increase=()=>{
    setCount(count+1);
  }
  const Decrease=()=>{
    setCount(count-1);
  }
  const setZero=()=>{
    setCount(0);
  }
  return (
    
    <div className="App">
      
      
      <h1>{count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={setZero}>Set Zero</button>
      {planets.map((planet, key)=>{
        if(planet.isGasPlanet){
        return  <Planets  name={planet.name} />}
      })}
      {age>=18 ? <h1 style={{color: isGreen ? "green" : "red"}}>"Over age"</h1> : <h1>"Under Age"</h1>}
      <User name="Muhammad Uzair" age={24} email="muzaireng@gmail.com"/>
      <Job Salary={1000} Position="Developer" Company="Systems" />
    </div>
  );
}
const User =(props)=>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>

    </div>
  );
};
const Job = (props)=>{
  return(
    <div>
      <h1>{props.Salary}</h1>
      <h1>{props.Position}</h1>
      <h1>{props.Company}</h1>
    </div>
  )
}
export default App;
