import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./AddHotelFacilities.module.css";

const AddHotelFacilities = () => {
  const { hotelId } = useParams();
  const [hotelFacilities, setHotelFacilities] = useState([]);
  const [facilityId, setFacilityId] = useState("");
  const [allFacilities, setAllFacilities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotelFacilities = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/facility/hotel?hotelId=${hotelId}`);
        setHotelFacilities(response.data.facilities || []);
      } catch (error) {
        console.error("Error fetching hotel facilities:", error);
      }
    };
    fetchHotelFacilities();
  }, [hotelId]);

  useEffect(() => {
    const fetchAllFacilities = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/facility/fetch");
        setAllFacilities(response.data.facilities || []);
      } catch (error) {
        console.error("Error fetching all facilities:", error);
      }
    };
    fetchAllFacilities();
  }, []);

  const saveHotelFacility = async (e) => {
    e.preventDefault();
    if (!facilityId) {
      alert("Please select a facility to add.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/facility/hotel/add", {
        hotelId,
        facilityId,
      });
      setFacilityId("");
      window.location.reload();
    } catch (error) {
      console.error("Error saving facility:", error);
    }
  };

  const deleteFacility = async (facilityId) => {
    try {
      await axios.delete(`http://localhost:8080/api/facility/hotel/delete?hotelId=${hotelId}&facilityId=${facilityId}`);
      setHotelFacilities(hotelFacilities.filter(facility => facility.id !== facilityId));
    } catch (error) {
      console.error("Error deleting facility:", error);
    }
  };

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <h3>Add Facility</h3>
        </div>
        <form onSubmit={saveHotelFacility} className={styles.form}>
          <label className={styles.label}>Facility</label>
          <select
            name="facilityId"
            value={facilityId}
            onChange={(e) => setFacilityId(e.target.value)}
            className={styles.formSelect}
          >
            <option value="">Select Facility</option>
            {allFacilities.map((facility) => (
              <option key={facility.id} value={facility.id}>{facility.name}</option>
            ))}
          </select>
          <button type="submit" className={styles.primaryButton}>Add Facility</button>
        </form>

        <div className={styles.tableContainer}>
          <h3 className={styles.subHeader}>Selected Hotel Facilities</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Facility Name</th>
                <th>Facility Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hotelFacilities.map((facility) => (
                <tr key={facility.id}>
                  <td>{facility.name}</td>
                  <td>{facility.description}</td>
                  <td>
                    <button
                      className={styles.deleteButton}
                      onClick={() => deleteFacility(facility.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddHotelFacilities;
