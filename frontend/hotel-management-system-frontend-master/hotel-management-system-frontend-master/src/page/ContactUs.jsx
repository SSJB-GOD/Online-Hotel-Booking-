import React, { useState } from "react";
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      setSuccess(true);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>Contact Us</h2>
      <p className={styles.subHeading}>We'd love to hear from you! Whether you have a question or just want to share your thoughts, reach out to us.</p>

      <form onSubmit={handleFormSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Your Email</label>
          <input
            type="email"
            id="email"
            className={`${styles.input} ${styles.formControl}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Your Message</label>
          <textarea
            id="message"
            className={`${styles.textarea} ${styles.formControl}`}
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            required
          />
        </div>

        <button type="submit" className={styles.btn}>Send Message</button>
      </form>

      {success && (
        <div className={styles.alert} role="alert">
          Thank you for reaching out! We'll get back to you as soon as possible.
        </div>
      )}

      <div className={styles.socialMedia}>
        <h5>Follow us on social media:</h5>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <p>
          © 2025 Your Company. All Rights Reserved. | Designed by Jitesh Borkar.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
