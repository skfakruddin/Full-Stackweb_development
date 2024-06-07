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
  let { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  //form submission
  function handleFormSubmit(userObj) {
    //programatically navigate to registred-users and send usersList data too
     navigate("/registered-users", { state: userObj });
  }

  return (
    <div>
      <h1 className="text-center text-info display-3">Register</h1>

      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            id="username"
            className="form-control"
          />
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            className="form-control"
          />
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="form-control"
          />
        </div>
        {/* submit button */}
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;