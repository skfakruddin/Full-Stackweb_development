import { useState } from "react";
import Child from "./assets/Child";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
function App()
{
    let [counter,setCounter]=useState(0)
    
    function Increment(){
        setCounter(counter+1)
    }
    function Decrement(){
        setCounter(counter-1)
    }
    
   
    return (
        <div className="bg-primary w-75 mx-auto mt-5 text-center ">
        <h1>Parent</h1>
        <h2>Counter in Parent : {counter}</h2>
    <Child data={{ Increment ,Decrement }} />
    </div>
    );
}
export default App;