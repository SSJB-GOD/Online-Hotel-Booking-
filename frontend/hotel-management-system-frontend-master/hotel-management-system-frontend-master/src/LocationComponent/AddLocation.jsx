import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "./AddLocation.module.css";

const AddLocation = () => {
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  const saveLocation = (e) => {
    e.preventDefault();
    let data = { city, description };

    fetch("http://localhost:8080/api/location/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((res) => {
        console.log(res);

        console.log(res.responseMessage);

        navigate("/home");
        toast.warn(res.responseMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h5 className="card-title">Add Location</h5>
        </div>
        <div className={styles.body}>
          <form onSubmit={saveLocation}>
            <div className={styles.inputGroup}>
              <label htmlFor="city" className={styles.label}>
                <b>Location (City)</b>
              </label>
              <input
                type="text"
                className={styles.input}
                id="city"
                placeholder="Enter city.."
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="description" className={styles.label}>
                <b>Location Description</b>
              </label>
              <textarea
                className={styles.textarea}
                id="description"
                rows="3"
                placeholder="Enter description.."
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <input
              type="submit"
              className={styles.button}
              value="Add Location"
            />
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLocation;
