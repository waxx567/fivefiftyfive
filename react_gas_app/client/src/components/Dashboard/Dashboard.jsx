import React from 'react'
import './App.css'
import Sidebar from '/Components/Sidebar Section/Sidebar'
import Body from '/Components/Body Section/Body'

const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <div className='dashboardContainer flex'>
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default Dashboard
