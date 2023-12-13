import React, { useState } from "react";
// import Layout from "../components/Shared/Layout/Layout";
import { Link } from "react-router-dom";
import "./HomePage.css";
import bloodDonationImage from "./why.png";
import Donate1 from "./Donate_1.png";
import logo from "./logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaBars } from "react-icons/fa"; // Importing React Icons
import { MdClose } from "react-icons/md";
// MdOutlineBloodtype,
import { FaMoon, FaSun } from "react-icons/fa";

const HomePage = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle("night-mode");
  };
  return (
    <>
      {/* Navbar */}

      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span className="logo-text">DHAT Blood Bank</span>
        </div>

        {/* Circular Navbar */}
        <div className="circular-navbar">
          <button className="nav-toggle" onClick={toggleNav}>
            {isNavVisible ? <MdClose /> : <FaBars />}
          </button>

          {/* Toggle Button for Night Mode with Icon */}
          <button className="night-mode-toggle" onClick={toggleNightMode}>
            {isNightMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Toggle Button */}
          <ul className={`nav-links ${isNavVisible ? "active" : ""}`}>
            <div className="nav-close-container">
              <button className="nav-close" onClick={toggleNav}>
                <MdClose />
              </button>
            </div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/donate">Donate Blood</Link>
            </li>
            <li>
              <Link to="/register">Register Now</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <div>
        <h1 className="homepage">HomePage</h1>
      </div> */}

      <div>
        <div
          className="donate-section"
          style={{ textAlign: "center", margin: "auto" }}
        >
          <div className="donate-text">
            <h1>Be a hero in someone's story - donate blood today. </h1>
            <p style={{ textAlign: "justify" }}>
              Did you know that every two seconds, someone needs blood?
              Surprisingly, only 3% of eligible people donate. Your donation
              helps in emergencies, surgeries, and treatments for illnesses like
              cancer. Imagine, a single car crash victim might need 100 units of
              blood! Join the movement – over 117 million people donate each
              year, making a huge impact. Your simple act can be a lifeline for
              someone in need. Give the gift of life – be a blood donor and make
              a difference!
            </p>
            <button className="donate_1">Donate Blood →</button>

            {/* <button className="newsletter-submit-button">&gt;</button> */}
          </div>
          <div className="donate-image">
            <img src={Donate1} alt="Donate Blood, Save Lives" />
          </div>
        </div>

        <div
          className="mission"
          style={{ textAlign: "center", margin: "auto" }}
        >
          <div className="mission-text">
            <h1>Our Mission </h1>
            <p style={{ textAlign: "justify" }}>
              Saving Lives, Building Hope: Maheshwari Blood Bank is a heartbeat
              of compassion, where every drop of donated blood is a lifeline.
              Join us in this journey of giving, uniting our community in the
              warmth of shared humanity. Together, we are the heartbeat of hope.
            </p>
          </div>
        </div>

        {/* <section className="donation-info"> */}
        <h2 style={{ textAlign: "center" }}>Learn About Donation</h2>
        {/* </section> */}

        {/* Blood Types  */}

        <section>
          <div className="donation-type-section">
            {/* <div className="donation-type-content"> */}
            <div className="donation-type-image">
              <img src={bloodDonationImage} alt="Blood Donation" />
            </div>
            {/* </div> */}
            <div className="blood-type-table">
              <h2>Compatible Blood Type Donors</h2>
              {/* Table structure */}
              <table>
                {/* Table header */}
                <thead>
                  <tr>
                    <th>Blood Type</th>
                    <th>Donate Blood To</th>
                    <th>Receive Blood From</th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody>
                  <tr>
                    <td>A+</td>
                    <td>A+ AB+</td>
                    <td>A+ A- O+ O-</td>
                  </tr>

                  <tr>
                    <td>B+</td>
                    <td>AB+</td>
                    <td>B+ B- O+ O-</td>
                  </tr>

                  <tr>
                    <td>O+</td>
                    <td>B+ AB+</td>
                    <td>A+ A- O+ O-</td>
                  </tr>

                  <tr>
                    <td>AB+</td>
                    <td>AB+</td>
                    <td>Everyone</td>
                  </tr>
                  <tr>
                    <td>A-</td>
                    <td>A+ A- AB+ AB-</td>
                    <td>A+ A- O+ O-</td>
                  </tr>
                  <tr>
                    <td>B-</td>
                    <td>B+ B- AB+ AB-</td>
                    <td>B- O-</td>
                  </tr>

                  <tr>
                    <td>O+</td>
                    <td>B+ AB+</td>
                    <td>A+ A- O+ O-</td>
                  </tr>

                  <tr>
                    <td>O-</td>
                    <td>O-</td>
                    <td>O-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/************ FOOTER **********/}

        <footer className="footer">
          <div className="footer-top">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="footer-cta">
              <span>Ready to get started?</span>
              <button className="donate-button">Donate</button>
            </div>
          </div>

          <div className="footer-middle">
            <div className="footer-newsletter">
              <h4>Subscribe to our newsletter</h4>
              <div className="newsletter-input-group">
                <input type="email" placeholder="Email address" />
                <button type="button" className="newsletter-submit-button">
                  &gt;
                </button>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>About Us</h4>
                <ul>
                  <li>FAQs</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-links">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
            <div className="footer-social">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </footer>
      </div>
      {/* </Layout> */}
    </>
  );
};

export default HomePage;
