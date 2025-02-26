import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import styles from "./UserLoginForm.module.css"; // Import CSS module

const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    })
      .then((result) => result.json())
      .then((res) => {
        console.log(res);

        if (res.role === "Admin") {
          sessionStorage.setItem("active-admin", JSON.stringify(res));
        } else if (res.role === "Customer") {
          sessionStorage.setItem("active-customer", JSON.stringify(res));
        } else if (res.role === "Hotel") {
          sessionStorage.setItem("active-hotel", JSON.stringify(res));
        }

        toast.success("Logged in successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        navigate("/home");
        window.location.reload(true);
      })
      .catch((error) => {
        console.error("Error during login:", error);
        toast.error("Login failed! Please try again.");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h4>User Login</h4>
        </div>
        <div className={styles.body}>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="role"><b>User Role</b></label>
              <select
                onChange={handleUserInput}
                className={styles.inputField}
                name="role"
              >
                <option value="0">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
                <option value="Hotel">Hotel</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="emailId"><b>Email Id</b></label>
              <input
                type="email"
                className={styles.inputField}
                id="emailId"
                name="emailId"
                onChange={handleUserInput}
                value={loginRequest.emailId}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password"><b>Password</b></label>
              <input
                type="password"
                className={styles.inputField}
                id="password"
                name="password"
                onChange={handleUserInput}
                value={loginRequest.password}
                autoComplete="on"
              />
            </div>

            <button type="submit" className={styles.loginButton} onClick={loginAction}>
              Login
            </button>

            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
