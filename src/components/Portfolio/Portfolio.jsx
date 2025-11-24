import React from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'Be Aware',
        category: 'Web Design / Development',
        image: '/be_aware.png',
        link: 'https://be-aware-eight.vercel.app/en',
    },
    {
        id: 2,
        title: 'Bridge',
        category: 'Web Design / Development',
        image: '/bridge.png',
        link: 'https://bridge-nine-xi.vercel.app/',
    },
];

const Portfolio = () => {
    return (
        <section id="work" className="portfolio section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Selected <span className="text-gradient">Work</span></h2>
                    <p className="section-subtitle">A showcase of our finest digital creations.</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
