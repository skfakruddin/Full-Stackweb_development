
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
        <div className='container  mx-auto mt-5  '>
            <h1 className="text-center text-danger display-3">User Registration</h1>
         <form  className=" form mt-5 col-md-6 mx-auto border border-dark rounded-3 p-4" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" {...register('username', { required: true, minLength: 4 })} className="form-control text-danger" id="username" />
                {errors.username?.type === 'required' && <p className="text-danger">Username is required</p>}
                    {errors.username?.type === 'minLength' && <p className="text-danger">Min Lenght Should be 4</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="dob" className="form-label">DOB</label>
                <input type="date" {...register('dob' , { required: true })} name="dob" className="form-control" id="dob" />
                {errors.dob?.type === 'required' && <p className="text-danger">DOB is required</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="search" {...register('city', { required: true})} className="form-control" id="city" />
                {errors.city?.type === 'required' && <p className="text-danger">City is required</p>}
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