import './Test1.css';
function Test1(props){
 
return(
  <div className='card'>
<h2>{props.x.pid}</h2> 
<img className='main' src={props.x.image} alt="" />
<img className='small' src={props.x.image1} alt="" />

<h2>{props.x.title}</h2> 
<p className='desc'>{props.x.description}</p> 
<p className='place'>{props.x.place}</p>
<p className='date'>{props.x.date}</p>


  </div>
)
  
}
export default Test1;

