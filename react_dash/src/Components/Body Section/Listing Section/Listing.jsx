import React from 'react'
import './listing.css'

// Import icons
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

// Import images
import img from '../../../Assets/gas_18.png'
import img1 from '../../../Assets/gas_09.png'
import img2 from '../../../Assets/gas_12.png'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>My Listing</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer flex'>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img} alt='18Kg red gas bottle' />
          <h3>Annual Vince</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img1} alt='18Kg red gas bottle' />
          <h3>Annual Vince</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={img2} alt='18Kg red gas bottle' />
          <h3>Annual Vince</h3>
        </div>

      </div>
    </div>
  )
}

export default Listing
