import React from 'react'
import './listing.css'

// Import icon
import { BsArrowRightShort } from 'react-icons/bs'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>My Listing</h1>
        <button className='btn flex'>
            See All <BsArrowRightShort className='icon'/>
        </button>
      </div>
    </div>
  )
}

export default Listing
