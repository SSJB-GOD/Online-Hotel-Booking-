import { Link } from "react-router-dom";
import logo from "../images/e_logo.png";
import RoleNav from "./RoleNav";
import styles from "./Header.module.css"; // Import the CSS module

const Header = () => {
  return (
    <div>
      <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
        <div className={`container-fluid ${styles.container}`}>
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <Link to="/" className={`${styles.navBrand} navbar-brand`}>
            <i>
              <b className={styles.textColor}>Royal & Luxury Hotels</b>
            </i>
          </Link>

          <button
            className={`navbar-toggler ${styles.navbarToggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`${styles.navLink} nav-link active`}
                  aria-current="page"
                >
                  <b className={styles.textColor}>About Us</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`${styles.navLink} nav-link active`}
                  aria-current="page"
                >
                  <b className={styles.textColor}>Contact Us</b>
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
