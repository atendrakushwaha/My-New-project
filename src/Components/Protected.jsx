import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {

    const isauthenticated = localStorage.getItem("isthenticate") == "true"

    if(!isauthenticated){
       return <Navigate to='/login' replace/>
    }

  return (
    <div>
        {children}
    </div>
  )
}

export default Protected