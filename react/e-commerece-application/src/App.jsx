import React, { Children } from 'react'
import RootLayout from './RootLayout'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/login/Login'
import About from './components/about/About'
import RoutingError from './components/RoutingError'
import UserProfile from './components/user-profile/UserProfile'
import Products  from './components/products/Products'
import Cart from './components/cart/Cart'
import EditUser from './components/edit-user/EditUser'

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
        },
        {
          path: "edit-user",
          element:<EditUser />
        },
        {
          path: "user-profile",
          element:<UserProfile/>,
          children:[   
            {
          path: "products",
          element:<Products />
        },
        {
          path: "cart",
          element:<Cart />
        },
       
        {
          path: "",
          element:<Navigate to={'products'} />
        }
      ]
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