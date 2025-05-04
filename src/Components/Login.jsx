import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

const Login = () => {
    const [data,setData] = useState([])
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()

     useEffect(() => {
      axios.get('http://localhost:3000/user')
      .then(res => setData(res.data)
      .catch(err => console.log(err))
    )
      
     })
    const loginHandler = () => {
       const user = data.find(user => user.username === userName && user.password === password)
       if(user){
        localStorage.setItem("isthenticate", "true")
        toast.success({userName},'Login Successfully')
        navigate('/destination')
        

       }
       else{
        toast.error('User Not Found')
       }

    }

    // const ragisterHandler = () => {
    //     navigate('/ragister')
    //     console.log('ragister');
    // }
        

  return (
    <>
      {/* <div className="w-[400px] m-auto flex flex-col gap-4 mt-40 border p-10 ">
       <input className='w-full p-2 border border-gray-300 rounded-md outline-none'
        type="text" placeholder='Enter Username' value={userName} onChange={(e) => setUserName(e.target.value)}/>
       <input className='w-full p-2 border border-gray-300 rounded-md outline-none'
       type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
       <p className='text-red-600'>{error}</p>
       <button className='w-full p-2 border border-gray-300 rounded-md hover:bg-black hover:text-white'
        onClick={loginHandler}
       >Login</button>
       <button className='w-full p-2 border border-gray-300 rounded-md hover:bg-black hover:text-white' 
       onClick={ragisterHandler}
       >Ragister</button>
      </div> */}

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">User Name</label>
          <input type="text" className="input" placeholder="Email" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="label-text-alt text-red-500">{error}</div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4"onClick={loginHandler}>Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Login