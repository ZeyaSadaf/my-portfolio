import React from 'react'
import Footer from './Footer';
import Header from './Header'
import './Header.css';
import HeroProject from './HeroProject';
import Pricing from './Pricing';
import Work from './Work';
import WorkCard from './WorkCard';

const Projects = () => {
  return (
    <div>
      <Header />
      <HeroProject imgBg = 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80' heading = 'PROJECTS' para = 'Here are some of my most recent work.'/>
      {/* <WorkCard /> */}
      <Work />
      <span className = 'bar'></span>
      {/* <Pricing /> */}
      {/* <span className = 'bar'></span> */}
      <Footer />
    </div>
  )
}

export default Projects
