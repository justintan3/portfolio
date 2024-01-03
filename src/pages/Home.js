import React, {useRef} from 'react';
import Navbar from '../components/Navbar';
import About from './About';
import Experiences from './Experiences';
import Contact from './Contact';
import logo from '../logo.svg';

export const Home = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experiencesRef = useRef(null);
    const contactRef = useRef(null);

    const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };

      console.log("homeRef: ", homeRef);
      console.log("aboutRef: ", aboutRef)
  return (
    <>
    <div className="App" ref={homeRef}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="nav-panel">
        <Navbar homeRef={homeRef} aboutRef={aboutRef} experiencesRef={experiencesRef} contactRef={contactRef} handleScroll={handleScroll}/>
    </div>
    <div className="introduction">
          <h1 className="hello">
            Hello, I'm
            <p className="my-name">
            Justin Tan
          </p>
          <p className="hello">Frontend Developer</p>
          </h1>
          
        </div>
      </header>
    </div>
    <div ref={aboutRef}>
        <About />
    </div>
    <div ref={experiencesRef}>
        <Experiences />
    </div>
    <div ref={contactRef}>
        <Contact />
    </div>
    </>
  )
}

export default Home;