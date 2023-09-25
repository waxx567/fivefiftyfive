import React from 'react'
import './top.css'

const Top = () => {
  return (
    <div className='topsection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Welcome to GoGASGo</h1>
          <p>Hello Wayne, welcome back!</p>
        </div>

        <div className='searchBar flex'>
          <input type='text' placeholder='Search Dashboard'/>
        </div>
      </div>
    </div>
  )
}

export default Top
