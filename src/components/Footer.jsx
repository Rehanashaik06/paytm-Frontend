import React from "react";
import "./Footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-section">
          <h3>Paytm Clone</h3>
          <p>Recharge, Book Tickets & Pay Bills easily.</p>
        </div>

        <div className="footer-section">
          <h4>Services</h4>

          <p>Mobile Recharge</p>
          <p>Flight Booking</p>
          <p>Bill Payments</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>

          <p>About</p>
          <p>Careers</p>
          <p>Help & Support</p>
        </div>

      </div>

      <div className="social-icons">

        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />

      </div>

      <p className="copyright">
        © 2026 Paytm Clone. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;