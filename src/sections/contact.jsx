import React, { useEffect, useState, useContext } from 'react';
import { db } from "../firebaseConfig"
import { AuthContext } from '../contexts/authContext';
import { doc, getDocs } from 'firebase/firestore'; // Import necessary Firestore functions
import "../styles/contact.css";
import { collection } from 'firebase/firestore';

const Contact = () => {
    const { currentUser } = useContext(AuthContext); // Get the current user from AuthContext

    

    return (
        <div id="contact">
            <h1 className="main-text">Contact</h1>
            <p className="sub-text">Over to you to message me today. Either use the contact form below or feel free to drop me a message using my details.</p>
            <div id="contact-holder">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Subject" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
