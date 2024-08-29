import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const fetchUsers = async() =>{
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data)
      setLoading(false)
    }
    fetchUsers()
  },[])

  return (
    <>
      {
        loading ? <h1>Loading..</h1>: users.map(({id,name,username,email},index) =>(
          <Link to={`/singleuser/${id}`} key={index} >
        <div className='user-container'>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
          </div>
          </Link>
        ))
      }
    </>
  )
}

export default App
