import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import styles from "./UserRegister.module.css"; // Importing CSS Module

const UserRegister = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    contact: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
    age: "",
    sex: "",
  });

  useEffect(() => {
    if (document.URL.indexOf("admin") !== -1) {
      setUser((prevUser) => ({ ...prevUser, role: "Admin" }));
    } else if (document.URL.indexOf("hotel") !== -1) {
      setUser((prevUser) => ({ ...prevUser, role: "Hotel" }));
    } else if (document.URL.indexOf("customer") !== -1) {
      setUser((prevUser) => ({ ...prevUser, role: "Customer" }));
    }
  }, []);

  console.log("ROLE FETCHED: " + user.role);

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [genders, setGenders] = useState([]);

  useEffect(() => {
    const retrieveAllGenders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/user/gender");
        if (response.data) {
          setGenders(response.data.genders);
        }
      } catch (error) {
        console.error("Error fetching genders:", error);
      }
    };

    retrieveAllGenders();
  }, []);

  const saveUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      
      if (!response.ok) throw new Error("Failed to register user");
      
      toast.success("Registered Successfully!!!", {
        className: styles.toast, // Custom Toast Style
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("Registration Failed!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h5>Register {user.role}</h5>
        </div>
        <div className="card-body">
          <form className="row g-4 " onSubmit={saveUser}>
            <div className="col-md-6 mb-3">
              <label className="form-label">
                <b>First Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={handleUserInput}
                value={user.firstName}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                <b>Last Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={handleUserInput}
                value={user.lastName}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <b>
                <label className="form-label">Email Id</label>
              </b>
              <input
                type="email"
                className="form-control"
                name="emailId"
                onChange={handleUserInput}
                value={user.emailId}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                <b>Password</b>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleUserInput}
                value={user.password}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                <b>User Gender</b>
              </label>
              <select
                onChange={handleUserInput}
                className="form-control"
                name="sex"
                required
              >
                <option value="">Select Gender</option>
                {genders.map((gender, index) => (
                  <option key={index} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                <b>Contact No</b>
              </label>
              <input
                type="tel"
                className="form-control"
                name="contact"
                onChange={handleUserInput}
                value={user.contact}
                required
              />
            </div>

            <div className="d-flex aligns-items-center justify-content-center">
              <input
                type="submit"
                className={styles.btn}
                value="Register User"
              />
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
