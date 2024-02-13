import React from 'react'
import './hero.css'
import heroimg from '../Assest/heroimg.png'
function hero() {
  return (
    <header>
        {/* <div className="left">
            <span>Welcome to PlantDr.</span>
            <h1>Revolutionizing Agriculture with Precision</h1>
            <h2>Harnessing Technology to Ensure Healthy Crops and Bountiful Harvests.</h2>
            <div className="btns">
              <a href="" className='btn'>Get Started</a>
            </div>
        </div>
     <img src={heroimg}alt="" /> */}
      <div className="content">
      <span>Welcome to PlantDr.</span>
            <h1>Revolutionizing Agriculture with Precision</h1>
            <h2>Harnessing Technology to Ensure Healthy Crops and Bountiful Harvests.</h2>
            <div className="btns">
              <a href="" className='btn'>Get Started</a>
            </div>
      </div>
    </header>
    
  )
}

export default hero