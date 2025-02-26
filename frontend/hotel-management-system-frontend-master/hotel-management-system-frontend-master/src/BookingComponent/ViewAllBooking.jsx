import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import styles from "./ViewAllBooking.module.css";

const ViewAllBooking = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    const getAllBooking = async () => {
      const allBooking = await retrieveAllBooking();
      if (allBooking) {
        setAllBookings(allBooking.bookings);
      }
    };
    getAllBooking();
  }, []);

  const retrieveAllBooking = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/book/hotel/fetch/all"
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>All Bookings</h2>
        </div>
        <div className={styles.body}>
          <div className="table-responsive">
            <table className={`table table-hover ${styles.table}`}>
              <thead className={styles.thead}>
                <tr>
                  <th>Hotel</th>
                  <th>Hotel Name</th>
                  <th>Hotel Email</th>
                  <th>Hotel Contact</th>
                  <th>Booking Id</th>
                  <th>Customer Name</th>
                  <th>Customer Contact</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Total Room</th>
                  <th>Total Day</th>
                  <th>Booking Status</th>
                  <th>Total Payable Amount</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.map((booking, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`http://localhost:8080/api/hotel/${booking.hotelImage}`}
                        className={styles.image}
                        alt="hotel_pic"
                      />
                    </td>
                    <td>{booking.hotelName}</td>
                    <td>{booking.hotelEmail}</td>
                    <td>{booking.hotelContact}</td>
                    <td>{booking.bookingId}</td>
                    <td>{booking.customerName}</td>
                    <td>{booking.customerContact}</td>
                    <td>{booking.checkIn}</td>
                    <td>{booking.checkOut}</td>
                    <td>{booking.totalRoom}</td>
                    <td>{booking.totalDay}</td>
                    <td>{booking.status}</td>
                    <td>{booking.totalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllBooking;
