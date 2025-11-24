import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className="card-image-container">
                <img src={project.image} alt={project.title} className="card-image" />
                <div className="card-overlay">
                    <div className="card-action">
                        <span>View Project</span>
                        <HiArrowUpRight />
                    </div>
                </div>
            </div>
            <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-category">{project.category}</p>
            </div>
        </motion.a>
    );
};

export default ProjectCard;
