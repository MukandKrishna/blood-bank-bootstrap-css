// npm install --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// now logout part
import React, { useEffect, useState } from "react";
import { handleUpdate } from "../../services/authService";
import styles from "./namehide.module.css";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/features/auth/authActions";
import Layout from "../../components/Shared/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faSearch,
  // faUserCircle,
  // faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import request from "./request_icon.png";

// import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async function func() {
      const user = await getUser();
      console.log(user.user);
      setUserData(user.user);
    })();
  }, []);

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
      e.target.hideName.value
    );
  };

  return (
    <Layout>
      {/* <div className={styles.pageContainer}> */}

      <div className={styles.sidebar}>
        <Link to="/home">
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faUser} />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/namehidingform">
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faHome} />
            <span>Profile</span>
          </div>
        </Link>
        <Link to="/request">
          <div className={styles.icon}>
            <img src={request} alt="Request" />
            <span>Request</span>
          </div>
        </Link>
        <Link to="/finddonor">
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faSearch} />
            <span>Find Donor</span>
          </div>
        </Link>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.card}>
          <h2 className="profilepage">Profile Page</h2>
          <hr className="mb-2" />

          <form onSubmit={handleSubmit} className={styles.formMobile}>
            <div className="d-flex flex-wrap justify-content-evenly">
              {/* First Column */}
              <div className="column">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    value={userData.name}
                    // required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fname" className="form-label">
                    Father's Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    name="fname"
                    placeholder="Enter your father's name"
                    onChange={handleChange}
                    value={userData.fname}
                    // required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password(Optional):
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Want to update password?"
                    onChange={handleChange}
                    value={""}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bloodgroup" className="form-label">
                    {/* <span className="text-danger">*</span> */}
                    Blood Group:
                  </label>
                  <select
                    className="form-control"
                    id="bloodgroup"
                    name="bloodgroup"
                    onChange={handleChange}
                    value={userData.bloodgroup}
                    // required
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
                    className="form-control"
                    id="nukh"
                    name="nukh"
                    placeholder="Enter your nukh"
                    onChange={handleChange}
                    value={userData.nukh}
                    // required
                  />
                </div>
              </div>

              {/* Second Column */}
              <div className="column">
                <div className="mb-3">
                  <label htmlFor="akkah" className="form-label">
                    Akaah:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="akaah"
                    name="akaah"
                    placeholder="Enter your akaah"
                    onChange={handleChange}
                    value={userData.akaah}
                    // required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="donatedate" className="form-label">
                    Blood Donated Date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="donatedate"
                    name="donatedate"
                    placeholder="Enter the donated date"
                    onChange={handleChange}
                    // value={new Date(userData.donatedate)}
                    value={
                      userData.donatedate
                        ? new Date(userData.donatedate)
                            .toISOString()
                            .split("T")[0]
                        : ""
                    }

                    // required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">
                    Contact:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="contact"
                    placeholder="Enter your contact"
                    onChange={handleChange}
                    value={userData.contact}
                    // required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={userData.email}
                    // required
                  />
                </div>

                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <span className="mr-3">Name hide request:</span>
                    <input
                      type="radio"
                      id="hideYes"
                      name="hideName"
                      value="yes"
                      // onChange={handleChange}
                      // checked={userData.hideName === "yes"}
                    />
                    <label className="mr-2 ml-2" htmlFor="hideYes">
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="hideNo"
                      name="hideName"
                      value="no"
                    />
                    <label className="ml-2" htmlFor="hideNo">
                      No
                    </label>
                  </div>
                  <button className={styles.button} type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </Layout>
    // </div>
  );
};

export default App;
