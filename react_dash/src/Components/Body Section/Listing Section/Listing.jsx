import React from 'react'
import './listing.css'

// Import icons
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

// Import images
import gas05 from '../../../Assets/gas_05.png'
import gas09 from '../../../Assets/gas_09.png'
import gas12 from '../../../Assets/gas_12.png'
import gas18 from '../../../Assets/gas_18.png'
import user from '../../../Assets/user.jpg'
import user1 from '../../../Assets/user_1.jpg'
import user2 from '../../../Assets/user_2.jpg'
import user3 from '../../../Assets/user_3.jpg'

const Listing = () => {
  return (
    <div className='listingSection'>

      <div className='heading flex'>
        <h1>Products</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer flex'>

        {/* 5Kg bottle */}
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={gas05} alt='5Kg brown gas bottle' />
          <h3>5Kg bottle</h3>
        </div>

        {/* 9Kg bottle */}
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={gas09} alt='9Kg purple gas bottle' />
          <h3>9Kg bottle</h3>
        </div>

        {/* 12Kg bottle */}
        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={gas12} alt='12Kg yellow gas bottle' />
          <h3>12Kg bottle</h3>
        </div>

        {/* 18Kg bottle */}
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={gas18} alt='18Kg red gas bottle' />
          <h3>18Kg bottle</h3>
        </div>

      </div>

      <div className='customers flex'>
        <div className='topCustomers'>

          <div className='heading flex'>
            <h3>Best Customers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className='card flex'>

            <div className='users'>
              <img src={user} alt='User' />
              <img src={user1} alt='User' />
              <img src={user2} alt='User' />
              <img src={user3} alt='User' />
            </div>

            <div className='cardText'>
              <span>
                11 purchased <br />
                <small>
                  4 products <span className='date'>7 days</span>
                </small>
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
