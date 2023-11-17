import React from "react";
import Layout from "../components/Shared/Layout/Layout";
import "./HomePage.css";
import bloodDonationImage from "./img.png";
const HomePage = () => {
  return (
    <Layout>
      <h1 className="homepage">HomePage</h1>
      <div>
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

        {/* FOOTER */}

        <footer className="homepage-footer">
          <div className="footer-column">
            <h4>Looking for Blood</h4>
            <ul>
              <li>Blood Availability</li>
              <li>Blood Bank Directory</li>
              <li>Thalassemia Request</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Want to Donate Blood</h4>
            <ul>
              <li>Blood Donation Camps</li>
              <li>Donor Login</li>
              <li>About Blood Donation</li>
              <li>Register VBD Camp</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Blood Bank Login</h4>
            <ul>
              <li>DMYF Login</li>
              <li>Add your Blood Bank</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li>About DMYF</li>
              <li>Notifications</li>
              <li>DMYF FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default HomePage;

//  want to use loading and error feature in this, but showing error here
//  same in login and register page
