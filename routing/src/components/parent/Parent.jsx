import { useState } from "react";
import Child from "../child/Child";
function Parent()
{
    let [counter,setCounter]=useState(0)
    let [dataFromChild,setdataFromChild]=useState(0)
    function changeCounter(){
        setCounter(counter+1)
    }
    function getDataFromChild(data){
        console.log(data)
        setdataFromChild(data);
    }
    return (
        <div className="bg-primary w-75 mx-auto mt-5 text-center ">
        <h1>Parent</h1>
        <h2>Counter in Parent -{counter}</h2>
        <h2>Data From Child -{dataFromChild}</h2>
    <button className="btn btn-light p-2 m-4"  onClick={changeCounter}>Increment</button>
        <Child data={{counter,changeCounter,getDataFromChild}} />
        </div>
    );
}
export default Parent;