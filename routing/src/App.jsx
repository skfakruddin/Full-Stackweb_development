 import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Users from './components/users/Users';
import RegisteredUsers from './components/registered-users/RegisteredUsers';
import Parent from './components/parent/Parent';
import UserDetails from './components/UserDetails.jsx'
import Tech from './components/technologies/Tech.jsx'
import Java from './components/java/Java.jsx'
import Vue from './components/vue/Vue.jsx'
import Node from './components/node/Node.jsx'
import UserDashboard from './components/user-dashboard/UserDashboard.jsx';
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
        path:'user-dashboard',
        element:<UserDashboard />
      },
      {
        path:'register',
        element:<Register />
      },
      {
        path:'registered-users',
        element:<RegisteredUsers />
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
        path:'users/:userId',
        element:<UserDetails />
        
      },
      {
        path:'parent',
        element:<Parent />
        
      },
      {
        path:'technologies',
        element:<Tech />,
        children: [
          { 
            path: 'java',
            element:<Java/>
          },
          { 
            path: 'vue',
            element:<Vue/>
          },
          { 
            path: 'node',
            element:<Node />
          }
        ]
        
      }
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

export default App;


 