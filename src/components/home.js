import React from 'react';
import './home.css'
import bg  from'../assets/bimage.png'


const Home = () => {
  return (
    <div>

    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='hello'>I'm <span className='introName'>Patricia Ng'ang'a</span> <br/>Software Engineer</span>
            <p className='introPara'>I'm a passionate software engineer, skilled in solving complex problems through code.</p>
           

        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
    </div>

  )
}

export default Home;
