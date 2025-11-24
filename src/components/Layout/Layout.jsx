import React from 'react';
import SmoothScroll from './SmoothScroll';
import Header from '../Header/Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <SmoothScroll>
            <div className="app-container">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </SmoothScroll>
    );
};

export default Layout;
