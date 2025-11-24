import React from 'react';
import emailjs from '@emailjs/browser';
import Button from '../UI/Button';
import './Contact.css';

const Contact = () => {
    const form = React.useRef();
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = React.useState('idle'); // idle, submitting, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_cirxyyg';
        const TEMPLATE_ID = 'template_jpzz5b7';
        const PUBLIC_KEY = 'cZ9oMW7dXHjgtOB79';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setFormData({ name: '', email: '', message: '' });
                setStatus('success');
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log('Failed to send email:', error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

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
                            <a href="mailto:hello.dunk.design@gmail.com">hello.dunk.design@gmail.com</a>
                        </div>

                    </div>
                </div>

                <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={status === 'submitting'}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={status === 'submitting'}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tell me about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={status === 'submitting'}
                        ></textarea>
                    </div>

                    {status === 'success' && (
                        <div className="success-message" style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontWeight: '500' }}>
                            Message sent successfully!
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="error-message" style={{ color: '#ef4444', marginBottom: '1rem', fontWeight: '500' }}>
                            Failed to send message. Please try again.
                        </div>
                    )}

                    <Button variant="primary" className="submit-btn" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
