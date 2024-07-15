import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './Pages/LoginPage/Login.jsx'
import Signup from './Pages/SignupPage/Signu.jsx'
import Index from './Pages/IndexPage/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactProvider router={router}/>
  </React.StrictMode>,
)
