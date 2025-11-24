import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
    return (
        <motion.button
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            <span className="btn-content">{children}</span>
            {variant === 'primary' && <div className="btn-glow" />}
        </motion.button>
    );
};

export default Button;
