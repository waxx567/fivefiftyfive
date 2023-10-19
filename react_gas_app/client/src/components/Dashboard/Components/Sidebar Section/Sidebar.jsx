import React from 'react'
import './sidebar.css'

// Import image
import logo from '../../Assets/owl.png'

// Import icons
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining, MdOutlineHistory, MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'

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

          {/* My Account */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <MdDeliveryDining className='icon'/>
              <span className='smallText'>
                My Account
              </span>
            </a>
          </li>

          {/* History */}
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <MdOutlineHistory className='icon'/>
              <span className='smallText'>
                History
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

      {/* <div className='settingsDiv'>
        <h3 className='divTitle'>
          SETTINGS
        </h3>
        <ul className='menuLists grid'> */}

          {/* Charts */}
          {/* <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <AiOutlinePieChart className='icon'/>
              <span className='smallText'>
                Charts
              </span>
            </a>
          </li> */}

          {/* Trends */}
          {/* <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <BiTrendingUp className='icon'/>
              <span className='smallText'>
                Trends
              </span>
            </a>
          </li> */}

          {/* Contact */}
          {/* <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <MdOutlinePermContactCalendar className='icon'/>
              <span className='smallText'>
                Contact
              </span>
            </a>
          </li> */}

          {/* Billing */}
          {/* <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <BsCreditCard2Front className='icon'/>
              <span className='smallText'>
                Billing
              </span>
            </a>
          </li>

        </ul>
      </div>  */}

      <div className='logout'>
        <button className='btn flex'>
          <BsFillArrowLeftCircleFill className='icon'/>
          <a href='/'>Log Out</a>
        </button>
      </div>

      <div className='sidebarCard'>
        <BsQuestionCircle className='icon'/>
        <div className='cardContent'>            
          <h3>Help Center</h3>
          <p>How can we assist?</p>
          <button className='btn'>Get Help</button>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
