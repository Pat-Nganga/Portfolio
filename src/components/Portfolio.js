import React from 'react'
import './Portfolio.css'

const Projects = () => {
  return (
    <section id='projects'>
      <span className='projectTitle'> Projects</span>

      <div className="projectBars">
      <div className="projectBar">
      <div className="projectBarText">      
        <h2>Ticketopia</h2>
        <span className='projectDesc'>This is a client ticketing app.</span>
        <p>Technologies: React</p>
        <p>Status: Completed</p>
        <button><a href='https://heroic-figolla-a3815f.netlify.app/' target='_blank' rel='noreferrer'>More Info</a></button>
      </div>
      </div>
       
      
      <div className="projectBar">
      <div className="projectBarText">      
        <h2>Speedysend</h2>
        <span className='projectDesc'>This is an e-commerce website that enables users to shop for products from the shops of their choice then have the goods delivered at their doorstep.</span>
        <p>Technologies: React,Python,Postgresql</p>
        <p>Status: Completed</p>
        <button><a href='https://speedysend-backend.onrender.com/' target='_blank' rel='noreferrer'>More Info</a></button>
      </div>
      </div>
      
      <div className="projectBar">
      <div className="projectBarText">      
        <h2>Ticketopia</h2>
        <span className='projectDesc'>This is a client ticketing app.</span>
        <p>Technologies: React</p>
        <p>Status: Completed</p>
        <button><a href='https://heroic-figolla-a3815f.netlify.app/' target='_blank' rel='noreferrer'>More Info</a></button>
      </div>
      </div>
      
      <div className="projectBar">
      <div className="projectBarText">      
        <h2>Ticketopia</h2>
        <span className='projectDesc'>This is a client ticketing app.</span>
        <p>Technologies: React</p>
        <p>Status: Completed</p>
        <button><a href='https://heroic-figolla-a3815f.netlify.app/' target='_blank' rel='noreferrer'>More Info</a></button>
      </div>
      </div>
      </div>


    </section>
  
  );
}

export default Projects;
