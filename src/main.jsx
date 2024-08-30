import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Users from './components/Users.jsx'
import SingleUser from './components/SingleUser.jsx'
import Form from './components/Form.jsx'
import Error from './components/Error.jsx'
  
const router = createBrowserRouter([
  {
    path:"/",
    element : <App />    
  },
  {
    path:"/users",
    element: <Users />
  },
  {
    path:"/singleuser/:id",
    element: <SingleUser />
  },
  {
    path:'/add',
    element:<Form />
  },
  {
    path:"/*",
    element:<Error />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  
)
