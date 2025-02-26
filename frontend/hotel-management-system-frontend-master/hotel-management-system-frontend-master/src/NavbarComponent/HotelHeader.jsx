import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./HotelHeader.module.css"; // Import the CSS module

const HotelHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-hotel"));
  console.log(user);

  const hotelLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-hotel");
    window.location.reload(true);
    navigate("home");
  };

  return (
    <ul className={`${styles.navbarNav} navbar-nav ms-auto mb-2 mb-lg-0 me-5`}>
      <li className="nav-item">
        <Link
          to="user/hotel/bookings/all"
          className={`${styles.navLink} nav-link active`}
          aria-current="page"
        >
          <b className={styles.textColor}>All Booked Hotel</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to=""
          className={`${styles.navLink} nav-link active`}
          aria-current="page"
          onClick={hotelLogout}
        >
          <b className={styles.textColor}>Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default HotelHeader;
