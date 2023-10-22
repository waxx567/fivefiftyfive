import React from 'react'
import './account.css'
import '../../App.css'

const Account = () => {
  return (
    <div className='accountPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>

          <div className='textDiv'>
            <h2 className='title'>Gas Bottles To Your Door</h2>
            <p>The wise choice for convenience!</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>To Dashboard</span>
            <Link to={'/dashboard'}>
            <button className='btn'>Go Back</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Account
