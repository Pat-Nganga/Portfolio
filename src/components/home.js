import React from 'react';
import './home.css'
import bg  from'../assets/bimage.png'
import btnimg from '../assets/hireme.png'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div>

    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='hello'>I'm <span className='introName'>Patricia Ng'ang'a</span> <br/>Software Engineer</span>
            <p className='introPara'>I'm a passionate software engineer, skilled in solving complex problems through code.</p>
            <Link><button className="btn"><img src={btnimg} alt='Hire' className='btnImg'/>Hire me</button></Link>

        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
    </div>

  )
}

export default Home;
