let n='fakruddin';
let skills=['html','css','typescript','react'];
let person={pid:100,game:'ravi',age:30}
let students=
[
  {sid:101,sname:'jai',marks:90},
  {sid:102,sname:'kiran',marks:80},
  {sid:103,sname:'suresh',marks:70},
  {sid:104,sname:'ramesh',marks:60},
  {sid:105,sname:'lokesh',marks:50},
]
  return (
  <div className='details'>
    <h1>Hello World</h1>
    <h2>Welcome to my first React app</h2>
    <h3>My name is {n}</h3>
    <h1>My skills are:</h1>
    {
      skills.map(mkill=><h3>{mkill}</h3>)
    }
    <h1>person details</h1>
    <h2>{person.pid}</h2>
    <h2>{person.game}</h2>
    <h2>{person.age}</h2>
    <table>
      <thead>
        <tr>
          <th>sid</th>
          <th>sname</th>
          <th>marks</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map(std=><tr>
            <td>{std.sid}</td>
            <td>{std.sname}</td>
            <td>{std.marks}</td>
          </tr>)
        }
      </tbody>
    </table>
    <h2>Welcome to my first React app</h2>
 {
   n.map(num=> num%2===0?<h2 key={num}>{num} is even</h2>:<h2 key={num}>{num} is odd</h2> )
 }
 let [counter,setCounter]= useState(1);
 let [person,setPerson]=useState({username:"ravi",email:"ravi@gmail.com",city:'hyd'})
 let [skills,setSkills]=useState(['css','html'])
 function handleCounterinc()
{
setCounter(counter+1);
}  
function handleCounterdec()
{
setCounter(counter-1);
}  
function handleReset()
{
setCounter(100);
}  
function handlePersonChanges()
{
  setPerson({...person,username:'ravi kumar',city:"banglore",email:"ravikumar@gmail.com"});
}
function handleSkills(){
  let copy=[...skills]
  copy.splice(1,1,' vue')
  setSkills(copy)
}
  return (
 
 <div className='details'>
 <h1>welcome to react</h1>
<h2>{counter}</h2>
<button onClick={handleCounterinc}>increment</button>
<button onClick={handleCounterdec}>decrement</button>
<button onClick={handleReset}>reset</button>
<h2>{person.username}</h2>
<h2>{person.email}</h2>
<h2>{person.city}</h2>
<button onClick={handlePersonChanges}>change</button>
<h2>{skills}</h2>
<button onClick={handleSkills}>change</button>


  </div>