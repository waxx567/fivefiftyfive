import React from 'react'
import './listing.css'

// Import icons
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

// Import images
import img from '../../../Assets/gas_05.png'
import img1 from '../../../Assets/gas_09.png'
import img2 from '../../../Assets/gas_12.png'
import img3 from '../../../Assets/gas_18.png'

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
          <img src={img} alt='5Kg brown gas bottle' />
          <h3>5Kg bottle</h3>
        </div>

        {/* 9Kg bottle */}
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img1} alt='9Kg purple gas bottle' />
          <h3>9Kg bottle</h3>
        </div>

        {/* 12Kg bottle */}
        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={img2} alt='12Kg yellow gas bottle' />
          <h3>12Kg bottle</h3>
        </div>

        {/* 18Kg bottle */}
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img3} alt='18Kg red gas bottle' />
          <h3>18Kg bottle</h3>
        </div>

      </div>

      <div className='sellers flex'>
        <div className='topSellers'>
          <div className='heading flex'>
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
