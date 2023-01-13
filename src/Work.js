import React from 'react'
import './WorkCard.css'
import {NavLink} from 'react-router-dom'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData.js';



const Work = ({imgPro, title}) => {
  return (
    <div className = 'workContainer'>
        <h1 className = 'project__heading'>Projects</h1>
      <div className = 'project__container'>
        {WorkCardData.map((value, i) =>
        {
        return(
            <WorkCard 
            key = {i} imgsrc = {value.imgsrc}
            title = {value.title}
            text = {value.text}
            view = {value.view}
            source = {value.source}
        />
        )})
        }
      </div>
    </div>
  )
}

export default Work


{/* <div className = 'project__card'>
            <img src={pro1} alt = 'img'></img>
            <h2 className='project__title'>Project Title</h2>
            <div className='project__details'>
                <p>This is project paragraph</p>
                <div className='project__btns'>
                    <NavLink to = 'https://zeyasadaf.github.io/tinDog.github.io/' className = 'btn'>
                        View
                    </NavLink>
                    <NavLink to = 'https://zeyasadaf.github.io/tinDog.github.io/' className = 'btn'>
                        Source
                    </NavLink>
                </div>
            </div>
        </div> */}