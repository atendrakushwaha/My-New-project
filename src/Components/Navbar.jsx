import React, { useState } from 'react'
import { useNavigate,  NavLink } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem("isthenticate")
    navigate('/login')
  }

  // ✅ Check authentication directly
  const isAuthenticated = localStorage.getItem("isthenticate") === "true"
 

  return (
    <>
      <div
        className="flex justify-between items-center px-8 py-4 relative"
        style={{ background: "linear-gradient(to bottom right, #00c6ff, #0072ff)" }}
      >
        <div className='logo'>
          <h1 className='text-2xl font-bold text-white'>QTRLUS</h1>
        </div>

        {/* Desktop Menu */}
        <div className='menu text-white hidden md:block'>
          <ul className='flex gap-4 text-lg'>
          <li className='cursor-pointer hover:underline'><NavLink to="/" className={({isActive}) => isActive ? `text-orange-500` : "text-white"}>Home</NavLink></li>
            <li className='cursor-pointer hover:underline'><NavLink to="/destination"className={({isActive}) => isActive ?  "text-orange-500" : "text-white"}>Destination</NavLink></li>
            <li className='cursor-pointer hover:underline'><NavLink to="/service" className={({isActive}) => isActive ? "text-orange-500" : "text-white"}>Service</NavLink></li>
            <li className='cursor-pointer hover:underline'><NavLink to="/community" className={({isActive}) => isActive ?  "text-orange-500" : "text-white"}>Community</NavLink></li>
            <li className='cursor-pointer hover:underline'><NavLink to="/about" className={({isActive}) => isActive ?  "text-orange-500" : "text-white"}>About</NavLink></li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className='button hidden   md:flex-row  md:gap-4 md:block '>
          {isAuthenticated ? (
            <button
              className='text-white border border-white mr-4 px-4 py-1 rounded hover:bg-white hover:text-orange-500 transition'
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className='text-white border border-white mr-4 px-4 py-1 rounded hover:bg-white hover:text-orange-500 transition'
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className='bg-orange-500 text-white px-4 py-1 rounded hover:bg-white hover:text-orange-500 transition'
                onClick={() => navigate('/ragister')}
              >
                Register
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              // Close Icon
              <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 right-0 w-40 bg-blue-500 flex flex-col items-center gap-4 py-4 md:hidden z-50 rounded-lg">
            <ul className='flex flex-col gap-4 text-lg text-white'>
            <li className='cursor-pointer px-3 py-1 w-full hover:bg-gray-500' onClick={() => {navigate('/'); setIsMenuOpen(false)}}>Home</li>
              <li className='cursor-pointer px-3 py-1 w-full hover:bg-gray-500' onClick={() => {navigate('/destination'); setIsMenuOpen(false)}}>Destination</li>
              <li className='cursor-pointer px-3 py-1 w-full hover:bg-gray-500' onClick={() => {navigate('/service'); setIsMenuOpen(false)}}>Service</li>
              <li className='cursor-pointer px-3 py-1 w-full hover:bg-gray-500' onClick={() => {navigate('/community'); setIsMenuOpen(false)}}>Community</li>
              <li className='cursor-pointer px-3 py-1 w-full hover:bg-gray-500' onClick={() => {navigate('/about'); setIsMenuOpen(false)}}>About</li>
            </ul>

            <div className='flex flex-col gap-2 mt-4'>
              {isAuthenticated ? (
                <button
                  className='text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-orange-500 transition'
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    className='text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-orange-500 transition'
                    onClick={() => {
                      navigate('/login')
                      setIsMenuOpen(false)
                    }}
                  >
                    Login
                  </button>
                  <button
                    className='bg-orange-500 text-white px-4 py-1 rounded hover:bg-white hover:text-orange-500 transition'
                    onClick={() => {
                      navigate('/ragister')
                      setIsMenuOpen(false)
                    }}
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default Navbar
