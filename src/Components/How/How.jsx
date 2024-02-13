import React from 'react'
import './How.css'
import howimg1 from '../Assest/howimg1.jpg'
import howimg2 from '../Assest/howimg2.jpg'
import howimg3 from '../Assest/howimg3.jpg'

const How = () => {
  return (
    <div className="how">
        <h1 className='howheading'>How Its Works</h1>
        <div className="how-content">
            <div>
                <img src={howimg1} alt="" />
                <div>
                  <h3>Take a picture</h3>
                  <p>Take a picture throught camera or upload the image</p>
                </div>
            </div>
            <div>
                <img src={howimg2} alt="" />
                <div>
                  <h3>Get Analysis</h3>
                  <p>get a instent analysis about your crop</p>
                </div>
            </div>
            <div>
                <img src={howimg3} alt="" />
                <div>
                  <h3>Save Your Crops</h3>
                  <p>Just folow the tips and medicine to make your crop healthy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default How