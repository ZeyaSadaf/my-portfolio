import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './ContactForm.css'

const ContactForm = () => {

    const Result = () =>
    {
        return(
            <p className = 'res'>Your message has successfully been sent!</p>
        )
    }

    const Failure = () =>
    {
        return(
            <p className = 'res'>Your message has successfully been sent!</p>
        )
        }

    const [result, setResult] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6h3xz4p', 'template_bi8lx5f', e.target, 'XbkONVD-1PveyedWH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
          setResult(true);
      };

      
  return (
    <div className='contactForm'>
        <h1>~Send me a Message below~</h1>
        <div>
      <form action ="" onSubmit={sendEmail}>
        <label className='contactForm__label'>Your Name</label>
        <input type = 'text' placeholder='Enter your name' name = 'from_name' required></input>
        <label className='contactForm__label'>Email Address</label>
        <input type = 'email' placeholder='Your email' name = 'email' required></input>
        <label className='contactForm__label'>Subject</label>
        <input type = 'text' placeholder='Enter the subject' required name = 'subject'></input>
        <label className='contactForm__label'>Your Message</label>
        <textarea row = '6' placeholder='Type your Message Here' name = 'message' required>
        </textarea>

        <button className = 'contactForm__button btn' type = 'submit' {...result?<Result /> : <Failure />}>SEND</button>
      </form>
      <div>
      {result?<Result /> : null}
      </div>
      </div>
    </div>
  )
}

export default ContactForm
