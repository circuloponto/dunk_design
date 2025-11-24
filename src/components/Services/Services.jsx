import React from 'react';
import { motion } from 'framer-motion';
import { HiComputerDesktop, HiSwatch, HiDevicePhoneMobile, HiCheck } from 'react-icons/hi2';
import Button from '../UI/Button';
import './Services.css';

const services = [
    {
        id: 'web-design',
        title: 'Web Design',
        description: 'I craft visually stunning and user-centric interfaces that captivate your audience. My design process focuses on creating a unique visual identity that resonates with your brand values while ensuring an intuitive user experience.',
        icon: HiSwatch,
        features: [
            'User Interface (UI) Design',
            'User Experience (UX) Strategy',
            'Design Systems & Style Guides',
            'Interactive Prototyping'
        ]
    },
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'I build robust, scalable, and high-performance websites using the latest technologies. From simple landing pages to complex web applications, I ensure your site is fast, secure, and easy to manage.',
        icon: HiComputerDesktop,
        features: [
            'Custom Frontend Development',
            'React & Next.js Applications',
            'Performance Optimization',
            'SEO-Friendly Architecture'
        ]
    },
    {
        id: 'responsive-design',
        title: 'Responsive Design',
        description: 'I ensure your website looks and functions perfectly on every device. In a mobile-first world, I guarantee a seamless experience whether your users are on a desktop, tablet, or smartphone.',
        icon: HiDevicePhoneMobile,
        features: [
            'Mobile-First Approach',
            'Cross-Browser Compatibility',
            'Touch-Friendly Interfaces',
            'Adaptive Layouts'
        ]
    },

];

const Services = () => {
    return (
        <section id="services" className="services section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My <span className="text-gradient">Expertise</span></h2>
                    <p className="section-subtitle">Deep dive into how I can help your business grow.</p>
                </div>

                <div className="services-list">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="service-section"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="service-content">
                                <div className="service-icon-large">
                                    <service.icon />
                                </div>
                                <h3 className="service-heading">{service.title}</h3>
                                <p className="service-body">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <HiCheck className="check-icon" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" onClick={() => window.location.href = '#contact'}>
                                    Start a {service.title} Project
                                </Button>
                            </div>
                            <div className="service-visual">
                                {/* Placeholder for a visual representation or abstract shape */}
                                <div className={`visual-shape shape-${index + 1}`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
