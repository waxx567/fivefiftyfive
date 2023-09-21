import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

// Import assets
import video from '../../loginAssets/owl.mp4'
import logo from '../../loginAssets/owl.png'

// Import icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'

const Register = () => {
  return (
    <div className='registerPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>

          <div className='textDiv'>
            <h2 className='title'>Gas Bottles To Your Door</h2>
            <p>The wise choice for convenience!</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Not registered?</span>
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

          <div className='inputDiv'>
            <label htmlFor='email'>Email</label>
            <div className='input flex'>
              <MdMarkEmailRead className='icon'/>
              <input type='text' id='email' placeholder='Enter Email Address'></input>
            </div>
            </div>

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
            <br/>

            <button type='submit' className='btn flex'>
            <span>Register</span>
            <AiOutlineSwapRight className='icon'/>
            </button>
            <br/>

            <span className='forgotPassword'>
            Forgot your password? <a href=''>Click Here</a>
            </span>

          </form>
        </div>
      </div>     
    </div>   
  )
}

export default Register
