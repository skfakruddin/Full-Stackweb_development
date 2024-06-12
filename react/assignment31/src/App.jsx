import React from 'react';
import { useForm } from 'react-hook-form';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className='mx-auto  mt-5 '>
        <h1 className="text-center text-dark">Registration Form</h1>
        <form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex gap-5 pb-4 ">
            <div className="w-50">
              <label htmlFor="firstname" className="form-label"> FirstName</label>
              <input type="text" {...register('firstname', { required: true, minLength: 4 ,maxLength:6 })} className="form-control" id="firstname"/>
              {errors.firstname?.type === 'required' && (  <p className="text-danger">FirstName is required</p> )}
              {errors.firstname?.type === 'minLength' && (<p className="text-danger">Min Length Should be 4</p>)}
              {errors.firstname?.type === 'maxLength' && (<p className="text-danger">Max Length Should be 6</p> )}
            </div>
            <div className="w-50">
              <label htmlFor="lastname" className="form-label">LastName</label>
              <input type="text" {...register('lastname', { required: true })} className="form-control" id="lastname" />
              {errors.lastname?.type === 'required' && (<p className="text-danger">LastName is required</p>)}
              {errors.firstname?.type === 'minLength' && (<p className="text-danger">Min Length Should be 4</p>)}
              {errors.firstname?.type === 'maxLength' && (<p className="text-danger">Max Length Should be 6</p> )}
            </div>
          </div>
          <div className="d-flex pb-4">
            <div className='w-50'>
            <label htmlFor="birthday" className="form-label">  Birthday </label>
            <input type="date" className="form-control" id="birthday" />
            </div>
           
            <div className=' male' >
            <p className="">Gender </p>
              <input type="radio" {...register('gender', { required: true })} className="form-check-input" id="male"  value="male" />
              <label htmlFor="male" className="form-check-label female ">Male </label>
            
              <input type="radio"{...register('gender', { required: true })} className="form-check-input "  id="female" value="female"/>
              <label htmlFor="female" className="form-check-label "> Female </label>
            </div>
            {errors.gender?.type === 'required' && (<p className="text-danger">Gender is required</p>)}
          </div>
          <div className="d-flex gap-5 pb-4"><div className="w-50">
              <label htmlFor="email" className="form-label"> Email </label>
              <input type="email" {...register('email', { required: true })} className="form-control" id="email"/>
              {errors.email?.type === 'required' && ( <p className="text-danger">Email is required</p>)}
            </div>
            <div className="w-50">
              <label htmlFor="phonenumber" className="form-label"> Phone Number</label>
              <input type="number"{...register('phonenumber', { required: true })} className="form-control" id="phonenumber"/>
              {errors.phonenumber?.type === 'required' && ( <p className="text-danger">Phone Number is required</p>)}
              {errors.phonenumber?.type === 'required' && ( <p className="text-danger">Phone Number is required</p>)}
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="form-label"> Subjects </label>
            <select className="form-select" id="subject">
              <option>Maths</option>
              <option>Science</option>
              <option>English</option>
            </select>
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary px-5">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
