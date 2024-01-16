import React from "react";
import Navbar from "../components/Navbar";
import "./pages.css";

export const Project = () => {
  return (
    <div className="App">
      <div className="nav-panel">
        <Navbar />
      </div>
      <div className="experience-page-container">
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
        <div className="experience-container">
          <div
            className="experience-divider"
            //   style={{ height: "215px", top: "0%" }}
          ></div>
          <p className="experience-name">Document Approval</p>
          <ul>
            <li className="experience-description">
              Led frontend development of multiple successfully launched
              internal web-based applications that is now used by hundreds of
              employees company-wide. Collaborated with cross-functional teams
              in an agile environment to deliver features and resolve issues
              efficiently. Designed and implemented unit tests, integration
              tests, and automated tests using Cypress for consistent code
              quality. Optimized multiple critical applications for improving
              file upload speed by 5x and improving scalability.
            </li>
          </ul>
        </div>
        <div className="project-header">Projects</div>
        <div className="project-container">
          <div className="experience-divider" style={{ left: "0%" }} />
          <p className="project-name">Document Approval</p>
          <ul>
            <li className="project-description">
              Developed a document approval application built with React, SCSS,
              Hasura, and Azure.
            </li>
            <li className="project-description">
              Implemented Cypress automated testing to conduct code reviews to
              instantly detect bugs and issues.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
