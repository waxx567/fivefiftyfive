import React from 'react'
import './sidebar.css'

// Import image
import logo from '../../Assets/owl.png'

// Import icons
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className='sidebar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt='Logo' />
        <h2>GoGASGo</h2>
      </div>

      <div className='menuDiv'>
        <h3 className='divTitle'>
          QUICK MENU
        </h3>
        <ul className='menuLists grid'>

          {/* Dashboard */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className='smallText'>
                Dashboard
              </span>
            </a>
          </li>

          {/* My Orders */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <MdDeliveryDining className='icon'/>
              <span className='smallText'>
                My Orders
              </span>
            </a>
          </li>

          {/* List item:  */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className='smallText'>
                Dashboard
              </span>
            </a>
          </li>

          {/* List item:  */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className='smallText'>
                Dashboard
              </span>
            </a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar
