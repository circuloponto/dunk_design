import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <img src="/logo.svg" alt="Dunk Design Logo" className="logo-img" style={{ height: '48px', width: 'auto' }} />
                        <h3 className="footer-logo" style={{ display: 'flex', gap: '6px' }}>
                            <span>Dunk</span>
                            <span className="accent-gradient">Design</span>
                        </h3>
                    </div>
                    <p className="footer-desc">
                        Elevating brands through immersive digital experiences.
                    </p>
                </div>

                <nav className="footer-nav">
                    <ul className="footer-links">
                        <li><a href="#work">Work</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Dunk Design. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
