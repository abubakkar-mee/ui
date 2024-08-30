import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
const navigate = useNavigate()
    return (
    <>
    <form>
        <input placeholder='type here..' type="text" />
        <input placeholder='type here..' type="text" />
        <input placeholder='type here..' type="text" />
    </form>
    <button className='go-to-home' onClick={()=>navigate('/')}>Go to home</button>
    </>
  )
}

export default Form