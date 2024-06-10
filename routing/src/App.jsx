 import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Users from './components/users/Users';
import RegisteredUsers from './components/registered-users/RegisteredUsers';
import Parent from './components/parent/Parent';
// import ManageTasks from './components/tasks/ManageTasks';


import RootLayout from './RootLayout'
function App({children}) {
  //create browser router object
  const browserRouter=createBrowserRouter([
  {
    path:'',
    element:<RootLayout />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'register',
        element:<Register />
      },
      {
        path:'login',
        element:<Login />
      },
      {
        path:'users',
        element:<Users />
        
      },
      {
        path:'registered-users',
        element:<RegisteredUsers />
        
      },
      {
        path:'parent',
        element:<Parent />
        
      },
      // {
      //   path:'tasks',
      //   element:<ManageTasks />
        
      // }
    ]
  }
]);
  return <RouterProvider router={browserRouter}>
   {children}
     
  </RouterProvider>;
  
}

export default App
 