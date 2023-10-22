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
          <a href='/cart'>
            <img src={gas05} alt='5Kg brown gas bottle' />
            <h3>5Kg R275.00</h3>
          </a>
        </div>

        {/* 9Kg bottle */}
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <a href='/cart'>
            <img src={gas09} alt='9Kg purple gas bottle' />
            <h3>9Kg R395.00</h3>
          </a>
        </div>

        {/* 12Kg bottle */}
        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <a href='/cart'>
            <img src={gas12} alt='12Kg yellow gas bottle' />
            <h3>12Kg R675.00</h3>
          </a>
        </div>

        {/* 18Kg bottle */}
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <a href='/cart'>
            <img src={gas18} alt='18Kg red gas bottle' />
            <h3>18Kg R895.00</h3>
          </a>
        </div>

      </div>

    </div>
  )
}

export default Listing
