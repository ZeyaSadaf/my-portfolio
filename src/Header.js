import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './Header.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import Zeya_Sadaf_D from './resume/Zeya_Sadaf_D.pdf';

const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = ()=> {
      if(window.scrollY >=1)
      {
        setColor(true);
      }
      else{
        setColor(false);
      }
    };

    window.addEventListener('scroll', changeColor);

  return (
    <div className = {color? 'header header-bg':'header'}>
        <Link to = '/'>
      <div className = 'header__div'>
        <h1 className = 'header__logo'>Zeya.</h1>
        {/* <h1 className='header__logo'><img className = "header__img" src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3218ffdc-3998-4ab1-8003-97bd34e7888b/dek95ad-e82f1f93-1f6f-41d0-81aa-51f06ee65e09.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyMThmZmRjLTM5OTgtNGFiMS04MDAzLTk3YmQzNGU3ODg4YlwvZGVrOTVhZC1lODJmMWY5My0xZjZmLTQxZDAtODFhYS01MWYwNmVlNjVlMDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hLu8VO0YSDcYW4okJDjHwfEamV4bIu2xWtK10paGQHM" alt = 'fairy'>
        </img></h1> */}
      </div>
      </Link>
      {/* <ul className = 'header__menu'> */}
      <ul className = {click ? 'header__menu active':
    'header__menu'}>
      <li>
        <Link to = "/">
            Home
        </Link>
        </li>
        <li>
        <Link to = '/about'>
            About
        </Link>
        </li>
        <li>
        <Link to = '/project'>
            Projects
        </Link>
        </li>
        <li>
        <Link to= '/contact'>
            Contact
        </Link>
        </li>
        {/* <li>
        <Link to= {Zeya_Sadaf_D} download = 'Zeya_Sadaf_D'>
            Resume
        </Link>
        </li> */}

        {/* <li><a href = {Zeya_Sadaf_D} download = 'Zeya_Sadaf_D'>Resume</a></li> */}
      </ul>
      <div className = 'header__menu__hamburger' onClick = {handleClick}>
        {click? (<FaTimes size = {20} style ={{color:'white'}} />)
        :(<FaBars size = {20} style ={{color:'white'}} />)}
        
        
        </div>
    </div>
  )
}

export default Header
