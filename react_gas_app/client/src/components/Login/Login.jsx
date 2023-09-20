import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

// Import assets
import video from '../../loginAssets/owl.mp4'
import logo from '../../loginAssets/owl.png'

// Import icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'

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

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt='Logo' />
            <h3>Welcome Back!</h3>
          </div>

          <form action='' className='form grid'>
            <span>Login Status will appear here</span>

            <div className='inputDiv'>
              <label htmlFor='username'>Username</label>
              <div className='input flex'>
                <FaUserShield className='icon'/>
                <input type='text' id='username' placeholder='Enter Username'></input>
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>Password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon'/>
                <input type='password' id='password' placeholder='Enter Password'></input>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login
