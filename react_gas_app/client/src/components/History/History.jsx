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
            <p className='title'>delivereds To Your Door</p>
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
            <h3>History</h3>
          </div>

          <div className='textDiv grid'>
            <h4>23/10/04 9Kg</h4>
            <h4>23/10/09 9Kg</h4>
            <h4>23/10/12 12Kg</h4>
            <h4>23/10/15 9Kg</h4>
            <h4>23/10/18 5Kg</h4>
            <h4>23/10/22 9Kg</h4>
          </div>
        </div>

      </div>
    </div>
  )
}

export default History
