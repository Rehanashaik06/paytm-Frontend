import React from "react";
import "./Navbar.css";

import {
  FaMobileAlt,
  FaTicketAlt,
  FaDownload,
  FaUserCircle,
  FaChevronDown
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">

      {/* LEFT SECTION */}

      <div className="nav-left">

        <a className="logo" href="/">

          <h1 className="brand">

            <span className="logo-pay">Pay</span>

            <span className="logo-tm">tm</span>

          </h1>

        </a>

      </div>

      {/* CENTER NAVIGATION */}

      <nav className="nav-center">

        <ul className="nav-links">

          {/* RECHARGE & BILLS */}

          <li className="has-dropdown">

            <FaMobileAlt className="nav-icon" />

            <span>Recharge & Bills</span>

            <FaChevronDown className="chev" />

            <div className="dropdown">

              <ul>

                <li>
                  <a href="/recharge">
                    Mobile Recharge
                  </a>
                </li>

                <li>
                  <a href="/dth">
                    DTH Recharge
                  </a>
                </li>

                <li>
                  <a href="/fastag">
                    FasTag Recharge
                  </a>
                </li>

                <li>
                  <a href="/electricity">
                    Electricity Bill
                  </a>
                </li>

              </ul>

            </div>

          </li>

          {/* TICKET BOOKING */}

          <li className="has-dropdown">

            <FaTicketAlt className="nav-icon" />

            <span>Ticket Booking</span>

            <FaChevronDown className="chev" />

            <div className="dropdown">

              <ul>

                <li>
                  <a href="/flights">
                    Flights
                  </a>
                </li>

                <li>
                  <a href="/trains">
                    Trains
                  </a>
                </li>

                <li>
                  <a href="/bus">
                    Bus
                  </a>
                </li>

              </ul>

            </div>

          </li>

          {/* PAYMENTS & SERVICES */}

          <li className="has-dropdown">

            <span>Payments & Services</span>

            <FaChevronDown className="chev" />

            <div className="dropdown">

              <ul>

                <li>
                  <a href="/wallet">
                    Wallet
                  </a>
                </li>

                <li>
                  <a href="/upi">
                    UPI
                  </a>
                </li>

                <li>
                  <a href="/bank-transfer">
                    Bank Transfer
                  </a>
                </li>

              </ul>

            </div>

          </li>

          {/* PAYTM FOR BUSINESS */}

          <li className="has-dropdown">

            <span>Paytm for Business</span>

            <FaChevronDown className="chev" />

            <div className="dropdown">

              <ul>

                <li>
                  <a href="/business-payments">
                    Business Payments
                  </a>
                </li>

                <li>
                  <a href="/pos-billing">
                    POS Billing
                  </a>
                </li>

                <li>
                  <a href="/business-loans">
                    Business Loans
                  </a>
                </li>

              </ul>

            </div>

          </li>

          {/* COMPANY */}

          <li className="has-dropdown">

            <span>Company</span>

            <FaChevronDown className="chev" />

            <div className="dropdown">

              <ul>

                <li>
                  <a href="/about">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="/careers">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="/blog">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="/investors">
                    Investor Relations
                  </a>
                </li>

              </ul>

            </div>

          </li>

        </ul>

      </nav>

      {/* RIGHT SECTION */}

      <div className="nav-right">

        <button className="download-btn">

          <FaDownload />

          Download App

        </button>

        <button className="signin-btn">

          <FaUserCircle />

          Sign In

        </button>

      </div>

    </header>
  );
};

export default Navbar;