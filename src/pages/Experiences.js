import React from "react";
import Navbar from "../components/Navbar";
import "./pages.css";

export const Project = () => {
  return (
    <div className="App">
      <div className="nav-panel">
        <Navbar />
      </div>
      <div className="project-container">
        <div className="header">Experiences</div>
        {/* <div className="experience">
          Led frontend development of multiple successfully launched internal
          web-based applications that is now used by hundreds of employees
          company-wide.
        </div>
        <div className="experience">
          Worked with other developers, DevOps, QA, and business users in an
          agile environment to effectively deliver features and resolve issues
          in a timely manner.
        </div> */}
        <div className="experience-container-1">
          <div
            className="experience-divider"
            //   style={{ height: "215px", top: "0%" }}
          ></div>
        </div>
        <div className="experience-container-2">
          <div className="experience-divider" style={{ left: "0%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
