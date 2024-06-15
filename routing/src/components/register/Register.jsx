/* import {useForm} from 'react-hook-form';
import { useState } from 'react';
function Register(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    let [RegisteredUsers,setRegisteredUsers]=useState([])
    //form submission
    function handleFormSubmit(userObj)
    {
        setRegisteredUsers([...RegisteredUsers,userObj])
    }
    return (
        <div>
            <h1 className="text-center text-danger display-3">Register</h1>
         <form  className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" {...register('username')} className="form-control text-danger" id="username" />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Password</label>
                <input type="password" {...register('password')} name="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">email</label>
                <input type="email" {...register('email')} className="form-control" id="email" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
         <h2 className='text-center text-primary display-3 mt-5 '>List of Users</h2>
         <table className='table'>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
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
export default Register;
 */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  let { register, handleSubmit,formState:{errors}} = useForm();
  let navigate = useNavigate();

    // From Submission
    async function handleFormSubmit(userObj) {
        console.log('userObj: ', userObj);

        // Post Request
        let res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        console.log('res: ', res);
        if(res.status === 201){
            // alert('User Created Successfully');
            navigate("/login");
        }

    }


    return (
        <div>
            <h1 className="text-center text-info display-3">Register</h1>
            <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
                {/* Username */}
                <div className="mt-2">
                    <label htmlFor="username" className="form-lable">Username</label>
                    <input type="text" {...register('username', { required: true, minLength: 4 })} id="username" className="form-control" />
                    {errors.username?.type === 'required' && <p className="text-danger">Username is required</p>}
                    {errors.username?.type === 'minLength' && <p className="text-danger">Min Lenght Should be 4</p>}
                </div>
                {/* Email */}
                <div className="mt-3">
                    <label htmlFor="email" className="form-lable">Email</label>
                    <input type="email" id="email" {...register('email', { required: true })} className="form-control" />
                    {errors.email?.type === 'required' && <p className="text-danger">Email is required</p>}
                </div>
                {/* Password */}
                <div className="mt-3">
                    <label htmlFor="password" className="form-lable">Password</label>
                    <input type="password" id="password" {...register('password', { required: true })} className="form-control" />
                    {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                </div>
                {/* Submit */}
                <div>
                    <button type="submit" className="btn btn-primary mt-3">Register</button>
                </div>

            </form>
        </div>
    )
}


export default Register;