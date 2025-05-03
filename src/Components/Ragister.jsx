import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [data, setData] = useState([])
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const submit = () => {
    if (!userName || !password || !email || !confirmPassword) {
      setError('All Fields Are Required')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords Do Not Match')
      return
    }

    axios.post('http://localhost:3000/user', { username: userName, email: email, password: password })
      .then(res => {
        setData(res.data)
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setUserName('')
        alert('User Registered Successfully')
        navigate('/')
      })
      .catch(err => {
        console.error(err)
        setError('Something went wrong!')
      })
  }

  return (
    <>
      <div className="sm:w-120 m-auto flex flex-col gap-4 mt-40 border p-10 ">
        <input className='w-full p-2 border border-gray-300 rounded-md outline-none'
          type="text" placeholder='Enter Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input className='w-full p-2 border border-gray-300 rounded-md outline-none'
          type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='w-full p-2 border border-gray-300 rounded-md outline-none'
          type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className='w-full p-2 border border-gray-300 rounded-md outline-none'
          type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <p className='text-red-500'>{error}</p>
        <button className='w-full p-2 border border-gray-300 rounded-md hover:bg-black hover:text-white'
          onClick={submit}
        >Register</button>
      </div>
    </>
  )
}

export default Register
