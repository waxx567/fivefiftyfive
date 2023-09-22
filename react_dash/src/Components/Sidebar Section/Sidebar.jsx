import React from 'react'
import './sidebar.css'

// Import images
import logo from '../../Assets/owl.png'

const Sidebar = () => {
  return (
    <div className='sidebar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt='Logo' />
        <h2>GoGASGo</h2>
      </div>
    </div>
  )
}

export default Sidebar
