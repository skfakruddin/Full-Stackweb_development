import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react"; 
import { sampleContext } from '../../contexts/testContext';
import { usersContext } from '../../contexts/usersContext';
function Login(){

        let {a,setA}=useContext(sampleContext)
        let { users,setUsers } = useContext(usersContext);

        let {register,handleSubmit,formState:{errors}}=useForm()
        let navigate=useNavigate()
        let [userCredErr,setUserCredErr]=useState('')
        async function onUserLogin(userCredentialObj)
        {
            let res=await fetch(`http://localhost:3000/users?username=${userCredentialObj.username}`)
            let usersArray = await res.json();
            if(usersArray.length===0){
               setUserCredErr('Username/Password are in correct')
            }
            else{
                navigate('/user-dashboard',{state:usersArray[0]})
            }

        }
    return (
        <div>
            <h2>{a}</h2>
            <h2>{users[0].name}</h2>
            <h1 className="text-center text-info">Login</h1>
            {
                userCredErr.length!==0 && <p className="fs-1 text-danger text-center ">{userCredErr}</p>
            }
            <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onUserLogin)}>
                <div className="mb-3">
                    <input type="text" {...register('username')} className="form-control" placeholder="username" />
                </div>
                
                <div className="mb-3">
                    <input type="text" {...register('password')} className="form-control" />
                </div>

            <button type="submit" className="btn btn-success">login</button>
            </form>

        </div> 
    );
}
export default Login;