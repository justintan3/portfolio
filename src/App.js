import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

        <>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />}/>
              <Route path='/experiences' element={<Experiences />}/>
              <Route path='/Contact' element={<Contact />}/>
            </Routes>
          </Router>
        </>
    //     <div className="introduction">
    //       <h1 className="hello">
    //         Hello, I'm
    //         <h2 className="my-name">
    //         Justin Tan
    //       </h2>
    //       </h1>
          
    //     </div>
    //   </header>
    // </div>
  );
}

export default App;
