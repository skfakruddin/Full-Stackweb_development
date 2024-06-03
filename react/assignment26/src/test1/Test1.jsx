import './Test1.css'
function Test1(props)
{
    return(
        <div className='card'>
        <img src={props.item.image} alt="" />
            <h2 cl>{props.item.title}</h2>
        <p className='black'>{props.item.description}</p>
        <p className='grey'>{props.item.category}</p>
        <p className='bgrey'>Rating - {props.item.rating.rate} . {props.item.rating.count}</p>
        <h3 className='price'>{props.item.price}</h3>

        </div>
    )
}
export default Test1;