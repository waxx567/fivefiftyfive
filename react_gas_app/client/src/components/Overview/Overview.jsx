import React from 'react'
import './App.css'
import Sidebar from '../Overview/Components/Sidebar Section/Sidebar'
import Body from '../Overview/Components/Body Section/Body'

const Overview = () => {
  return (
    <div className='overview flex'>
      <div className='overviewContainer flex'>
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default Overview
