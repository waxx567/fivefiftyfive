import React, {useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

// Import assets
import video from '../../loginAssets/owl.mp4'
import logo from '../../loginAssets/owl.png'

// Import icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'


const Login = () => {
  // useState hook to hold inputs
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()
  

  // onClick to get what user has entered
  const loginUser = (e) => {

    // Prevent submitting
    e.preventDefault()

    // Create API to connect to server
    Axios.post('http://localhost:3002/login', {
      // Create variable to send to server through route
      LoginUserName: loginUserName,
      LoginPassword: loginPassword
    }).then((response) => {
      console.log()
      // If credentials do not match
      if(response.data.message) {
        // Reload login page
        navigateTo('/')
      }
      else {
        // Load dashboard page if credentials correct
        navigateTo('/dashboard')
      }
    })
  }

  return (
    <div className='loginPage flex'>
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

            {/* <span className='message'>Login Status will appear here</span> */}

            <div className='inputDiv'>
            <label htmlFor='username'>Username</label>
            <div className='input flex'>
              <FaUserShield className='icon'/>
              <input type='text' id='username' placeholder='Enter Username' onChange={(event)=>{
                setLoginUserName(event.target.value)
              }}></input>
            </div>
            </div>

            <div className='inputDiv'>
            <label htmlFor='password'>Password</label>
            <div className='input flex'>
              <BsFillShieldLockFill className='icon'/>
              <input type='password' id='password' placeholder='Enter Password' onChange={(event)=>{
                setLoginPassword(event.target.value)
              }}></input>
            </div>
            </div>

            <span className='forgotPassword'>
            Forgot your password? <a href=''>Click Here</a>
            </span>

            <button type='submit' className='btn flex' onClick={loginUser}>
            <span>Login</span>
            <AiOutlineSwapRight className='icon'/>
            </button>

            <a href='/dashboard'>Admin</a>

          </form>
        </div>
      </div>     
    </div>   
  )
}

export default Login
