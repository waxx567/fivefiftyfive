import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

// Import assets
import video from '../../loginAssets/owl.mp4'

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>
          <div className='textDiv'>
            <h2 className='title'>Delivering Replacement Gas Bottles To Your Door</h2>
            <p>GoGASGo is the wise choice for convenience!</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Not registered yet?</span>
            <Link to={'/register'}>
            <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
