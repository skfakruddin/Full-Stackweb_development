import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
function Register() {
  try{
  const {register, handleSubmit,formState:{errors}} = useForm()
  // const onUserRegister(newUser){
  //   console.log(newUser)
  // }
  let {err,setErr}=useState("")
  const navigate=useNavigate()
  async function onUserRegister(newUser){
    console.log(newUser)
    let users=await fetch('http://localhost:4000/users',{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(newUser)});
  if(users.status===201){
    navigate('/login')
  }
}
  }catch (err)
{
  // console.log(err)
  setErr(err.message)
}

  

  return (
    <div>
      <p className='display-3 text-center'>User Registration</p>
      <div className='row'>
      <div className='col-11 col-sm-10 col-md-6 mx-auto'>
      <form className='mx-auto mt-5 bg-light p-3' onSubmit={handleSubmit(onUserRegister)}>
        <div>
          <label htmlFor="name" className='form-label'>Username</label>
          <input type="text" id='username' className='form-control' />
        </div>
        <div>
          <label htmlFor="password" className='form-label'>Password</label>
          <input type="password" id='password' className='form-control' />
        </div>
        <div>
          <label htmlFor="email" className='form-label'>Email</label>
          <input type="email" id='email' className='form-control' {...register("email,{required:true}")} />
          {errors.email && <p className='text-danger'>Email is required</p>}
        </div>

      </form>
    </div>
    </div>
    </div>
  )
}

export default Register

