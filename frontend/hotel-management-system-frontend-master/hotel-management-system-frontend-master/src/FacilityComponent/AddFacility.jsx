import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "./AddFacility.module.css";

const AddFacility = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();

  const saveFacility = async (e) => {
    e.preventDefault();
    const data = { name, description };

    try {
      const response = await fetch("http://localhost:8080/api/facility/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (response.ok) {
        toast.success(res.responseMessage, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setTimeout(() => {
          navigate("/home");
        }, 3000);
      } else {
        toast.error(res.responseMessage || "Something went wrong!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error("Failed to connect to server!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h5>Add Facility</h5>
        </div>
        <div className={styles.body}>
          <form onSubmit={saveFacility}>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                <b>Facility Name</b>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name..."
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">
                <b>Facility Description</b>
              </label>
              <textarea
                id="description"
                rows="3"
                placeholder="Enter description..."
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.button}>
              Add Facility
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddFacility;
