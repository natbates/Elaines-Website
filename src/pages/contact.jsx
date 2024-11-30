import "../styles/contact.css";
import React, { useState } from "react";

const Contact = () => {


    return (
        <div id="contact">
            <div id = "contact-top-img" style={{ backgroundImage: `url(images/elaine/backgrounds/image1.jpg)` }}>
                <h1 className="main-text">Lets Have A Coffee</h1>
            </div>
            <div id="contact-curve"></div>
            <p className="sub-text">Over to you to message me <span className = "pink-underline">Today</span>. Either use the contact form below or feel free to drop me a message using my details.</p>
            <div id="contact-holder">
                <h1>Drop Me A Message</h1>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">1. WHAT IS YOUR NAME</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">2. WHAT IS YOUR EMAIL</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">3. WHAT IS YOUR ENQUIRY TYPE</label>
                        <input type="text" id="subject" name="subject" placeholder="Enquiry" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">4. WHAT IS YOUR SUBJECT</label>
                        <input type="text" id="subject" name="subject" placeholder="Subject" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">HOW CAN I HELP?</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;