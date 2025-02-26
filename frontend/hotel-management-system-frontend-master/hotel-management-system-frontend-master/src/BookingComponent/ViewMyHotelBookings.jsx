import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./ViewMyHotelBookings.module.css"; // Import CSS Module

const ViewMyHotelBookings = () => {
  let user = JSON.parse(sessionStorage.getItem("active-hotel"));

  const [allBookings, setAllBookings] = useState([]);
  const [bookingStatus, setBookingStatus] = useState([]);
  const [updateBookingStatus, setUpdateBookingStatus] = useState({
    bookingId: "",
    bookingStatus: "",
  });

  const handleInput = (e) => {
    setUpdateBookingStatus({
      ...updateBookingStatus,
      [e.target.name]: e.target.value,
    });
  };

  const retrieveAllBookingStatus = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/book/hotel/fetch/status"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllBooking = async () => {
      const allBooking = await retrieveAllBooking();
      if (allBooking) {
        setAllBookings(allBooking.bookings);
      }
    };

    const getAllBookingStatus = async () => {
      const allBookingStatus = await retrieveAllBookingStatus();
      if (allBookingStatus) {
        setBookingStatus(allBookingStatus);
      }
    };

    getAllBookingStatus();
    getAllBooking();
  }, []);

  const retrieveAllBooking = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/book/hotel/fetch/bookings?hotelId=" +
        user.hotelId
    );
    console.log(response.data);
    return response.data;
  };

  const updateHotelBookingStatus = (e) => {
    fetch("http://localhost:8080/api/book/hotel/update/status", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookingStatus),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log("response", res);
        setUpdateBookingStatus({
          bookingId: "",
          bookingStatus: "",
        });
        setAllBookings(res.bookings);
      });
    });

    e.preventDefault();
  };

  return (
    <div className={styles.mt3}>
      <div
        className={`${styles.card} ${styles.customBg} ${styles.borderColor}`}
        style={{
          height: "45rem",
        }}
      >
        <div className={`${styles.cardHeader} ${styles.customBgText} ${styles.bgColor}`}>
          <h2 className={styles.primaryColor}>Hotel Bookings</h2>
        </div>
        <div
          className={styles.cardBody}
          style={{
            overflowY: "auto",
          }}
        >
          <div className={styles.tableResponsive}>
            <table className={`${styles.table} ${styles.tableHover} ${styles.textColor} ${styles.textCenter}`}>
              <thead className={`${styles.tableBordered} ${styles.borderColor} ${styles.bgColor} ${styles.customBgText}`}>
                <tr>
                  <th scope="col">Hotel</th>
                  <th scope="col">Hotel Name</th>
                  <th scope="col">Hotel Email</th>
                  <th scope="col">Hotel Contact</th>
                  <th scope="col">Booking Id</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Customer Contact</th>
                  <th scope="col">Check In</th>
                  <th scope="col">Check Out</th>
                  <th scope="col">Total Room</th>
                  <th scope="col">Total Day</th>
                  <th scope="col">Total Payable Amount</th>
                  <th scope="col">Booking Status</th>
                  <th scope="col">Update Booking Status</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.map((booking) => {
                  return (
                    <tr key={booking.bookingId}>
                      <td>
                        <img
                          src={"http://localhost:8080/api/hotel/" + booking.hotelImage}
                          className="img-fluid"
                          alt="product_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>

                      <td><b>{booking.hotelName}</b></td>
                      <td><b>{booking.hotelEmail}</b></td>
                      <td><b>{booking.hotelContact}</b></td>

                      <td><b>{booking.bookingId}</b></td>
                      <td><b>{booking.customerName}</b></td>
                      <td><b>{booking.customerContact}</b></td>

                      <td><b>{booking.checkIn}</b></td>
                      <td><b>{booking.checkOut}</b></td>
                      <td><b>{booking.totalRoom}</b></td>

                      <td><b>{booking.totalDay}</b></td>
                      <td><b>{booking.totalAmount}</b></td>
                      <td><b>{booking.status}</b></td>

                      <td>
                        {booking.status === "Pending" && (
                          <Link
                            to={`/hotel/verify/booking/${booking.id}`}
                            className={`${styles.navLink} ${styles.btn} ${styles.btnSm}`}
                          >
                            <b className={styles.textColor}>Verify Booking</b>
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMyHotelBookings;
