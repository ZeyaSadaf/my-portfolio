import React from 'react'
import './HeroImg.css';
import {Link} from 'react-router-dom';
const HeroImg = () => {
  return (
    <div className = 'hero'>
        <div className = 'hero__bg'>
            <img className = 'hero__img' src = 'https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img>
        </div>
        <div className = 'hero__content'>
            <p>Hi! I'm Zeya,</p>
            <h1>I build things for the web.</h1>
            <div className = 'hero__buttons'>
                <Link className = 'btn ' to = '/project'>
                    PROJECTS
                </Link>
                <Link className = 'btn-light' to = '/contact'>
                    CONTACT
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
