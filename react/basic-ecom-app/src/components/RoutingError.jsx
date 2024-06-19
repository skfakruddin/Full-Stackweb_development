import React from 'react'
import { useRouteError } from 'react-router-dom'

function RoutingError() {
  let err = useRouteError()
  console.log(err)
  return (

    <div>
      <h1 className='display-1 text-danger mt-5 text-center'>{err.data}</h1>
      <h1 className='display-3 text-warning mt-5 text-center'>{err.status}-{err.statusText}</h1>
    </div>
  )
}

export default RoutingError