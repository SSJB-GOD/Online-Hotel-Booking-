import { Link } from "react-router-dom";
import styles from "./Footer.module.css"; // Import custom CSS

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container py-5">
        <div className="row">
          {/* Hotel Info Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className={styles.footerTitle}>Hotel Booking System</h5>
            <p className={styles.footerText}>
              Enjoy a hassle-free booking experience at any time of day with our 24/7 customer service. We offer you the freedom to book at your convenience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className={styles.footerTitle}>Quick Links</h5>
            <ul className={styles.footerLinks}>
              <li><Link to="/about" className={styles.footerLink}>About Us</Link></li>
              <li><Link to="/contact" className={styles.footerLink}>Contact</Link></li>
              <li><Link to="/careers" className={styles.footerLink}>Careers</Link></li>
              <li><Link to="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className={styles.footerTitle}>Stay Updated</h5>
            <p className={styles.footerText}>
              Subscribe to our newsletter for the latest offers and updates.
            </p>
            <div className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <hr className="" />

        {/* Footer Bottom Section */}
        <div className="text-center">
          <p className={styles.footerBottom}>
            &copy; {new Date().getFullYear()} Hotel Booking System | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
