import React from 'react'
import './HeroProject.css'
const HeroProject = ({imgBg, heading, para}) => {
  return (
    <div className = 'heroP'>
        <div className = 'heroP__img'>
            <img src ={imgBg} alt = 'img' className = 'img'></img>
            </div>
        <div className = 'heroP__heading'>
            <h1>
                {heading}
            </h1>
            <p>
                {para}
            </p>
        </div>
        </div>
    // </div>
  )
}

export default HeroProject
