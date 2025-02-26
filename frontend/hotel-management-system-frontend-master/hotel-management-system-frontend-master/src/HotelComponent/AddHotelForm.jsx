import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./AddHotelForm.module.css";

const AddHotelForm = () => {
  const [locations, setLocations] = useState([]);
  const [hotelUsers, setHotelUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/location/fetch")
      .then(response => setLocations(response.data.locations))
      .catch(error => console.error("Error fetching locations:", error));

    axios.get("http://localhost:8080/api/user/hotel")
      .then(response => setHotelUsers(response.data.users))
      .catch(error => console.error("Error fetching hotel users:", error));
  }, []);

  const [selectedImages, setSelectedImages] = useState({});
  const [hotel, setHotel] = useState({
    name: "",
    description: "",
    locationId: "",
    street: "",
    pincode: "",
    emailId: "",
    pricePerDay: "",
    totalRoom: "",
    userId: "",
  });

  const handleInput = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e, imageKey) => {
    setSelectedImages({ ...selectedImages, [imageKey]: e.target.files[0] });
  };

  const saveHotel = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData();
    Object.keys(selectedImages).forEach((key) => {
      formData.append(key, selectedImages[key]);
    });
    Object.keys(hotel).forEach((key) => {
      formData.append(key, hotel[key]);
    });

    axios.post("http://localhost:8080/api/hotel/add", formData)
      .then(() => navigate("/home"))
      .catch(error => setError("Failed to add hotel. Please try again."))
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h2 className={styles.title}>Add Hotel</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form} onSubmit={saveHotel}>
          <input type="text" name="name" placeholder="Hotel Name" onChange={handleInput} value={hotel.name} required />
          <select name="locationId" onChange={handleInput} required>
            <option value="">Select Location</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>{location.city}</option>
            ))}
          </select>
          <textarea name="description" placeholder="Hotel Description" onChange={handleInput} value={hotel.description} required />
          <select name="userId" onChange={handleInput} required>
            <option value="">Select Hotel Admin</option>
            {hotelUsers.map(user => (
              <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>
            ))}
          </select>
          <input type="email" name="emailId" placeholder="Hotel Email" onChange={handleInput} value={hotel.emailId} required />
          <input type="number" name="pricePerDay" placeholder="Price Per Day" onChange={handleInput} value={hotel.pricePerDay} required />
          <input type="number" name="totalRoom" placeholder="Total Room" onChange={handleInput} value={hotel.totalRoom} required />
          <input type="text" name="street" placeholder="Street" onChange={handleInput} value={hotel.street} required />
          <input type="number" name="pincode" placeholder="Pin Code" onChange={handleInput} value={hotel.pincode} required />
          <div className={styles.imageUploadSection}>
            {["image1", "image2", "image3"].map((imgKey, index) => (
              <label key={index} className={styles.imageUpload}>
                Select Image {index + 1}
                <input type="file" onChange={(e) => handleImageChange(e, imgKey)} />
              </label>
            ))}
          </div>
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Adding..." : "Add Hotel"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHotelForm;
