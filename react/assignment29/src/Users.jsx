
import UserCount from './UserCount'
import React, { useState, useEffect } from 'react';
import './Users.css'

function User() {
    let [usersList, setUsersList] = useState([]);
    let [counter,setCounter]=useState(0)
    function changeCounter()
    {
        setCounter(counter+1)
    }

    async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
        setUsersList(data)
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            
            <h2 className='text-center display-1 text-danger'>Users</h2>
            <UserCount   data={{ counter,changeCounter }} />
            <div className=' container1 d-flex  '>
                {usersList.map(userObj => (
                    <div className='card' key={userObj.name}>
                        <div>
                        <h4>Name:{userObj.name}</h4>
                        <p>Username:{userObj.username}</p>
                        </div>
                        <div>
                        <p>Email:{userObj.email}</p>
                        <p>Phone:{userObj.phone}</p>
                        <p>Website:{userObj.website}</p>
                        <p>City:{userObj.address.city}</p>
                        </div>
                        <div>
                        <button className='adduser' onClick={changeCounter}>Add User</button>
                        </div>

                    </div>
                ))}
            </div>
            
        </div>
    )

}

export default User;