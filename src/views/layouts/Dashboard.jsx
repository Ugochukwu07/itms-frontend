import React from 'react'
import Sidebar from '../components/Sidebar'

function Dashboard({children}) {
  return (
    <div className='dashboard_layout'>
      <Sidebar />
      <div className='main'>
        {children}
      </div>
    </div>
  )
}

export {Dashboard}
