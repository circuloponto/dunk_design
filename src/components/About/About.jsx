import React from 'react';
import { motion } from 'framer-motion';
import './About.css';



const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container about-container">
                <div className="about-content">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        About <span className="text-gradient">Me</span>
                    </motion.h2>

                    <motion.p
                        className="about-text"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I am a designer and developer with a passion for creating
                        exceptional digital experiences. I believe that design is not just about
                        how things look, but how they work and how they make people feel.
                    </motion.p>
                </div>
            </div>
        </section>

    );
};

export default About;
