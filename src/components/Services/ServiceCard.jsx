import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="service-icon-wrapper">
                <service.icon className="service-icon" />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href="#contact" className="service-link">
                Learn More <HiArrowRight />
            </a>
        </motion.div>
    );
};

export default ServiceCard;
