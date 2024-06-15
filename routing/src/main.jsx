import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import Store from './contexts/Store'
import UserStore from './contexts/UserStore'
ReactDOM.createRoot(document.getElementById('root')).render(
 <Store>
    <UserStore>
      <App />
    </UserStore>
  </Store>
)

