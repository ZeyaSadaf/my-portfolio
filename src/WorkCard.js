import React from 'react'
import './WorkCard.css'
import {NavLink} from 'react-router-dom'
// import amzn1 from './images/amzn1.jpg';
// import pro1 from './images/pro1.PNG'

import ProjectCardData from './WorkCardData.js';
console.log(ProjectCardData);

const WorkCard = (props) => {
  return (
    <div className = 'project__card'>
        <img src={props.imgsrc} alt = 'altimg'></img>
        <h2 className='project__title'>{props.title}</h2>
        <div className='project__details'>
            <p>{props.text}</p>
            <div className='project__btns'>
                {/* <NavLink to = {props.view} className = 'btn'>
                    View
                </NavLink> */}
                <a href = {props.view} className = "btn" src = 'git'>View</a>
                <a href = {props.source} className = "btn" src = 'git'>Source</a>
                {/* <NavLink to = {props.source} className = 'btn'>
                    Source
                </NavLink> */}
            </div>
        </div>
    </div>

  )
}

export default WorkCard
