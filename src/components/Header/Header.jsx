import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import Button from '../UI/Button';
import ThemeToggle from '../UI/ThemeToggle';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '#work' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src="/logo.svg" alt="Dunk Design Logo" className="logo-img" style={{ height: '32px', width: 'auto' }} />
                    <div style={{ display: 'flex', gap: '4px' }}>
                        <span>Dunk</span>
                        <span className="accent-gradient">Design</span>
                    </div>
                </a>

                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button variant="primary" onClick={() => window.location.href = '#contact'}>
                        Start a Project
                    </Button>
                    <ThemeToggle />
                </nav>

                {!isMobileMenuOpen && (
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <HiMenuAlt4 size={28} color="var(--color-text-primary)" />
                    </button>
                )}

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="mobile-menu-header" style={{ justifyContent: 'flex-end' }}>
                                <button
                                    className="close-menu-btn"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Close Menu"
                                >
                                    <HiX size={28} color="var(--color-text-primary)" />
                                </button>
                            </div>

                            <ul className="mobile-nav-list">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="mobile-nav-link"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <Button
                                        variant="primary"
                                        className="mobile-cta"
                                        onClick={() => {
                                            window.location.href = '#contact';
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Start a Project
                                    </Button>
                                </li>
                                <li style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                                    <ThemeToggle />
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
