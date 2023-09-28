import React from 'react'
import './activity.css'
import { BsArrowRightShort } from 'react-icons/bs'

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
    </div>
  )
}

export default Activity
