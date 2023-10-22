import React from 'react'
import './account.css'
import '../../App.css'
import { Link } from 'react-router-dom'

// Import assets
import video from '../../loginAssets/owl.mp4'
import logo from '../../loginAssets/owl.png'

const Account = () => {
  return (
    <div className='accountPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>

          <div className='textDiv'>
            <p className='title'>Gas Bottles To Your Door</p>
            <p>The wise choice for convenience!</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>To Dashboard</span>
            <Link to={'/dashboard'}>
            <button className='btn'>Go Back</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt='Logo' />
            <h1>My Account</h1>
          </div>

          <label>Name</label>
          <h3>waxx</h3>
          <label>Address</label>
          <h3>123 Road Way</h3>
          <h3>Suburbia</h3>
          <h3>New City</h3>
        </div>

      </div>
    </div>
  )
}

export default Account
