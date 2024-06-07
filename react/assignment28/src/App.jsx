
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
function App(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    let [RegisteredUsers,setRegisteredUsers]=useState([])
    //form submission
    function handleFormSubmit(userObj)
    {
        setRegisteredUsers([...RegisteredUsers,userObj])
    }
    return (
        <div className='container mx-auto mt-5 '>
            <h1 className="text-center text-danger display-3">User Registration</h1>
         <form  className="form " onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" {...register('username')} className="form-control text-danger" id="username" />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">DOB</label>
                <input type="date" {...register('password')} name="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">City</label>
                <input type="search" {...register('email')} className="form-control" id="email" />
            </div>
            <div className='text-center'>
            <button type="submit" className="btn btn-primary ">Add User</button>
            </div>
         </form>
         <h2 className='text-center text-primary display-3 mt-5'>List of Users</h2>
         <table className='table text-center'>
            <thead cl>
                <tr>
                    <th>Username</th>
                    <th>DOB</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    RegisteredUsers.map((userObj,index)=>(
                        <tr key={index}>
                            <td>{userObj.username}</td>
                            <td>{userObj.password}</td>
                            <td>{userObj.email}</td>
                        </tr>
                    ))
                }
            </tbody>
         </table>
        </div>
    )
}
export default App;