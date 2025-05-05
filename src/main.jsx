import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import './index.css'
import App from './App.jsx'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Login from './Components/Login'
import Ragister from './Components/Ragister'
import Community from './Components/Community'
import LandingPage from './Components/Service.jsx'
import Destination from './Components/Destination'
import AboutPage from './Components/AboutPage'
import Home from './Components/Home'
import Protected from './Components/Protected'

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path="/" element={<App />} >
      <Route path='' element={<Home/>} />
      <Route path="login" element={<Login />} />
      <Route path="ragister" element={<Ragister />} />
      <Route path="community" element={<Community />} />
      <Route path='/service' element={<Protected> <LandingPage/></Protected>} />
      <Route path='/destination' element={<Protected> <Destination /></Protected>} />
      <Route path='/about' element={<Protected> <AboutPage/></Protected>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
