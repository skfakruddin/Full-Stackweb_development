import React from 'react'
import { useLocation } from 'react-router-dom'

function UserDashboard() {
    let {state} =useLocation()
  return (
    <div>
      <h2>user dashboard</h2>
      <div className='mt-5'> 
        <p className='text-center'>{state.username}</p>
        <p className='text-center'>{state.email}</p>
      </div>
      </div>
  )
}

export default UserDashboard