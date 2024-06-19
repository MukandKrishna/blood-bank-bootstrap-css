// modules installation

// npm install --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// now logout part
// import { useDispatch, useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
import styles from "./namehide.module.css";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/features/auth/authActions";
import { handleUpdate } from "../../services/authService";
import Layout from "../../components/Shared/Layout/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faInfoCircle } from "@fortawesome/free-solid-svg-icons"; // Add faInfoCircle
import { Tooltip } from "react-tooltip";
// import ReactTooltip from "react-tooltip"; // Import ReactTooltip
import request from "../auth/request_icon.png";
import home from "../auth/home_icon.png";
import profile from "../auth/profile_icon.png";

const App = () => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [userData, setUserData] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEligible, setIsEligible] = useState(true);

  useEffect(() => {
    (async function func() {
      const user = await getUser();
      setUserData(user.user);
      checkEligibility(user.user.donatedate);
    })();
  }, []);

  const checkEligibility = (donatedate) => {
    if (donatedate) {
      const lastDonationDate = new Date(donatedate);
      const currentDate = new Date();
      const differenceInDays =
        (currentDate - lastDonationDate) / (1000 * 3600 * 24);
      if (differenceInDays < 90) {
        setIsEligible(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(
      e,
      e.target.name.value,
      e.target.fname.value,
      e.target.password.value,
      e.target.email.value,
      e.target.bloodgroup.value,
      e.target.donatedate.value,
      e.target.nukh.value,
      e.target.contact.value,
      e.target.akaah.value,
      e.target.address.value,
      e.target.hideName.value
    );
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // const formatDate = (dateString) => {
  //   if (!dateString) return "";
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString();
  // };

  return (
    <Layout>
      {/* Sidebar toggle button */}
      <div className={styles.menuToggle} onClick={toggleSidebar}>
        &#9776;
      </div>
      <div
        className={`${styles.sidebar} ${
          sidebarOpen ? styles.open : styles.closed
        }`}
      >
        <Link to="/LandingPage" onClick={toggleSidebar}>
          <div className={styles.icon}>
            <img src={home} alt="Home" className={styles.iconImage} />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/NameHidingForm" onClick={toggleSidebar}>
          <div className={styles.icon}>
            <img src={profile} alt="Profile" className={styles.iconImage} />
            <span>Profile</span>
          </div>
        </Link>
        <Link to="/request" onClick={toggleSidebar}>
          <div className={styles.icon}>
            <img src={request} alt="Request" className={styles.iconImage} />
            <span>Request</span>
          </div>
        </Link>
        <Link to="/donor" onClick={toggleSidebar}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faSearch} />
            <span>Donor</span>
          </div>
        </Link>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.card}>
          <h2 className="profileName">Profile Page</h2>
          <hr className="mb-2" />
          <form onSubmit={handleSubmit} className={styles.formMobile}>
            <div className="d-flex flex-wrap justify-content-evenly">
              <div className="column">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    value={userData.name || ""}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fname" className="form-label">
                    Father's Name:
                  </label>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="fname"
                    name="fname"
                    placeholder="Enter your father's name"
                    onChange={handleChange}
                    value={userData.fname || ""}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bloodgroup" className="form-label">
                    Blood Group:
                  </label>
                  <select
                    className={styles.formControl}
                    id="bloodgroup"
                    name="bloodgroup"
                    onChange={handleChange}
                    value={userData.bloodgroup || ""}
                  >
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map((group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="nukh" className="form-label">
                    Nukh:
                  </label>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="nukh"
                    name="nukh"
                    placeholder="Enter your nukh"
                    onChange={handleChange}
                    value={userData.nukh || ""}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="akaah" className="form-label">
                    Akaah:
                  </label>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="akaah"
                    name="akaah"
                    placeholder="Enter your akaah"
                    onChange={handleChange}
                    value={userData.akaah || ""}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address:
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      data-tooltip-id="address-tooltip"
                    />
                    <Tooltip id="address-tooltip">
                      Enter address in the format: Johar, Karachi.
                    </Tooltip>
                  </label>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="address"
                    name="address"
                    placeholder="e.g., Johar, Karachi."
                    onChange={handleChange}
                    value={userData.address || ""}
                  />
                </div>
              </div>

              <div className="column">
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className={styles.formControl}
                    id="password"
                    name="password"
                    placeholder="Want to update password?"
                    onChange={handleChange}
                    value={""}
                    // value={userData.password || ""}
                  />
                </div>
                {!isEligible ? (
                  <div className="mb-3">
                    <p>
                      You are not eligible to donate blood. You have donated
                      blood in the past 90 days.
                    </p>
                  </div>
                ) : (
                  <div className="mb-3">
                    <label htmlFor="donatedate" className="form-label">
                      Last Blood Donated Date:
                    </label>
                    <input
                      type="date"
                      className={styles.formControl}
                      id="donatedate"
                      name="donatedate"
                      onChange={handleChange}
                      value={
                        userData.donatedate
                          ? new Date(userData.donatedate)
                              .toISOString()
                              .split("T")[0]
                          : ""
                      }
                    />
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">
                    Contact:
                  </label>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="contact"
                    name="contact"
                    placeholder="Enter your contact"
                    onChange={handleChange}
                    value={userData.contact || ""}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className={styles.formControl}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={userData.email || ""}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="hideName" className="form-label">
                    Do you want to hide your name?
                  </label>
                  <select
                    className={styles.formControl}
                    id="hideName"
                    name="hideName"
                    onChange={handleChange}
                    value={userData.hideName || ""}
                  >
                    <option value="">Select Option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <button type="submit" className={styles.button}>
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default App;
