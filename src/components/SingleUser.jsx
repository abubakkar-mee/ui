import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

const SingleUser = () => {
    const {id} = useParams()
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    useEffect(()=>{
      const fetchUser = async () => {
        setLoading(true)
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(res.data)
        setLoading(false)
      }
      fetchUser()
    },[])
    
  return (
    <>
    {
      loading ? <h1>loading....</h1> :
      <div className='single-user-container'>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <button onClick={() => navigate('/')}>Go back</button>
      </div>
    }
    </>
  )
}

export default SingleUser