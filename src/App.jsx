import React from 'react'
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ragister from './Components/Ragister'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Destination from './Components/Destination'
import Protected from './Components/Protected'
import LandingPage from './Components/LandingPage'
import AboutPage from './Components/AboutPage'
import Community from './Components/Community'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/ragister' element={<Ragister/>} />
          <Route path='/community' element={<Community/>} />
          <Route path='/service' element={<Protected> <LandingPage/></Protected>} />
          <Route path='/destination' element={<Protected> <Destination /></Protected>} />
          <Route path='/about' element={<Protected> <AboutPage/></Protected>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App