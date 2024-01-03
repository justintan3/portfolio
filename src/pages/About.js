import React from 'react';
import Navbar from '../components/Navbar';
import background2 from '../background-img2.png';
import './pages.css';

const About = () => {
    return (
        <div className="App">
            <div className="nav-panel">
                <Navbar />
            </div> 
            <div className='about-container'>
                <p className="about-me">ABOUT ME</p>
                <div className="divider"></div>
                <div className="description-box">
                    <p className="description">Front-end Developer with two years of experience in designing and building web-based applications using JavaScript, HTML/CSS, and ReactJS. Strong ability to work cross-functionally with back-end developers, UX/UI designers, and deliver meaningful contributions on teams of varying size and scope. Passionate about expanding my skills and staying at the forefront of technological advance- ments in the field to write well-documented and scalable code to create applications that provide seamless and visually appealing user experiences.</p>
                </div>
            
                
                <img className="background-img" src={background2} alt="background"/>
                
            </div>

        </div>
    )

}

export default About;