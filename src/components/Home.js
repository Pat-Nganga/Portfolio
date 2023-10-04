// import React from 'react';
// import './Home.css'
// import bg  from'../assets/photobck.png'


// const Home = () => {
//   return (
//     <div>

//     <section id="intro">
//         <div className='introContent'>
//             <span className='hello'>Hello,</span>
//             <span className='hello'>I'm <span className='introName'>Patricia Ng'ang'a</span> <br/>A Software Engineer</span>
//             <p className='introPara'>I'm a passionate software engineer, skilled in solving complex problems through code.</p>
           

//         </div>
//         <img src={bg} alt="Profile" className='bg'/>
//     </section>
//     </div>

//   )
// }

// export default Home;
import React, { useEffect } from 'react';
import './Home.css';
import bg from '../assets/photobck.png';

const Home = () => {
  useEffect(() => {
    const introContent = document.querySelector('.introContent');
    introContent.classList.add('animate-fade-in');
  }, []);

  return (
    <div>
      <section id="intro">
        <div className='introContent'>
        <span className='hello'>Hello,</span>
            <span className='hello'>I'm <span className='introName'>Patricia Ng'ang'a</span> <br/>A Software Engineer</span>
            <p className='introPara'>I'm a passionate software engineer, skilled in solving complex problems through code.</p>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
      </section>
    </div>
  );
}

export default Home;
