import React from "react";
import githubIcon from '../assets/github.png'
import linkedInLogo from '../assets/linkedIn.png'
import './contact.css'



const Contact = () => {
  return (
    <section>
    <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1><br/>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm"></form>
        <input type="text" className="name"placeholder="Your Name"/>    
        <input type="email" className="email"placeholder="Your Email"/>
        <textarea className="msg"name="message"rows="5"placeholder="Your Message"></textarea>
        <button type="submit" value="Submit"></button>
        <div className="links">
            <img src={githubIcon}alt="Github"className="link>"/>
            <img src={linkedInLogo}alt="Linkedin"className="link>"/>
        </div>


    </div>
    </section>
  )
}

export default Contact
