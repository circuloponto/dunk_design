import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background" />
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        I craft <span className="text-gradient">digital</span> <br />
                        <span className="accent-gradient">experiences.</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        I'm a designer dedicated to building functional and beautiful
                        web experiences that help your business grow.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Button variant="primary" onClick={() => window.location.href = '#work'}>
                            View My Work
                        </Button>
                        <Button variant="outline" onClick={() => window.location.href = '#contact'}>
                            Contact Me
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="mouse">
                    <div className="wheel" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
