import React, { useState, useEffect } from "react";

function Users() {
    let [usersData, setUsersData] = useState([]);

    async function getUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users' ,{method:"GET"});
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
            <h1 className="text-center display-3 text-info">Users</h1>
            <table className="table">
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
            </table>
        </div>
    )
}

export default Users;