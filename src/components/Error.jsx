import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>something went wrong here</h1>
        <button className='error-button' onClick={()=> navigate('/')}>Go to home</button>
    </div>
  )
}

export default Error