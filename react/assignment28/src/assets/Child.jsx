import { useState } from "react";

function Child(props)
{
    // let [sampleData,setsampleData]=useState(100)
    return (
        <div className="bg-warning p-4 ">
        <h1>Child</h1>

        <button className="btn btn-success mx-3 increment" onClick={props.data.Increment}>Increment</button>
        <button className="btn btn-danger decrement" onClick={props.data.Decrement}>Decrement</button>
        </div>
    );
}
export default Child;