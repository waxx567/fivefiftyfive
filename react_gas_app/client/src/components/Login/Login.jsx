import React from 'react'
import './Login.css'

// Import assets
import video from '../../loginAssets/owl.mp4'

const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        <div className='videoDiv'>
          <video src={video}></video>
        </div>
      </div>
    </div>
  )
}

export default Login
