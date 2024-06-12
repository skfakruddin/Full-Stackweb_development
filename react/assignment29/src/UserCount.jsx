function UserCount(props)
{
    return(
        <h1 className="text-end text-dark mx-2"> Current users: {props.data.counter}</h1>
    )
}

export default UserCount;