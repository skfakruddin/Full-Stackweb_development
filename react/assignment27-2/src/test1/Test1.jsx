import './Test1.css';
function Test1(props){
 
return(
  <div className='card'>
<h2>{props.x.pid}</h2> 
<img src={props.x.image} alt="" />
<h2>{props.x.title}</h2> 
<h2>{props.x.description}</h2> 
<h2>{props.x.place}</h2>
<h2>{props.x.date}</h2>


  </div>
)
  
}
export default Test1;

