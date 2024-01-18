import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Background from "../background_img.png";
import "./pages.css";

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

  return (
    <>
      <div className="App" ref={homeRef}>
        <header className="App-header">
          <img src={Background} className="App-logo" alt="logo" />
          <div className="nav-panel">
            <Navbar
              homeRef={homeRef}
              aboutRef={aboutRef}
              experiencesRef={experiencesRef}
              contactRef={contactRef}
              handleScroll={handleScroll}
            />
          </div>
          <div className="introduction">
            <div className="top-bar">
              {/* <h1 className="hello">
                Hello, I'm */}
              <p className="my-name" rel="stylesheet">
                Justin Tan
              </p>
              <p className="occupation">Frontend Developer</p>
              {/* </h1> */}
            </div>
            <div className="i-am-him">
              <p>
                I am a Frontend Developer based in Los Angeles. I have multiple
                years of experience in developing a quality web-based
                applications. I enjoy exploring aesthetic and minimalistic
                designs. I love traveling, coffee, and food.
              </p>
            </div>
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
  );
};

export default Home;
