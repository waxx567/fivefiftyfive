import React from 'react'
import './top.css'

// Import icons
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort } from 'react-icons/bs'

// Import media
import img from '../../../Assets/admin.jpg'
import video from '../../../Assets/owl.mp4'

const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Welcome to GoGASGo</h1>
          <p>Hello Admin, welcome back!</p>
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

      <div className='cardSection flex'>
        <div className='rightCard flex'>

          <h1>Gas Bottles To Your Door</h1>
          <p>The wisest choice for convenience!</p>

          <div className='buttons flex'>
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>

          <div className='videoDiv'>
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className='leftCard flex'>
          <div className='main flex'>
            <div className='textDiv'>
              <h1>My Stat</h1>

              <div className='flex'>
                <span>
                    Today <br /> <small>4 orders</small>
                </span>
                <span>
                    This Month <br /> <small>187 orders</small>
                </span>
              </div>

              <span className='flex link'>
                Go to my orders <BsArrowRightShort className='icon'/>
              </span>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top
