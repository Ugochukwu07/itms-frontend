import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__logo'>
            <h1>ITS</h1>
        </div>
        <div className='sidebar__links'>
            <ul>
                <li>Home</li>
                <li>Live View</li>
                <li>Coverage</li>
                <li>Alerts</li>
                <li>Updates</li>
                <li>Server</li>
                <li>Notifications</li>
                <li className='active'>Settings</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
