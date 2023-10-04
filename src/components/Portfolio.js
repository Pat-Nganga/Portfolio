import React from 'react'
import './Portfolio.css'

const Projects = () => {
  return (
    <section id='projects'>
      <span className='projectTitle'> Projects</span>

      <div className="projectBars">
      <div className="projectBar">
      <div className="projectBarText">      
        <h2 className="project-title">Ticketopia</h2>
        <span className='projectDesc'>This is a client ticketing app that allows users to buy tickets to events happening in Nairobi</span>
        <p>Technologies: React</p>
        <p>Status: Completed</p>
        <button className="more-info-button"><a href='https://heroic-figolla-a3815f.netlify.app/' target='_blank' rel='noreferrer'>More Info</a></button>
      </div>
      </div>
       
      
      <div className="projectBar">
      <div className="projectBarText">      
        <h2 className="project-title">Speedysend</h2>
        <span className='projectDesc'>This is an e-commerce website that enables users to shop for products from the shops of their choice then have the goods delivered at their doorstep.</span>
        <p>Technologies: React,Python,Postgresql</p>
        <p>Status: Completed</p>
        <button className="more-info-button"><a href='https://speedysend-backend.onrender.com/' target='_blank' rel='noreferrer'>More Info</a></button>
      </div>
      </div>
      
      <div className="projectBar">
      <div className="projectBarText">      
        <h2 className="project-title">Travel Guru</h2>
        <span className='projectDesc'>This is an app that helps tourists find destinations in different parts of Kenya.</span>
        <p>Technologies: React,Python,FastAPI,SQL</p>
        <p>Status: In Progress</p>
        <button className="more-info-button"><a href='https://heroic-figolla-a3815f.netlify.app/' target='_blank' rel='noreferrer'>More Info</a></button>
      </div>
      </div>
      
      <div className="projectBar">
      <div className="projectBarText">      
        <h2 className="project-title">Picture Lens</h2>
        <span className='projectDesc'>This is a web application that gives users free access to different wallpapers and images.The users can download their favorite images or upload.</span>
        <p>Technologies: React,Python,Flask,SQL</p>
        <p>Status: Completed</p>
        <button className="more-info-button"><a href='https://heroic-figolla-a3815f.netlify.app/' target='_blank' rel='noreferrer'>More Info</a></button>
      </div>
      </div>
      </div>


    </section>
  
  );
}

export default Projects;
