import React from 'react'
import './activity.css'

// Import icons
import { BsArrowRightShort } from 'react-icons/bs'

// Import images
import img from '../../../Assets/user_1.jpg'
import img1 from '../../../Assets/user.jpg'
import img2 from '../../../Assets/user_3.jpg'
import img3 from '../../../Assets/user_2.jpg'

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
            <small>Ordered 1 x 9Kg</small>
          </div>
          <div className='duration'>2 min ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src={img1} alt='Customer' />
          <div className='customerDetails'>
            <span className='name'>Jane Doe</span>
            <small>Ordered 1 x 12Kg</small>
          </div>
          <div className='duration'>21 min ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src={img2} alt='Customer' />
          <div className='customerDetails'>
            <span className='name'>Jane Doe</span>
            <small>Ordered 1 x 18Kg</small>
          </div>
          <div className='duration'>47 min ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src={img3} alt='Customer' />
          <div className='customerDetails'>
            <span className='name'>Jane Doe</span>
            <small>Ordered 2 x 9Kg</small>
          </div>
          <div className='duration'>67 min ago</div>
        </div>

      </div>
    </div>
  )
}

export default Activity
