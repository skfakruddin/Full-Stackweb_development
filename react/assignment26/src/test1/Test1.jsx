import './Test1.css'
function Test1(props)
{
    return(
        <div className='card'>
        <img src={props.item.image} alt="" />
            <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
        <p>{props.item.category}</p>
        <p>{props.item.rating.rate}</p>
        <p>{props.item.rating.count}</p>
        <p>{props.item.price}</p>

        </div>
    )
}
export default Test1;