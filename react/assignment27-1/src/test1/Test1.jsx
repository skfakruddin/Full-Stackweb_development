import './Test1.css';
function Test1(props){
 
return(
  <div className='card'>
<h2>{props.x.pid}</h2> 
<img src={props.x.image} alt="" />
<h2>{props.x.name}</h2> 
<h2>{props.x.age}</h2> 


  </div>
)
  
}
export default Test1;

