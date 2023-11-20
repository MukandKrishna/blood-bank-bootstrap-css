import React, { useState } from "react";
// import Layout from "../components/Shared/Layout/Layout";
import { Link } from "react-router-dom";
import "./HomePage.css";
import bloodDonationImage from "./img.png";
import Donate1 from "./Donate_1.png";
import logo from "./icon.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaBars } from "react-icons/fa"; // Importing React Icons
import { MdOutlineBloodtype, MdClose } from "react-icons/md";

const HomePage = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      {/* Navbar */}

      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>DHAT Blood Bank</span>
        </div>

        {/* Circular Navbar */}
        <div className="circular-navbar">
          <button className="nav-toggle" onClick={toggleNav}>
            {isNavVisible ? <MdClose /> : <FaBars />}
          </button>

          {/* Toggle Button */}
          <ul className={`nav-links ${isNavVisible ? "active" : ""}`}>
            <li className="nav-close-container">
              <button className="nav-close" onClick={toggleNav}>
                <MdClose />
              </button>
            </li>
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
        <section>
          <div className="mission">
            <div className="our-mission-2">
              <div className="text-wrapper-8">Our Mission</div>
              <p className="lorem-ipsum-is">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </section>

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

        <section className="donation-info">
          <h2>Learn About Donation</h2>
          <p>
            One Donation Can save up to three lives. After donating blood, the
            body works to replenish the blood loss...
          </p>
        </section>

        {/* Blood Types  */}

        <section>
          <div className="donation-type-section">
            <div className="donation-type-content">
              <div className="donation-type-image">
                <img src={bloodDonationImage} alt="Blood Donation" />
              </div>
            </div>
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
                    <td>O+</td>
                    <td>B+ AB+</td>
                    <td>A+ A- O+ O-</td>
                  </tr>
                  <tr>
                    <td>B+</td>
                    <td>AB+</td>
                    <td>B+ B- O+ O-</td>
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
                    <td>AB-</td>
                    <td>A+ AB+</td>
                    <td>AB- A- B- O-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/************ FOOTER **********/}

        <footer className="footer">
          <div className="footer-top">
            <MdOutlineBloodtype className="footer-logo" />
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
                <h4>Services</h4>
                <ul>
                  <li>Branding</li>
                  <li>Offline</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>About</h4>
                <ul>
                  <li>Our Story</li>
                  <li>Benefits</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Help</h4>
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

//  want to use loading and error feature in this, but showing error here
//  same in login and register page
