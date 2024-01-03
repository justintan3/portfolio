import React from 'react';
import Navbar from '../components/Navbar';
import EmailIcon from '../email-icon.svg';
import './pages.css';

export const Contact = () => {
    return (
        <div className="App">

            <div className="contact-page">
                <div className="nav-panel">
                    <Navbar />
                </div> 
                <div className="contact-container">
                    <p className="contact-info">Contact me.</p>
                    <img className="email-icon" src={EmailIcon} alt="email"/>              
                </div>
            </div>

        </div>

    )
}

export default Contact;
