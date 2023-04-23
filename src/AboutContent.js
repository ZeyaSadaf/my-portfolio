import React from 'react'
import './AboutContent.css'
import {Link} from 'react-router-dom'
import computer from './images/computer.png'
import singing from './images/singing.jpg'
import profile1 from './images/profile1.PNG'
import profilezee from './images/profilezee.PNG'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='about__leftItem'>
        <h1>
            Who am I?
        </h1>
        <p>
        Hi! I'm Zeya, a web developer based in Gurgaon, Haryana.
         My interest in Web Developement sparked during my University Placement year. I later started working on 
         new technologies that helped me turn ideas into websites. I love to play the guitar and sing.</p>
         <Link to = '/contact'>
            <p className = 'btn'>GET IN TOUCH</p>
         </Link>
      </div>
      <div className='about__imgItem'>
        <div className='img__container'>
            <div className='right__imgTop'>
                <img src = {computer} alt = 'programming' className = 'imgs'></img>
                </div>
                <div className='right__imgBottom'>
                <img src = {profilezee} alt = 'programming' className = 'imgs'></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
