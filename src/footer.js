import React from 'react';
import './footer.css';
import QuantumLogo from './images/QUANTUMLOGO.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="scroll-to-top">
                <a href="#top"><i className="fas fa-arrow-up"></i></a>
            </div>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={QuantumLogo} alt="Quantum Logo" /> 
                </div>
                <div className="footer-menu">
                    <div className="explore">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#events">Events</a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href="mailto:srmqcc@gmail.com">srmqcc@gmail.com</a></li>
                            <li><a href="tel:+1234567890">+917995738255</a></li>
                            <li><a href="tel:+1234567890">+918011922099</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/company/quantumsrm/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/quantum_srm/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/quantum-srm" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://x.com/quantum_srm" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
                <a href="https://discord.gg/3cNZr6jD" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-discord"></i>
                </a>
            </div>
            <div className="copyright">
                <p>&copy;copyright 2023 - QUANTUM COMPUTING CLUB SRM </p>
            </div>
        </footer>
    );
};

export default Footer;
