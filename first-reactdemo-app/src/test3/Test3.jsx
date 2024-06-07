import './Test3.css'
function Test3(){
    let [counter,setCounter]=useState()
    function changeCounter(){
        setCounter(counter+1)
    }
    useEffect(()=>{ 
        console.log("test3 executed");
    },[])
    return(
        <div className='card'>
            <h2>Test3</h2>
            <h3>Counter:{counter}</h3>
            <button onClick={changeCounter}>Change Counter</button>
        </div>
    )
}
export default Test3;