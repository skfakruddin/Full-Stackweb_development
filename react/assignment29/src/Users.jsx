import UserCount from './UserCount'
import React, { useState, useEffect } from 'react';

function User(){
    let [usersList, setUsersList] = useState([]);

    async function getUsers(){
        let users=await fetch('http://localhost:3000/users',{method:"GET"});
        let usersJson=await users.json()
        setUsersList(usersJson)

    
    }
    useEffect(() => {
        getUsers()
    }, []);
    return (
        <div>
            <h2>Users</h2>
            <div className='container'>
                {usersList.map(userObj => (
                    <div key={userObj.name}>
                        <p>{userObj.username}</p>
                        <p>{userObj.email}</p>
                    </div>
                ))}
            </div>
            <UserCount />
        </div>
    )
    
}

export default User;