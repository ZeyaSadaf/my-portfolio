import React from 'react'
import './Footer.css'
import {FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {
    let intro = "Hi! I am a web developer based in Gurgaon, Haryana. I have always been fascinated in how the things on web work. Dived right in and I am loving it. Looking for new opportunities.";

  return (
    <div className = 'footer'>
        <div className = 'footer__container'>
            <div className='footer__leftItem'>
                <div className='footer_location'>
                <FaHome size = {20} style = {{color: '#E6DDC4',
            marginRight : '2rem'}}/>
            <p>Gurugram, Haryana</p>
            </div>
            <div className='footer__phone'>
                <h4>
            <FaPhone size= {20} style = {{color: '#E6DDC4',
            marginRight : '2rem'}}/>+91 XXXXXXXXXX</h4>
            </div>
            <div className='footer__email'>
                <h4>
            <a href="mailto:zeyasadaf259@gmail.com?body=My custom mail body"><FaMailBulk size= {20} style = {{color: '#E6DDC4',
            marginRight : '2rem'}}/>zeyasadaf259@gmail.com</a></h4>
            
            </div>
            </div>
            <div classname = 'footer__rightItem'>
                <div className='footer_about'>
                <h4>About me</h4>
                
                <p>{intro}</p>
                </div>
                <div className='footer_RightSocial'>
                <a href = "https://www.instagram.com/p/CP_hRxLnKn5/?igshid=ZDhmZGIxNmQ%3D" src='ig'><FaInstagram className = 'links'/></a>
                <a href = 'https://www.linkedin.com/in/zeyasadaf/' src='li'><FaLinkedin className = 'links'/></a>
                <a href = 'https://github.com/ZeyaSadaf' src='gh'><FaGithub className = 'links'/></a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
