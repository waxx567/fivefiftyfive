import React from 'react'
import './history.css'
import '../../App.css'
import { Link } from 'react-router-dom'

// Import assets
import video from '../../loginAssets/owl.mp4'
import logo from '../../loginAssets/owl.png'


const History = () => {
  return (
    <div className='historyPage flex'>
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

          <div className='textDiv grid'>
            <label>Product</label>
            <h3>9Kg gas bottle</h3>
            <label>Date delivered</label>
            <h3>4 October 2023</h3>
            <label>Product</label>
            <h3>9Kg gas bottle</h3>
            <label>Date delivered</label>
            <h3>13 October 2023</h3>
            <label>Product</label>
            <h3>9Kg gas bottle</h3>
            <label>Date delivered</label>
            <h3>22 October 2023</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default History
