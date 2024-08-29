import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Users from './components/Users.jsx'
import SingleUser from './components/SingleUser.jsx'

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
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  
)
