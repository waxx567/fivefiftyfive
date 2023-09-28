import React from 'react'
import './activity.css'

// Import icons
import { BsArrowRightShort } from 'react-icons/bs'

// Import images
import img from '../../../Assets/user_1.jpg'

const Activity = () => {
  return (
    <div className='activitySection'>

      <div className='heading flex'>
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer grid'>
        <div className='singleCustomer flex'>
          <img src={img} alt='Customer' />
          <div className='customerDetails'>
            <span className='name'>Jane Doe</span>
            <small>Ordered a 9Kg bottle</small>
          </div>
          <div className='duration'>2 min ago</div>
        </div>
      </div>
    </div>
  )
}

export default Activity
