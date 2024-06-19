import {useRouteError} from 'react-router-dom'

function RoutingError() {
    let err=useRouteError()
    console.log(err)
  return (
    <div>
        <h1 className='text-center'>Routing Error</h1>
    </div>
  )
}

export default RoutingError