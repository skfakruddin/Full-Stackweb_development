import React, { Children } from 'react'
import RootLayout from './RootLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/login/Login'
import About from './components/about/About'
import RoutingError from './components/RoutingError'

function App() {

  // Browser Router

  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <RoutingError/>,
      children: [
        {
          path: "home",
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

export default App