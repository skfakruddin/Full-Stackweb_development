import React, { Children } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/login/Login'
import About from './components/about/About'

import RoutingError from './components/RoutingError'
import RootLayout from './RootLayout'


function App({children}) {

  // Browser Router

  const browserRouter = createBrowserRouter([
    {
      path: " ",
      element: <RootLayout />,
      errorElement: <RoutingError/>,
      children: [
        { 
          path: " ",
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        }, 
        {
          path: "about",
          element:<About/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={browserRouter}>
      {Children}
    </RouterProvider>
  )
}

export default App;