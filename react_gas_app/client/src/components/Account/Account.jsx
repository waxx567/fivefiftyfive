import React from 'react'
import './account.css'
import '../../App.css'

const Account = () => {
  return (
    <div className='accountPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <video src={video} autoPlay muted loop></video>

        </div>
      </div>
    </div>
  )
}

export default Account
