import React from 'react'
import './top.css'

// Import icons
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'

// Import image
import img from '../../../Assets/admin.jpg'

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
          <BiSearchAlt className='icon'/>
        </div>

        <div className='adminDiv flex'>
          <TbMessageCircle className='icon'/>
          <MdOutlineNotificationsNone className='icon'/>
          <div className='adminImage'>
            <img src={img} alt='Admin image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
