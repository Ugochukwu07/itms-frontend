import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <div className='box'>
            <h1 className='home__title'>Implementation of an Intelligent Traffic Management System</h1>
            <button className='home__button'>
                <Link to='/login'>Get Started</Link>
            </button>

            <small>
                Developed By Ugochukwu Ekwueme Emmanuel <br />
                2019514043
            </small>
        </div>
    </div>
  )
}

export default Home
