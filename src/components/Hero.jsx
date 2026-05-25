/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";

import axios from "axios";

import "./Hero.css";

import {
  FaMobileAlt,
  FaTv,
  FaTag,
  FaBolt,
  FaMoneyBillWave,
  FaThLarge,
  FaPlane,
  FaBus,
  FaTrain,
  FaHotel
} from "react-icons/fa";

import Modal from "./Modal";

const Hero = () => {

  // MODAL STATES
  const [modalOpen, setModalOpen] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  // BOOKINGS STATE
  const [bookings, setBookings] = useState([]);


  // FETCH BOOKINGS FROM BACKEND

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/bookings")

      .then((res) => {

        setBookings(res.data);

      })

      .catch((err) => {

        console.log(err);

      });

  }, []);


  // OPEN MODAL

  const openModal = (title) => {

    switch (title) {

      case "Flight Tickets":
        setModalTitle("✈️ Flight Ticket Booking Started!");
        break;

      case "Bus Tickets":
        setModalTitle("🚌 Bus Ticket Booking Started!");
        break;

      case "Train Tickets":
        setModalTitle("🚆 Train Ticket Booking Started!");
        break;

      case "Hotel Booking":
        setModalTitle("🏨 Hotel Booking Started!");
        break;

      case "Booking Updated Successfully!":
        setModalTitle("✅ Booking Updated Successfully!");
        break;

      default:
        setModalTitle(title);

    }

    setModalOpen(true);

  };


  // CREATE BOOKING

  const addBooking = (type) => {

    axios
      .post("http://localhost:5000/api/bookings", {

        type: type,

        name: "New Booking"

      })

      .then((res) => {

        setBookings([...bookings, res.data]);

        openModal(type);

      })

      .catch((err) => {

        console.log(err);

      });

  };


  // DELETE BOOKING

  const deleteBooking = (id) => {

    axios
      .delete(`http://localhost:5000/api/bookings/${id}`)

      .then(() => {

        setBookings(

          bookings.filter(

            (booking) => booking.id !== id

          )

        );

      })

      .catch((err) => {

        console.log(err);

      });

  };


  // UPDATE BOOKING

  const updateBooking = (id) => {

    axios
      .put(`http://localhost:5000/api/bookings/${id}`, {

        name: "Updated Booking"

      })

      .then(() => {

        setBookings(

          bookings.map((booking) =>

            booking.id === id

              ? { ...booking, name: "Updated Booking" }

              : booking

          )

        );

        openModal("Booking Updated Successfully!");

      })

      .catch((err) => {

        console.log(err);

      });

  };


  return (

    <section className="hero">

      <div className="hero-inner">

        {/* RECHARGE & BILL PAYMENTS */}

        <div className="recharge-box">

          <h2>Recharges & Bill Payments</h2>

          <div className="recharge-grid">

            <div className="recharge-item">

              <div className="icon-circle">
                <FaMobileAlt className="r-icon" />
              </div>

              <span>Mobile Recharge</span>

            </div>

            <div className="recharge-item">

              <div className="icon-circle">
                <FaTv className="r-icon" />
              </div>

              <span>DTH Recharge</span>

            </div>

            <div className="recharge-item">

              <div className="icon-circle">
                <FaTag className="r-icon" />
              </div>

              <span>FasTag Recharge</span>

            </div>

            <div className="recharge-item">

              <div className="icon-circle">
                <FaBolt className="r-icon" />
              </div>

              <span>Electricity Bill</span>

            </div>

            <div className="recharge-item">

              <div className="icon-circle">
                <FaMoneyBillWave className="r-icon" />
              </div>

              <span>Loan EMI Payment</span>

            </div>

            <div className="recharge-item">

              <div className="icon-circle">
                <FaThLarge className="r-icon" />
              </div>

              <span>View All Products</span>

            </div>

          </div>

        </div>


        {/* TICKET BOOKING */}

        <div className="recharge-box">

          <h2>Book Tickets & Travel</h2>

          <div className="recharge-grid">

            {/* FLIGHT */}

            <div className="recharge-item">

              <div className="icon-circle">
                <FaPlane className="r-icon" />
              </div>

              <span>Flight Tickets</span>

              <button
                className="book-btn"
                onClick={() => addBooking("Flight Tickets")}
              >
                Book Now
              </button>

            </div>


            {/* BUS */}

            <div className="recharge-item">

              <div className="icon-circle">
                <FaBus className="r-icon" />
              </div>

              <span>Bus Tickets</span>

              <button
                className="book-btn"
                onClick={() => addBooking("Bus Tickets")}
              >
                Book Now
              </button>

            </div>


            {/* TRAIN */}

            <div className="recharge-item">

              <div className="icon-circle">
                <FaTrain className="r-icon" />
              </div>

              <span>Train Tickets</span>

              <button
                className="book-btn"
                onClick={() => addBooking("Train Tickets")}
              >
                Book Now
              </button>

            </div>


            {/* HOTEL */}

            <div className="recharge-item">

              <div className="icon-circle">
                <FaHotel className="r-icon" />
              </div>

              <span>Hotel Booking</span>

              <button
                className="book-btn"
                onClick={() => addBooking("Hotel Booking")}
              >
                Book Now
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* BOOKINGS SECTION */}

      <div className="booking-list">

        <h2>My Bookings</h2>

        {

          bookings.map((booking) => (

            <div
              className="booking-card"
              key={booking.id}
            >

              <h3>{booking.type}</h3>

              <p>{booking.name}</p>

              <div className="booking-actions">

                <button
                  className="update-btn"
                  onClick={() => updateBooking(booking.id)}
                >
                  Update
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteBooking(booking.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        }

      </div>


      {/* MODAL */}

      {

        modalOpen && (

          <Modal
            title={modalTitle}
            onClose={() => setModalOpen(false)}
          >

            <p>
              Your process has started successfully.
            </p>

            <p style={{ marginTop: "10px" }}>
              Redirecting to secure page...
            </p>

          </Modal>

        )

      }

    </section>

  );

};

export default Hero;