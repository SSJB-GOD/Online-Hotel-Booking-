import { Link } from "react-router-dom";
import styles from "./NormalHeader.module.css"; // Import the CSS module

const NormalHeader = () => {
  return (
    <ul className={`${styles.navbarNav} navbar-nav ms-auto mb-2 mb-lg-0 me-3`}>
      <li className="nav-item">
        <Link
          to="/user/customer/register"
          className={`${styles.navLink} nav-link active`}
          aria-current="page"
        >
          <b className={styles.textColor}>Register Customer</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/login"
          className={`${styles.navLink} nav-link active`}
          aria-current="page"
        >
          <b className={styles.textColor}>Login</b>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
