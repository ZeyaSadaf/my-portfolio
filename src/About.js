import React from 'react'
import AboutContent from './AboutContent'
import Footer from './Footer'
import Header from './Header'
import HeroProject from './HeroProject.js'
import Pricing from './Pricing'
import './Pricing.css'

const About = () => {
  return (
    <div>
      <Header />
      <HeroProject heading ="Hi there!" para = "Thanks for staying this long." imgBg='https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
      <AboutContent />
      <span className = 'bar'></span>
      <Pricing />
      <span className = 'bar'></span>
      <Footer />
    </div>
  )
}

export default About
