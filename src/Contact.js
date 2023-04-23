import React from 'react'
import ContactForm from './ContactForm'
import Footer from './Footer'
import Header from './Header'
import HeroProject from './HeroProject'

const Contact = () => {
  return (
    <div>
      <Header />
      <HeroProject heading ="Let's Connect!" para = "Want to discuss code over coffee? Hit me up!" imgBg='https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'/>
      <ContactForm />
      <span className = 'bar'></span>
      <Footer />
    </div>
  )
}

export default Contact
