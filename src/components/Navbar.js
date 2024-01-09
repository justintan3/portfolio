import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../menu-icon.svg";
import FBicon from "../fb-icon.svg";
import INicon from "../in-icon.svg";
import GHicon from "../gh-icon.svg";
import "./Navbar.css";

const Navbar = ({
  handleScroll,
  homeRef,
  aboutRef,
  experiencesRef,
  contactRef,
}) => {
  return (
    <div className="nav">
      <ul className="nav-menu">
        <li>
          <Link
            to="/"
            onClick={() => {
              handleScroll(homeRef.current);
            }}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleScroll(aboutRef.current);
            }}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleScroll(experiencesRef.current);
            }}
          >
            EXPERIENCES
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleScroll(contactRef.current);
            }}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <ul className="media-menu">
        <li>
          <Link to={{ pathname: "https://www.facebook.com/justin.tan.547/" }}>
            <img src={FBicon} className="media-links" alt="fb-icon" />
          </Link>
        </li>
        <li>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/justin-397-tan/" }}
            target="_blank"
          >
            <img src={INicon} className="media-links" alt="fb-icon" />
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "https://github.com/justintan3" }}>
            <img src={GHicon} className="media-links" alt="fb-icon" />
          </Link>
        </li>
      </ul>
    </div>
    // <>
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //     <Route path="/about" element={<About />} />
    //     <Route path="/portfolio" element={<Portfolio />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </>
  );
};
export default Navbar;
