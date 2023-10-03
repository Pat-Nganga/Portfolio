import React from "react";
import githubIcon from '../assets/github.png';
import linkedInLogo from '../assets/linkedIn.png';
import './contact.css';

const Contact = () => {
  const linkedInURL = "https://www.linkedin.com/in/patricia-ng-ang-a-75798212a/";
  const githubURL = "https://github.com/Pat-Nganga";

  return (
    <section>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1><br/>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name"/>     
          <input type="email" className="email" placeholder="Your Email"/>
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="Submit">submit</button>
        </form>
        <div className="links">
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="Github" className="link" />
        </a>
        <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
        <img src={linkedInLogo} alt="Linkedin" className="link" />
        </a>
        </div>
      </div>
    </section>
  )
}

export default Contact;
