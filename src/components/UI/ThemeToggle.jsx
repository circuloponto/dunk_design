import React from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <HiSun className="theme-icon sun" />
            ) : (
                <HiMoon className="theme-icon moon" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
