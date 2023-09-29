import React from 'react'
import './about.css'
import UIDesign from '../assets/ui-design.png'
import WebDesign from '../assets/website-design.png'
import AppDesign from '../assets/app-design.png'

const About= () => {
  return (
   
    <section id='skills'>
        <span className='skillTitle'> What I do</span>
        <span className='skillDesc'>I'm a passionate software engineer, skilled in solving complex problems through code. My portfolio showcases my expertise in building robust, innovative software solutions. Explore and discover my software engineering journey.</span>
        <div className="skillBars">
            <div className='skillBar'>         
                   <img src={UIDesign}alt=' UI Design ' className='skillBarImg'/>
                   <div className="skillBarText">
                    <h2>Programming Languages </h2>
                    <p>I am proficient in programming languages such as Python and Javascript</p>               
                    
                   </div>

            </div>

            <div className='skillBar'>         
                   <img src={WebDesign}alt='WebDesign ' className='skillBarImg'/>
                   <div className="skillBarText">
                    <h2>Web Development </h2>
                    <p>I possess skills in both front-end and back-end web development. On the front-end, I am well-versed in HTML, CSS, and JavaScript.I have experience with popular frameworks such as React. On the back-end, I have worked with Python and frameworks such as Flask and FastAPI to create robust web applications.</p>               
                    
                   </div>
            </div>

            <div className='skillBar'>         
                   <img src={AppDesign}alt=' AppDesign' className='skillBarImg'/>
                   <div className="skillBarText">
                    <h2>Database Management </h2>
                    <p> I excel in database management, particularly with SQL and PostgreSQL. My expertise lies in designing, querying, and optimizing databases, ensuring data integrity and high performance in applications.</p>               
                    
                   </div>
            </div> 
            
                  

                 
        </div>
    </section>
  )
}

export default About
