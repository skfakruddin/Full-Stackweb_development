import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RegisteredUsers() {
    const [usersList, setUsersList] = useState([]);
    // const { state } = useLocation();
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
            <h2>Registered Users</h2>
            <table className='table mt-5 table-bordered'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map(userObj => (
                        <tr key={userObj.username}>
                            <td>{userObj.username}</td>
                            <td>{userObj.password}</td>
                            <td>{userObj.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RegisteredUsers;