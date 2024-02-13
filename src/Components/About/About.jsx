import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="About" >
        <h4 className='subheadab'>Who We Are</h4>
        <h1 className='Aboutheading'>Why You Choose Us</h1>
        <p>At PlantDR, we understand the critical role that healthy plants play in agriculture, gardening, and the environment. Our functional leaf disease prediction web application stands out as a reliable and innovative solution for anyone invested in plant health. Here's why you should choose us:</p>
        <div className="containers">
            <div>
                <h1>Accurate Predictions</h1>
                <p>PlantDR utilizes advanced algorithms and data analytics to provide accurate predictions of leaf diseases. Our system is built on the latest research and continuously updated to ensure the highest level of precision in disease forecasting.</p>
            </div>
            <div>
                <h1>User-Friendly Interface</h1>
                <p>We prioritize user experience. Our web application features an intuitive and user-friendly interface, making it accessible to farmers, gardeners, and plant enthusiasts of all levels of expertise. Easily navigate through the application to get the information you need efficiently.</p>
            </div>
            <div>
                <h1>Community Collaboration</h1>
                <p>Join a community of like-minded individuals passionate about plant health. PlantDR fosters collaboration, allowing users to share experiences, insights, and best practices in disease management. Together, we can create healthier and more resilient crops.</p>
            </div>
        </div>
    </div>
  )
}

export default About