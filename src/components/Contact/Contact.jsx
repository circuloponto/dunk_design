import React from 'react';
import Button from '../UI/Button';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact section-padding">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Let's start a <br /><span className="accent-gradient">Project together.</span></h2>
                    <p className="contact-desc">
                        Have an idea? I'd love to hear about it. Send me a message and let's create something amazing.
                    </p>
                    <div className="contact-details">
                        <div className="detail-item">
                            <h4>Email</h4>
                            <a href="mailto:hello@dunkdesign.com">hello@dunkdesign.com</a>
                        </div>
                        <div className="detail-item">
                            <h4>Phone</h4>
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <Button variant="primary" className="submit-btn">Send Message</Button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
