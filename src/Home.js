import React from 'react'
import Footer from './Footer'
import Header from './Header'
import HeroImg from './HeroImg'

const Home = () => {
  return (
    <div className = 'home'>
        <Header />
        <HeroImg imgHero='https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' pTag = "Hi! I'm Zeya," 
        heading = 'A Front-End Web Developer.' />
        <Footer />
    </div> 
  )
}

export default Home
