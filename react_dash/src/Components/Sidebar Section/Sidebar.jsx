import React from 'react'
import './sidebar.css'

// Import image
import logo from '../../Assets/owl.png'

// Import icons
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining, MdOutlineExplore } from 'react-icons/md'
import { BsTrophy } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'

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

          {/* Explore */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <MdOutlineExplore className='icon'/>
              <span className='smallText'>
                Explore
              </span>
            </a>
          </li>

          {/* Products */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <BsTrophy className='icon'/>
              <span className='smallText'>
                Products
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className='settingsDiv'>
        <h3 className='divTitle'>
          SETTINGS
        </h3>
        <ul className='menuLists grid'>

          {/* Charts */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <AiOutlinePieChart className='icon'/>
              <span className='smallText'>
                Charts
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

          {/* Explore */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <MdOutlineExplore className='icon'/>
              <span className='smallText'>
                Explore
              </span>
            </a>
          </li>

          {/* Products */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <BsTrophy className='icon'/>
              <span className='smallText'>
                Products
              </span>
            </a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Sidebar
