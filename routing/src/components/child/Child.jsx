import { useState } from "react";

function Child(props)
{
    let [sampleData,setsampleData]=useState(100)
    return (
        <div className="bg-warning p-4 ">
        <h1>Child</h1>
        <h2>Counter: {props.data.counter}</h2>
        <button className="btn btn-danger" onClick={props.data.changeCounter}>change</button>
        <button className="btn btn-primary" onClick={()=>props.data.getDataFromChild(sampleData)}>Send Data To Parent</button>
        </div>
    );
}
export default Child;