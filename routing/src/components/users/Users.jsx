import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
    let [usersData, setUsersData] = useState([]);

    async function getUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsersData(data);
        } catch (error) {
            console.log('Error:', error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="text-center">
            {/* <h1 className="text-center display-3 text-info">Users</h1> */}
            {
                usersData.map(userObj=><Link to={`/users/${userObj.id}`} key={userObj.id} state={{user:userObj}} className="text-decoration-none text-link"><h3>{userObj.name}</h3></Link>)
            }
        </div>
    )
}

export default Users;

{/* <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}